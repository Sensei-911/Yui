module.exports = {
    name: 'clean',
    aliases: ['purge', 'clear'],
    permissions: ['sendMessages', 'manageMessages'],
    memberPermissions: ['manageMessages'],
    cooldown: 5,
    recovery: true,
    async execute(Yui, message, args) {
        message.delete
        const messageAmount = args[0]
        if (!messageAmount) return message.channel.createMessage('Please specify how many messages will be deleted.')
        if (isNaN(messageAmount)) return message.channel.createMessage('Please enter a number.')
        if (messageAmount > 200) return message.channel.createMessage('Keep it under 200 messages.')
        if (messageAmount < 0) return message.channel.createMessage("I can't delete messages in negative numbers.")
        parseInt(messageAmount)
        const getMessages = await Yui.getMessages(message.channel.id, messageAmount, message.id)
        var errors = 0
        var i = -1
        var br = {}
        const map1 = new Map()
        getMessages.forEach(msg => {
            i += 1
            console.log(`${getMessages[i].author.username}#${getMessages[i].author.discriminator}`)
            let a = `${getMessages[i].author.username}#${getMessages[i].author.discriminator}`
            let e = 1
            map1.set(a, 1)
            if (map1.has(a)) {
                e += 1
            }
            Object.assign(br, {
                [a]: e
            })
        })
        console.log(br)
        await Yui.deleteMessages(message.channel.id, getMessages.map(msg => msg.id), messageAmount).catch((e) => {
            errors += 1
        })
        let a = []
        Object.entries(br).forEach(entry => {
            let key = entry[0]
            let value = entry[1]
            a.push(`**${key}**: ${value}`)
        })
        const msg = await message.channel.createMessage(errors > 0 ? `${messageAmount} messages was removed (some messages was two weaks old)\n\n${a.join(` \n`)}` : `${messageAmount} messages was removed\n\n${a.join(` \n`)}`)
        return setTimeout(() => Yui.deleteMessage(message.channel.id, msg.id, 'Purge Message'), 5000)
    }
}