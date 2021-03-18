module.exports = {
name: 'stats',
aliases: ['statistics'],
cooldown: 3,
description: 'Gives informations about bots stats',
ownerOnly:true,
async execute(yui, message, args) {
const Discord = require('discord.js')
let stats_embed = new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(`Information | ${yui.user.username}`,yui.user.displayAvatarURL())
.addField('Server Count:',(await yui.shard.fetchClientValues("guilds.cache.size")).reduce((a,b)=> b + a).toLocaleString(),true)
.addField('User Count:',(await yui.shard.broadcastEval("this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)")).reduce((a,b)=> b + a).toLocaleString(),true)
.setThumbnail(yui.user.displayAvatarURL())
message.channel.send(stats_embed)

}}