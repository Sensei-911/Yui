const Discord = require("discord.js")
module.exports = {
name: 'spoiler',
description: 'Writes in spoiler effect.',
execute(client, message, args) {
let spoiler = args.slice(0).join(' ');
if (spoiler.length < 1) return message.reply("You didn't give me anything to write.")
if (spoiler.length > 666) return message.channel.send('Keep it under 666 words!')
message.delete()
message.channel.send(`||${spoiler}||\n\n-Requested By **${message.author.tag}**`);

}}