module.exports = {
    name: 'flip',
    aliases: ['coinflip', 'cf'],
    cooldown: 15,
    permissions: ['sendMessages', 'embedLinks'],
    async execute(Yui, message, args) {
        const coinFaces = ['heads', 'tails']
        const coinFace = coinFaces[Math.floor(Math.random() * coinFaces.length)]
        const balance = await Yui.db.getCoins(message.author.id)

        if (!args[0]) return message.channel.createMessage({
            embed: {
                title: 'Example Usage',
                description: '```\ny!flip <heads/tails> <bet>\n```',
                color: Yui.misc.getColor(null, 'default')
            }
        })

        const check = await Yui.misc.checkCurrency(0, 1, balance, args)
        if (check.boolean == false) return message.channel.createMessage(check.message)

        if (args[0].toLowerCase() == coinFace) {
            message.channel.createMessage(`The coin landed on ${coinFace}, **winning** ${check.amount.toLocaleString()} coins! 🎉🎉🎉`)
            await Yui.db.addCoins(message.author.id, check.amount)
        } else if (args[0].toLowerCase() != coinFace) {
            message.channel.createMessage(`The coin landed on ${coinFace}, **losing** ${check.amount.toLocaleString()} coins!`)
            await Yui.db.removeCoins(message.author.id, check.amount)
        }
    }
}