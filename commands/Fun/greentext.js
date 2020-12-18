const Discord = require("discord.js")
module.exports = {
    name: 'greentext',
    description: 'Writes the text in green.',
    execute(client, message, args) {
    let green = args.slice(0).join(' ');
    if (green.length < 1) return message.reply("You didn't give me anything to write.")
    if (green.length > 666) return message.channel.send('Keep it under 666 words!')
    message.channel.send('```'+`css\n${green}`+'```');
}}