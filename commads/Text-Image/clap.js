const Discord = require("discord.js")
module.exports = {
    name: 'clap',
    description: 'Clap',
    execute(client, message, args) {
        let clap = args.slice(0).join('').split('').join(':clap:')
        if (clap.length < 1) return message.channel.send("Yazmam için bir şey vermedin.")
        if (clap.length > 666) return message.channel.send('666 kelimenin altında tut!')
        message.channel.send(clap)
    }}