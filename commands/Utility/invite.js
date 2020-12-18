const { invitelink } = require("../../config.json");

module.exports = {
name: 'invite',
description: 'Gives a link to invite the bot.',
execute(client, message, args) {
const Discord = require("discord.js")
let invite_embed = new Discord.MessageEmbed()
.setTitle("Click me to invite me to your server!")
.setURL(invitelink)
.setColor("#00FFFF")
message.channel.send(invite_embed)

}}