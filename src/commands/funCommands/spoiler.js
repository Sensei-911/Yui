module.exports = {
name: 'spoiler',
description: 'Writes in spoiler effect.',
execute(yui, message, args) {
let spoiler = args.slice(0).join(' ');
if(spoiler.length < 1) return message.reply("What do you want me to say?")
if(spoiler.length > 666) return message.channel.send('Keep it under 666 words!')
message.delete()
message.channel.send(`||${spoiler}||\n\n-Message By **${message.author.tag}**`);

}}