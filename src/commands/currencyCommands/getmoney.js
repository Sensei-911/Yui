module.exports = {
    name: 'getmoney',
    cooldown: 300,
    permissions: ['sendMessages', 'embedLinks'],
    async execute(Yui, message, args) {
        const coins = await Yui.misc.random(1000, 5000)
        await Yui.db.addCoins(message.author.id, coins)
        message.channel.createMessage({
            embed: {
                description: `You claimed ${coins} coins!`,
                footer: {
                    text: 'You can use this command in 5 minutes'
                },
                color: Yui.misc.getColor('positive', 'situation')
            }
        })
    }
}