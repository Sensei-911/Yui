const Discord = require('discord.js');

module.exports = {
name: 'love',
aliases: ["ship"],
description: 'Measures how much someone loves you',
execute(client, message, args) {
let target = message.mentions.users.first()|| message.author
const love = Math.random() * 100;
const loveIndex = Math.floor(love / 10);
const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);
const embed = new Discord.MessageEmbed()
.setColor('#FFC0CB')
.addField(`${message.author.username} loves ${target.username} that much:`,`💟 ${Math.floor(love)}%\n\n${loveLevel}`);
message.channel.send(embed)

}}