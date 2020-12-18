const Discord = require("discord.js")

module.exports = {
name: 'penis',
aliases: ["pp"],
description: 'Shows your penis size',
execute(client, message, args) {
var answers = ['','=','==','===','====','=====','======','=======','========','=========','==========','===========','============','=============','==============','==============='];
var answer = answers[Math.floor(Math.random() * answers.length)];
var penis_embed = new Discord.MessageEmbed()
.setTitle("size machine")
.setDescription(`${message.author.username}'s penis\n8${answer}D`)
.setColor('RANDOM')
message.channel.send(penis_embed);

}}