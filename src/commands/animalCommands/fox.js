module.exports = {
    name: 'fox',
    permissions: ['sendMessages', 'embedLinks'],
    cooldown: 3,
    async execute(Yui, message, args) {
        const data = await Yui.http.get('https://randomfox.ca/floof/').then(res => res.body)
        message.channel.createMessage({
            embed: {
                author: {
                    name: 'No clue what the fox says 🦊',
                    url: data.image
                },
                image: {
                    url: data.image
                },
                color: Yui.misc.getColor(null, 'default')
            }
        })
    }
}