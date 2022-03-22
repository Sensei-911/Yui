module.exports = {
    name: 'prefix',
    permissions: ['sendMessages'],
    memberPermissions: ['manageGuild'],
    cooldown: 60,
    async execute(Yui, message, args) {
        const prefix = args.join(' ')
        if (!prefix) return message.channel.createMessage('What do you want your new prefix to be?\n\nExample: `yui prefix -`')
        if (args.join(' ').length > 32) return message.channel.createMessage(`Your prefix can't be over 30 characters long. You're ${args.join(' ').length - 32} characters over the limit.`)

        await Yui.db.updatePrefix(message.guildID, prefix)
        message.channel.createMessage({
            embed: {
                description: `Prefix successfully changed to \`${await Yui.db.getPrefix(message.guildID)}\``,
                color: Yui.misc.getColor('positive', 'situation')
            }
        })
    }
}