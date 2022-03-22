module.exports = {
    name: 'slowmode',
    cooldown: 5,
    memberPermissions: ['manageChannels'],
    permissions: ['manageChannels', 'sendMessages'],
    execute(Yui, message, args) {
        let rateLimit = parseInt(args[0])
        if (!args[0]) return message.channel.createMessage('You did not specify a quantity!')
        if (rateLimit > 21600) return message.channel.createMessage('You can put slowmode for up to 6 hours!')
        if (rateLimit > 0) {
            message.channel.edit({
                rateLimitPerUser: rateLimit
            })
            message.channel.createMessage(`Slow mode enabled. (1 msg/${rateLimit}s)`)
        }
        if (rateLimit < 0) {
            message.channel.createMessage('Are you serious?')
        }
        if (args[0].toLowerCase() == 'off') {
            message.channel.edit({
                rateLimitPerUser: 0
            })
            message.channel.createMessage(`Slow mode disabled. (1 msg/0s)`)
        }
    }
}