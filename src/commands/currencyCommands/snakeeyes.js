module.exports = {
    name: 'snakeeyes',
    aliases: ['se'],
    cooldown: 15,
    permissions: ['sendMessages', 'embedLinks'],
    async execute(Yui, message, args) {
        const balance = await Yui.db.getCoins(message.author.id)
        const check = await Yui.misc.checkCurrency(0, 0, balance, args)

        if (check.boolean == false) return message.channel.createMessage(check.message)

        const roll1 = await Yui.misc.random(1, 6)
        const roll2 = await Yui.misc.random(1, 6)
        const dice = {
            1: '<:d1:830554497062666321>',
            2: '<:d2:830554559088296046>',
            3: '<:d3:830554590239391784>',
            4: '<:d4:830554617527140393>',
            5: '<:d5:830554642437898240>',
            6: '<:d6:830554670216249394>'
        }

        if (roll1 == 1 && roll2 == 1) {
            check.amount *= 8
            await Yui.db.addCoins(message.author.id, check.amount)
            let newBalance = balance + check.amount
            message.channel.createMessage({
                embed: {
                    author: {
                        name: `${message.author.username}'s snake eyes game`,
                        icon_url: message.author.avatarURL
                    },
                    description: `${dice[roll1]} ${dice[roll2]}\n**SNAKE EYES!** You won **8x** your bet: **${check.amount.toLocaleString()}**\nNow you have **${newBalance.toLocaleString()}**`,
                    color: Yui.misc.getColor('positive', 'situation')
                }
            })
        } else if (roll1 == 1 && roll2 != 1 || roll1 != 1 && roll2 == 1) {
            check.amount *= 2
            await Yui.db.addCoins(message.author.id, check.amount)
            let newBalance = balance + check.amount
            message.channel.createMessage({
                embed: {
                    author: {
                        name: `${message.author.username}'s snake eyes game`,
                        icon_url: message.author.avatarURL
                    },
                    description: `${dice[roll1]} ${dice[roll2]}\nA single eye, not bad. You won **2x** your bet: **${check.amount.toLocaleString()}**\nNow you have **${newBalance.toLocaleString()}**`,
                    color: Yui.misc.getColor('positive', 'situation')
                }
            })
        } else {
            await Yui.db.removeCoins(message.author.id, check.amount)
            let newBalance = balance - check.amount
            message.channel.createMessage({
                embed: {
                    author: {
                        name: `${message.author.username}'s snake eyes game`,
                        icon_url: message.author.avatarURL
                    },
                    description: `${dice[roll1]} ${dice[roll2]}\nYou didn't get any snake eyes. Sad. You lost your bet.\nNow you have **${newBalance.toLocaleString()}**`,
                    color: Yui.misc.getColor('negative', 'situation')
                }
            })
        }
    }
}