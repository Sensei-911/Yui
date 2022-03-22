module.exports = {
    name: 'ero',
    isNSFW: true,
    permissions: ['sendMessages', 'embedLinks'],
    async execute(Yui, message, args) {
        const fetch = require('node-fetch')
        const json = await fetch('https://nekos.life/api/v2/img/ero').then(response => response.json())
        message.channel.createMessage({
            embed: {
                color: Yui.misc.getColor(null, 'default'),
                image: {
                    url: json.url
                },
                footer: {
                    text: `Requested by ${message.author.username}#${message.author.discriminator}`
                },
                timestamp: new Date()
            }
        })
    }
}