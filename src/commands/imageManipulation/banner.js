module.exports = {
name: 'banner',
description: 'Turns your message to banner.',
execute(yui, message, args) {
const Discord = require('discord.js')
const word = args.slice(0).join('+'); 
if(!word) return message.channel.send(`Please write!`)
if (word > 666) return message.channel.send('Keep it under 666 words!')
const link = `https://dummyimage.com/2000x500/33363c/ffffff&text=${word}`.replace(' ','+')
let embed = new Discord.MessageEmbed()
.setTitle("Here is your banner!")
.setColor("#00FFFF")
.setImage(link)
.setFooter(`Requested By ${message.author.username}`)
message.channel.send(embed)

}}