const moment = require('moment');
module.exports = {
name: 'user',
description: 'Kullanıcı hakkında bazı bilgiler',
execute(client, message, args) {
const Discord = require("discord.js")
let kuruluş = moment.utc(message.member.user.createdAt).format('dddd, D MMMM, YYYY')
let katılım = moment.utc(message.member.user.joinedAt).format('dddd, D MMMM, YYYY')
let user_embed = new Discord.MessageEmbed()
.setTitle(message.author.tag)
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))  
.setDescription(`Here is some information about ${message.member.displayName}`)
.setColor("#00FFFF")
.addField("✏️ Display Name", message.member.displayName, true)
.addField("🆔 User ID", message.author.id , true)
.addField("⬆️ Highest Role", message.member.roles.highest , true)
.addField('📜 Roles', message.member.roles.cache.map(r => `${r}`).join(' , '))
.addField(`📆 Joined ${message.guild.name}`,katılım, true)
.addField("📆 Account Creation", kuruluş, true)
message.channel.send(user_embed)

}}