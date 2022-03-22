module.exports = {
    name: 'birb',
    permissions: ['sendMessages', 'embedLinks'],
    cooldown: 3,
    async execute(Yui, message, args) {
        const { KSoftClient } = require('@ksoft/api')
        const ksoft = new KSoftClient(require('../../../config.json').KSOFT_API_KEY)
        const birb = await ksoft.images.random('birb')
        message.channel.createMessage({
            embed: {
                author: {
                    name: 'How cute 🐦',
                    url: birb.url
                },
                image: {
                    url: birb.url
                },
                color: Yui.misc.getColor(null, 'default')
            }
        })
    }
}