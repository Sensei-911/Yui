module.exports = {
    name: 'cat',
    permissions: ['sendMessages', 'embedLinks'],
    cooldown: 3,
    async execute(Yui, message, args) {
        const { KSoftClient } = require('@ksoft/api')
        const ksoft = new KSoftClient(require('../../../config.json').KSOFT_API_KEY)
        const cat = await ksoft.images.random('cat')
        message.channel.createMessage({
            embed: {
                author: {
                    name: 'Meow 😻',
                    url: cat.url
                },
                image: {
                    url: cat.url
                },
                color: Yui.misc.getColor(null, 'default')
            }
        })
    }
}