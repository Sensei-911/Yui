module.exports = {
    name: 'setnick',
    description: 'Change the specified members name.',
    memberPermissions: ['manageNicknames'],
    permissions: ['sendMessages', 'manageNicknames'],
    async execute(Yui, message, args) {
        try {
            const name = args.slice(1).join(' ')

            let member
            if (message.mentions[0]) member = await Yui.getRESTGuildMember(message.guildID, message.mentions[0].id)
            else member = await Yui.getRESTGuildMember(message.guildID, args[0])

            if (!member) return message.channel.createMessage(`Please specify a member with id or mention.`)
            if (!args[1]) return message.channel.createMessage(`Please enter a nickname.`)
            if (name.length > 32) return message.channel.createMessage('Please enter a name with no exceeding `32` characters.')

            let memberHighestRole
            let messageMemberHighestRole
            let yuiHighestRole

            if (member.roles.length > 0) memberHighestRole = message.channel.guild.roles.filter(r => member.roles.includes(r.id)).sort((a, b) => b.position - a.position)[0].position
            if (message.member.roles.length > 0) messageMemberHighestRole = message.channel.guild.roles.filter(r => message.member.roles.includes(r.id)).sort((a, b) => b.position - a.position)[0].position

            const yui = await Yui.getRESTGuildMember(message.guildID, Yui.user.id)
            if (yui.roles.length > 0) yuiHighestRole = message.channel.guild.roles.filter(r => yui.roles.includes(r.id)).sort((a, b) => b.position - a.position)[0].position

            if (yuiHighestRole < memberHighestRole || yuiHighestRole == memberHighestRole) return message.channel.createMessage(`I dont have enough permissions to set this member a nick name!`)
            if (memberHighestRole > messageMemberHighestRole || yuiHighestRole == memberHighestRole) return message.channel.createMessage(`You can't set a nick to this member!`)

            member.edit({
                nick: name
            }, `${message.author.username}#${message.author.discriminator} used setnick command.`)
            message.channel.createMessage(`The nickname of the member named \`${member.username}\` has been changed to \`${name}\`.`)
        } catch (error) {
            message.channel.createMessage('I do not have enough permissions or specified member not a valid member.')
        }
    }
}