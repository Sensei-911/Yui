module.exports = {
name: 'emoji',
description: 'Gives emojis url',
async execute(yui, message, args) {
if(!args[0])return message.channel.send('You dont specify a emoji');
const Discord = require('discord.js')
const emoji = Discord.Util.parseEmoji(args[0]);
if(!emoji || !emoji.id) return message.channel.send('There is no emoji')
var type;
if (emoji.animated) type = 'gif'
if(!emoji.animated) type = 'png'
const emoji_url = (`https://cdn.discordapp.com/emojis/${emoji.id}.${type}?v=1`)
message.channel.send({ embed: { description: `\`${emoji.name}\` \`${emoji.id}\``, color: '#00FFFF', image: { url: emoji_url }}});

}};