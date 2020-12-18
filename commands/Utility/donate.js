const Discord = require('discord.js');

module.exports = {
name: 'donate',
description: 'Donate.',
execute(client, message, args) {
let donate_embed = new Discord.MessageEmbed()
.setTitle("Yui Premium")
.setDescription(`Help fund yui to keep it alive and performing well, as well as earning some exclusive perks!\n\n[Patreon](https://www.patreon.com/join/yui_bot) - Monthly support`)
.setFooter("Thank you in advance for your support <3")
.setColor('RANDOM')
message.channel.send(donate_embed)

}}
        