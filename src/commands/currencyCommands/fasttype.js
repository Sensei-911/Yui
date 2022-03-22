module.exports = {
    name: 'fasttype',
    cooldown: 15,
    permissions: ['sendMessages', 'embedLinks'],
    async execute(Yui, message, args) {
        const typingArticles = require('../../assets/arrays.json').fasttype
        let index = Yui.misc.random(1, Object.keys(typingArticles).length)
        message.channel.createMessage({
            embed: {
                title: 'Typing Game',
                description: typingArticles[index],
                footer: {
                    text: `You have 5 minutes to make your submission`
                },
                color: Yui.misc.getColor(null, 'default')
            }
        })
        const msg = await Yui.MessageCollector.awaitMessage(message.channel.id, message.author.id, 50000)
        if (!msg) return message.channel.createMessage(`You didn't answer i can't wait for you forever.`)
        if (msg.content == typingArticles[index]) {
            message.channel.createMessage(`Nice take this **5,000 coins**!`)
            await Yui.db.addCoins(message.author.id, 5000)
        }
        if (msg.content != typingArticles[index]) message.channel.createMessage(`You have to enter the exact sentence, maybe next time sorry.`)
    }
}