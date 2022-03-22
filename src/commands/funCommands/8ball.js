module.exports = {
    name: '8ball',
    permissions: ['sendMessages'],
    cooldown: 3,
    aliases: ['8b'],
    async execute(Yui, message, args) {
        const answer = await Yui.misc.jsonData('../assets/arrays.json', '8b')
        const question = args.slice(0).join(' ')
        if (!question) return message.channel.createMessage(`Please ask a question.`)
        message.channel.createMessage(`🎱 **| ${message.author.username} asked:** ${question}\n🎱 **| Answer:** ${answer}`)
    }
}