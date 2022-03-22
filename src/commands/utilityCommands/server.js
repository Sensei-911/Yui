module.exports = {
    name: 'server',
    description: 'Gives information about the current server.',
    cooldown: 3,
    permissions: ['sendMessages', 'embedLinks'],
    async execute(Yui, message, args) {
        const moment = require('moment')
        const guild = message.channel.guild
        const owner = await Yui.getRESTUser(guild.ownerID)

        const animatedEmojis = guild.emojis.filter(function (e) {
            return e.animated == true
        })

        const staticEmojis = guild.emojis.filter(function (e) {
            return e.animated == false
        })

        const categories = guild.channels.filter(function (e) {
            return e.type == 4
        })

        const voice = guild.channels.filter(function (e) {
            return e.type == 2
        })
        const text = guild.channels.filter(function (e) {
            return e.type == 0
        })

        const json = []
        message.channel.guild.roles.filter(r => r.position !== 0).map(role => json.push({
            name: role.name,
            position: role.position
        }))
        var roles = json.sort(function (a, b) {
            return b.position - a.position
        })
        var roles = roles.map(function (e) {
            return e.name
        })

        const banArray = await guild.getBans()
        const banCount = banArray.map(a => a.id)

        const createdAt = moment.utc(guild.createdAt).format('dddd, D MMMM, YYYY')
        const whenCreated = moment.utc(guild.createdAt).fromNow()

        message.channel.createMessage({
            embed: {
                title: `${guild.name} (ID: ${guild.id})`,
                thumbnail: {
                    url: guild.iconURL
                },
                description: `**Here is some information about ${guild.name}**`,
                fields: [{
                        name: '👑 Owner',
                        value: `${owner.username}#${owner.discriminator}`,
                        inline: true
                    },
                    {
                        name: '👥 Members',
                        value: `**${guild.memberCount}** Users`,
                        inline: true
                    },
                    {
                        name: `😎 Emotes (${guild.emojis.length})`,
                        value: `Static: **${staticEmojis.length}**\nAnimated: **${animatedEmojis.length}**`,
                        inline: true
                    },
                    {
                        name: '🗂️ Categories',
                        value: `**${categories.length}** Categories`,
                        inline: true
                    },
                    {
                        name: `💬 Channels (${text.length + voice.length})`,
                        value: `Text: **${text.length}**\nVoice: **${voice.length}**`,
                        inline: true
                    },
                    {
                        name: `🛡 Banned`,
                        value: `**${banCount.length}** Members`,
                        inline: true
                    },
                    {
                        name: `📜 Roles (${guild.roles.size})`,
                        value: `\`\`\`${roles.join(', ')}\`\`\``,
                        inline: false
                    },
                    {
                        name: `📅 Created At`,
                        value: `${createdAt} **(${whenCreated})**`,
                        inline: false
                    }
                ],
                color: Yui.misc.getColor(null, 'default')

            }
        })
    }
}