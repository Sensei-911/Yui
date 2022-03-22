module.exports = {
    name: 'slots',
    description: 'Take your chances at a slot machine.',
    aliases: ['slotmachine'],
    cooldown: 15,
    permissions: ['sendMessages', 'embedLinks'],
    async execute(Yui, message, args) {
        const slotItems = ['💰', '🔥', '✨', '🏆', '💎', '🔔', '💥', '🥇']
        const balance = await Yui.db.getCoins(message.author.id)

        const check = await Yui.misc.checkCurrency(0, 0, balance, args)
        if (check.boolean == false) return message.channel.createMessage(check.message)

        let win = false

        let number = []
        for (i = 0; i < 3; i++) {
            number[i] = Math.floor(Math.random() * slotItems.length)
        }

        if (number[0] == number[1] && number[1] == number[2]) {
            check.amount *= 9
            win = true
        } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
            check.amount *= 2
            win = true
        }

        if (win) {
            await Yui.db.addCoins(message.author.id, check.amount)
            let newBalance = balance + check.amount
            message.channel.createMessage({
                embed: {
                    description: `**>** ${slotItems[number[0]]} ${slotItems[number[1]]} ${slotItems[number[2]]} **<**\n\nYou won **${check.amount.toLocaleString()}**\nMultiplier \`2x\`\nYou now have **${newBalance.toLocaleString()}**`,
                    color: 0x66ff00,
                    footer: {
                        text: 'winner winner'
                    }
                }
            })
        } else {
            await Yui.db.addCoins(message.author.id, -check.amount)
            let newBalance = balance - check.amount
            message.channel.createMessage({
                embed: {
                    description: `**>** ${slotItems[number[0]]} ${slotItems[number[1]]} ${slotItems[number[2]]} **<**\n\nYou lost **${check.amount.toLocaleString()}**\nYou now have **${newBalance.toLocaleString()}**`,
                    color: 0xff0000,
                    footer: {
                        text: 'sucks to suck'
                    }
                }
            })
        }
    }
}