module.exports = {
name: 'avatar',
description: 'Gives the mentioned users avatar.',
execute(client, message, args) {
const Discord = require("discord.js")
let user = message.mentions.users.first() || message.author
let avatar_embed = new Discord.MessageEmbed()
.setTitle(message.author.tag)
.setURL(user.displayAvatarURL({dynamic: true, size: 1024}))
.setColor('#00FFFF')
.setImage(user.displayAvatarURL({dynamic: true, size: 1024}))

message.channel.send(avatar_embed)

}}
