module.exports = {
    name: 'kick',
    permissions: ['sendMessages', 'kickMembers'],
    memberPermissions: ['kickMembers'],
    cooldown: 2,
    async execute(Yui, message, args) {
        if (!args[0]) return message.channel.createMessage('Please specify a member to kick.')

        try {
            let member
            if (message.mentions[0]) member = await Yui.getRESTGuildMember(message.guildID, message.mentions[0].id)
            else member = await Yui.getRESTGuildMember(message.guildID, args[0])

            let reason = args.slice(1).join(' ')
            if (!reason) reason = (`Kickked by ${message.author.username}.`)

            if (member.id == message.author.id) return message.channel.createMessage("You can't kick yourself!")

            let memberHighestRole
            let messageMemberHighestRole

            if (member.roles.length > 0) memberHighestRole = message.channel.guild.roles.filter(r => member.roles.includes(r.id)).sort((a, b) => b.position - a.position)[0].position
            if (message.member.roles.length > 0) messageMemberHighestRole = message.channel.guild.roles.filter(r => message.member.roles.includes(r.id)).sort((a, b) => b.position - a.position)[0].position

            if (memberHighestRole > messageMemberHighestRole || memberHighestRole == messageMemberHighestRole) return message.channel.createMessage(`You can't kick this member!`)

            await Yui.kickGuildMember(message.guildID, member.id, reason)
            await message.channel.createMessage(`**${member.user.username}#${member.user.discriminator}** successfully kicked.`)
        } catch (e) {
            message.channel.createMessage(`I am not high enough in the role hierarchy to do that.`)
        }
    }
}