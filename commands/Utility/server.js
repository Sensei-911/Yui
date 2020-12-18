const moment = require('moment');
module.exports = {
name: 'server',
description: 'Gives information about the server.',
execute(client, message, args) {
const Discord = require("discord.js")
let kuruluşönce = moment.utc(message.guild.createdAt, "YYYYMMDD").fromNow()
let kuruluş = moment.utc(message.guild.createdAt).format('dddd, D MMMM, YYYY')
let hareketli_emoji = []
let hareketsiz_emoji = []

message.guild.emojis.cache.forEach(a => {
if(a.animated) {hareketli_emoji.push(`<a:${a.name}:${a.id}>`)}
if(!a.animated) {hareketsiz_emoji.push(`<a:${a.name}:${a.id}>`)}})

let embed = new Discord.MessageEmbed()
.setTitle(message.guild.name+" (ID: "+message.guild.id+")")
.setThumbnail(message.guild.iconURL({dynamic: true}))  
.setDescription(`Here is some information about ${+message.guild.name}`)
.setColor("#00FFFF")
.addFields(
{ name: '👑 Owner', value: message.guild.owner, inline: true },
{ name: '👥 Members', value: `**${message.guild.memberCount}**`, inline: true },
{ name: '😎 Emotes', value: `Animated: **${hareketli_emoji.length ? hareketli_emoji.length : "0"}**\nStatic: **${hareketsiz_emoji.length ? hareketsiz_emoji.length : "0"}**`, inline: true },
)
.addFields(
{ name: '🗂️ Categories', value: message.guild.channels, inline: true },
{ name: '💬 Channels', value: message.guild.channels.cache, inline: true },
)
//.addField(`❤ Roles`,`${message.guild.roles.cache.map(r => `${r}`).join(' , '),true}`)
.addField('📆 Created At',`${kuruluş} **(${kuruluşönce})**`,true)
message.channel.send(embed)
}}