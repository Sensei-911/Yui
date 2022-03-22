module.exports = {
    name: 'meme',
    permissions: ['sendMessages', 'embedLinks'],
    cooldown: 3,
    async execute(Yui, message, args) {
        const {
            KSoftClient
        } = require('@ksoft/api')
        const ksoft = new KSoftClient(require('../../../config.json').KSOFT_API_KEY)
        const meme = await ksoft.images.meme()
        message.channel.createMessage({
            embed: {
                title: meme.post.title,
                url: meme.url,
                image: {
                    url: meme.url
                },
                color: Yui.misc.getColor(null, 'default'),
                footer: {
                    text: `👍 ${meme.post.upvotes} | 💬 ${meme.post.comments}`
                }
            }
        })
    }
}