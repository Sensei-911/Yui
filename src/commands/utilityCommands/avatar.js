module.exports = {
    name: 'avatar',
    cooldown: 2,
    permissions: ['sendMessages', 'embedLinks'],
    async execute(Yui, message, args) {
        var user
        var id = args[0]
        if (isNaN(args[0]) || args[0].length < 18 || args[0].length > 18) id = message.author.id
        try {
            user = (message.mentions[0] || await Yui.getRESTUser(id) || message.author)
            message.channel.createMessage({
                embed: {
                    title: `Avatar for ${user.username}#${user.discriminator}`,
                    color: Yui.misc.getColor(null, 'default'),
                    image: {
                        url: user.avatarURL
                    }
                }
            })
        } catch (error) {
            user = message.author
            message.channel.createMessage({
                embed: {
                    title: `Avatar for ${user.username}#${user.discriminator}`,
                    color: Yui.misc.getColor(null, 'default'),
                    image: {
                        url: user.avatarURL
                    }
                }
            })
        }
    }
}