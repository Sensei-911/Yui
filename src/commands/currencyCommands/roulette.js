module.exports = {
    name: 'roulette',
    cooldown: 0,
    permissions: ['sendMessages', 'embedLinks'],
    async execute(Yui, message, args) {
        const balance = Yui.db.getCoins(message.author.id)
        const random = Math.floor(Math.random() * 37)

        if (!args[0]) return message.channel.createMessage('Specify a color | Red [1.5x] Black [2x] Green [15x]')

        const check = await Yui.misc.checkCurrency(1, 1, balance, args)
        if (check.boolean == false) return message.channel.createMessage(check.message)

        let color = args[0].toLowerCase()

        if (color == 'b' || color.includes('black')) color = 0
        else if (color == 'r' || color.includes('red')) color = 1
        else if (color == 'g' || color.includes('green')) color = 2
        else return message.channel.createMessage(`Specify a color | Red [1.5x] Black [2x] Green [15x]`)

        if (random == 0 && color == 2) {
            check.amount *= 15
            await Yui.db.addCoins(message.author.id, check.amount)
            message.channel.createMessage({
                embed: {
                    description: `You won ${check.amount} coins\n\nMultiplier: 15x`,
                    color: Yui.misc.getColor('positive', 'situation')
                }
            })
        } else if (Yui.misc.isOdd(random) && color == 1) {
            check.amount = parseInt(check.amount * 1.5)
            await Yui.db.addCoins(message.author.id, check.amount)
            message.channel.createMessage({
                embed: {
                    description: `You won ${check.amount} coins\n\nMultiplier: 1.5x`,
                    color: Yui.misc.getColor('positive', 'situation')
                }
            })
        } else if (!Yui.misc.isOdd(random) && color == 0) {
            check.amount = parseInt(check.amount * 2)
            await Yui.db.addCoins(message.author.id, check.amount)
            message.channel.createMessage({
                embed: {
                    description: `You won ${check.amount} coins\n\nMultiplier: 2x`,
                    color: Yui.misc.getColor('positive', 'situation')
                }
            })
        } else {
            await Yui.db.removeCoins(message.author.id, check.amount)
            message.channel.createMessage({
                embed: {
                    description: `You lost ${check.amount} coins\n\nMultiplier: 0x`,
                    color: Yui.misc.getColor('negative', 'situation')
                }
            })
        }
    }
}