module.exports = {
    name: 'give',
    cooldown: 3,
    aliases: ['transfer', 'send'],
    async execute(Yui, message, args) {
        const balance = await Yui.db.getCoins(message.author.id)

        if (!args[0]) return message.channel.createMessage('Please specify a user.')
        if (!args[1]) return message.channel.createMessage('Please specify the coin amount.')

        const moneyAmount = parseInt(args[1])

        if (moneyAmount < 0) return message.channel.createMessage('You cannot give money in negative numbers')
        if (moneyAmount > balance) return message.channel.createMessage('You dont have that much money!')

        const target = message.mentions[0]

        await Yui.db.addCoins(target.id, moneyAmount)
        await Yui.db.removeCoins(message.author.id, moneyAmount)

        message.channel.createMessage({
            embed: {
                description: `You successfully gived ${target.mention} to ${moneyAmount} coins!`,
                color: Yui.misc.getColor('positive', 'situation')
            }
        })
    }
}