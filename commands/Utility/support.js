const { guildlink } = require("../../config.json");

module.exports = {
name: 'support',
description: 'Gives a link to join bots support server.',
execute(client, message, args) {
const Discord = require("discord.js")
let support_embed = new Discord.MessageEmbed()
.setTitle("Click me to join my support server!")
.setURL(guildlink)
.setColor("#00FFFF")
message.channel.send(support_embed)

}}
