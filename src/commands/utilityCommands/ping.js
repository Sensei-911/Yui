module.exports = {
    name: 'ping',
    cooldown: 2,
    permissions: ['sendMessages', 'embedLinks'],
    execute(Yui, message, args) {
        message.channel.createMessage((`${message.channel.guild.shard.latency.toFixed()}ms`))
    }
}