const Discord = require("discord.js")
module.exports = {
name: 'clap',
description: 'W👏R👏I👏T👏E',
execute(client, message, args) {
let clap = args.slice(0).join('').split('').join('👏')
if (clap.length < 1) return message.channel.send("You didn't give me anything to write.")
if (clap.length > 666) return message.channel.send('Keep it under 666 words!')
message.channel.send(clap)

}}