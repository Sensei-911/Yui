module.exports = {
    name: 'slap',
    cooldown: 2,
    permissions: ['sendMessages', 'embedLinks'],
    async execute(Yui, message, args) {
        const image = await Yui.misc.jsonData('../assets/roleplay.json', 'slap')
        const target = message.mentions[0]
        if (!target) {
            message.channel.createMessage(`${message.author.mention}, please try to mention someone :^3`)
        } else if (target.id === message.author.id) {
            message.channel.createMessage(`Don't do that to yourself, ${message.author.username}`)
        } else if (target) {
            message.channel.createMessage({
                embed: {
                    author: {
                        name: `${message.author.username} is slapping ${target.username}`,
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
}