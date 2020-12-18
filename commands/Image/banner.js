const Discord = require('discord.js');

module.exports = {
name: 'banner',
description: 'Turns your message to banner.',
execute(client, message, args) {
const word = args.slice(0).join('+'); 
if(!word) return message.channel.send(`Please write!`)
if (word > 666) return message.channel.send('Keep it under 666 words!')
const link = `https://dummyimage.com/2000x500/33363c/ffffff&text=${word}`.replace(' ','+')
let embed = new Discord.MessageEmbed()
.setTitle("Banner!")
.setColor("#2ECC71")
.setImage(link)
.setFooter(`Requested By ${message.author.username}`)
message.channel.send(embed)

}}