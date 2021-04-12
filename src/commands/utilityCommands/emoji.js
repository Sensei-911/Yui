module.exports = {
name: 'emoji',
cooldown: 2,
permissions: ["sendMessages", "embedLinks"],
execute(Yui, message, args) {
if(!args[0]) {
message.channel.createMessage('Please specify an emoji...');
return;
}
const Find = require('discord.js')
const emoji = Find.Util.parseEmoji(args[0]);
if(!emoji || !emoji.id) {
message.channel.createMessage('There is no emoji')
return;
}
if (emoji.animated) var type = 'gif'
if(!emoji.animated) var type = 'png'
const emoji_url = (`https://cdn.discordapp.com/emojis/${emoji.id}.${type}?v=1`)
message.channel.createMessage({ embed: { color: 0x0ffff, image: { url: emoji_url } }});
}};