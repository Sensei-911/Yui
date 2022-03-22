module.exports = {
    name: 'massban',
    memberPermissions: ['banMembers'],
    permissions: ['sendMessages', 'banMembers'],
    cooldown: 5,
    async execute(Yui, message, args) {
        const IDs = []
        const unableToBan = []
        const notID = []

        const members = message.mentions.map(member => member.id)
        members.forEach(member => IDs.push(member))

        for (let userID of args) {
            await Yui.getRESTUser(userID).then(user => IDs.push(user.id)).catch(() => notID.push(userID))
        }

        if (IDs.length < 1) return message.channel.createMessage(notID.length > 0 ? `${notID.join(', ')} not a valid member or member ID.` : 'You need to specify some users to ban.')

        var isMember = true
        let memberHighestRole
        let messageMemberHighestRole

        for (let ID of IDs) {
            if (ID == message.author.id) return message.channel.createMessage('You cannot ban yourself.')
            if (ID == Yui.user.id) return message.channel.createMessage('I cannot ban myself.')
            if (ID == message.channel.guild.ownerID) return message.channel.createMessage('You cannot ban the owner.')

            const member = await Yui.getRESTGuildMember(message.guildID, ID).catch(() => isMember = false)

            if (isMember == true) {
                try {
                    if (member.roles.length > 0) memberHighestRole = message.channel.guild.roles.filter(role => member.roles.includes(role.id)).sort((a, b) => b.position - a.position)[0].position
                    if (message.member.roles.length > 0) messageMemberHighestRole = message.channel.guild.roles.filter(role => message.member.roles.includes(role.id)).sort((a, b) => b.position - a.position)[0].position
                } catch (e) {}

                if (message.author.id != message.channel.guild.ownerID) {
                    if (memberHighestRole > messageMemberHighestRole || memberHighestRole == messageMemberHighestRole) {
                        unableToBan.push(ID)
                        delete IDs[IDs.indexOf(ID)]
                        IDs.length = IDs.length - 1
                    }
                }
            }
        }

        const bannedUsers = []

        for (let ID of IDs) {
            await Yui.banGuildMember(message.guildID, ID, 1, `Massbanned by ${message.author.username}#${message.author.discriminator}`).then(user => bannedUsers.push(user)).catch(e => {
                unableToBan.push(ID)
                delete IDs[IDs.indexOf(ID)]
                IDs.length = IDs.length - 1
            })
        }

        if (bannedUsers.length > 0) {
            message.channel.createMessage(unableToBan > 0 ? `Banned **${bannedUsers.length}** member(s), unable to ban **${unableToBan.length}** member(s).` : `Banned **${bannedUsers.length}** member(s).`)
        } else {
            message.channel.createMessage(`No one banned, unable to ban **${unableToBan.length}** member(s).`)
        }
    }
}