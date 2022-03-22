module.exports = {
    name: 'gamble',
    aliases: ['bet'],
    cooldown: 15,
    permissions: ['sendMessages', 'embedLinks'],
    async execute(Yui, message, args) {
        const balance = await Yui.db.getCoins(message.author.id)

        const check = await Yui.misc.checkCurrency(0, 0, balance, args)
        if (check.boolean == false) return message.channel.createMessage(check.message)

        const roll1 = await Yui.misc.random(1, 12)
        const roll2 = await Yui.misc.random(1, 12)
        const percent = roll1 * 10 - roll2 * 10
        const percentWon = 100 + percent

        const money = check.amount / 100 * percentWon

        if (roll1 > roll2) {
            let newBalance = balance + money
            message.channel.createMessage({
                embed: {
                    author: {
                        name: `${message.author.username}'s winning gambling game`,
                        icon_url: message.author.avatarURL
                    },
                    description: `You won **${money.toLocaleString()}**\n\n**Percent Won**: ${percentWon}%\n**New Balance**: ${newBalance.toLocaleString()}`,
                    fields: [{
                        name: message.author.username,
                        value: `Rolled \`${roll1}\``,
                        inline: true
                    }, {
                        name: 'Yui',
                        value: `Rolled \`${roll2}\``,
                        inline: true
                    }],
                    color: Yui.misc.getColor('positive', 'situation')
                }
            })
            await Yui.db.addCoins(message.author.id, money)
        } else if (roll1 == roll2) {
            message.channel.createMessage({
                embed: {
                    author: {
                        name: `${message.author.username}'s gambling game`,
                        icon_url: message.author.avatarURL
                    },
                    description: `Tie! You lost nothing!\n\nYou have **${balance.toLocaleString()}**`,
                    fields: [{
                        name: message.author.username,
                        value: `Rolled \`${roll1}\``,
                        inline: true
                    }, {
                        name: 'Yui',
                        value: `Rolled \`${roll2}\``,
                        inline: true
                    }],
                    color: Yui.misc.getColor('neutral', 'situation')
                }
            })
        } else if (roll1 < roll2) {
            let newBalance = balance - check.amount
            message.channel.createMessage({
                embed: {
                    author: {
                        name: `${message.author.username}'s losing gambling game`,
                        icon_url: message.author.avatarURL
                    },
                    description: `You lost **${check.amount.toLocaleString()}**\n\n**New Balance**: ${newBalance.toLocaleString()}`,
                    fields: [{
                        name: message.author.username,
                        value: `Rolled \`${roll1}\``,
                        inline: true
                    }, {
                        name: 'Yui',
                        value: `Rolled \`${roll2}\``,
                        inline: true
                    }],
                    color: Yui.misc.getColor('negative', 'situation')
                }
            })
            await Yui.db.removeCoins(message.author.id, check.amount)
        }
    }
}