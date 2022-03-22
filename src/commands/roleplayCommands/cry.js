module.exports = {
    name: 'cry',
    cooldown: 2,
    permissions: ['sendMessages', 'embedLinks'],
    async execute(Yui, message, args) {
        const image = await Yui.misc.jsonData('../assets/roleplay.json', 'cry')
        message.channel.createMessage({
            embed: {
                author: {
                    name: `${message.author.username} is crying :c`,
                    icon_url: message.author.avatarURL,
                    url: image
                },
                color: Yui.misc.getColor(null, 'default'),
                image: {
                    url: image
                }
            }
        })
    }
}