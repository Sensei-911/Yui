const Discord = require('discord.js');
var images = [
"https://cdn.zerotwo.dev/SHOOT/9037a2eb-4a5a-44f5-95a9-9e96948be530.gif",
"https://cdn.zerotwo.dev/SHOOT/e420c1f1-2838-45c1-a56c-ca0c16632b42.gif",
"https://cdn.zerotwo.dev/SHOOT/6906011d-c42b-4b5b-bc1c-61cf38ab7d91.gif",
"https://cdn.zerotwo.dev/SHOOT/d531b121-5bf4-43df-a723-f13e90c370c2.gif",
"https://cdn.zerotwo.dev/SHOOT/55b7bdab-c7c5-4bca-9c4a-eca5cecc86a0.gif",
"https://cdn.zerotwo.dev/SHOOT/55b7bdab-c7c5-4bca-9c4a-eca5cecc86a0.gif",
"https://cdn.zerotwo.dev/SHOOT/b39598bd-5a18-487a-a5a2-414ea081205c.gif",
"https://cdn.zerotwo.dev/SHOOT/2bb08ae0-83cb-4442-8e35-789c6a14424d.gif",
"https://cdn.zerotwo.dev/SHOOT/c5130d4e-4c32-4cb5-9685-a10ce9ab2bf4.gif",
"https://cdn.zerotwo.dev/SHOOT/c47e6e2f-c624-493d-b84d-11defb005227.gif",
"https://cdn.zerotwo.dev/SHOOT/91f5ec6a-3857-4e13-b5d0-482ccf8e4a75.gif",
"https://cdn.zerotwo.dev/SHOOT/a4c62263-fb0d-43d5-bfdd-53ad703817f7.gif",
"https://cdn.zerotwo.dev/SHOOT/f48ac951-dcf1-4ab7-8975-94b97abd158b.gif",
"https://cdn.zerotwo.dev/SHOOT/56887bf7-4857-48d1-bf1e-8b04bf5b272f.gif",
"https://cdn.zerotwo.dev/SHOOT/49d1a959-5bf9-4ea6-90b1-932bb7b302b9.gif",
"https://cdn.zerotwo.dev/SHOOT/e420c1f1-2838-45c1-a56c-ca0c16632b42.gif",
"https://cdn.zerotwo.dev/SHOOT/bbf1d8e8-2098-48cd-adc6-ce51615fbacb.gif",
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"https://cdn.discordapp.com/attachments/713915333295210516/713937888269697064/C5Uz4A9dIKK.gif",
"https://cdn.discordapp.com/attachments/713915333295210516/713937853054189568/amauzB0g6DH.gif",
"https://cdn.discordapp.com/attachments/713915333295210516/713937857630437417/bNXWyFtchHr.gif",
"https://cdn.discordapp.com/attachments/713915333295210516/713937837321617479/AKO-bY1A3B2.gif",
"https://cdn.discordapp.com/attachments/713915333295210516/713937868757925958/r03nEUAqhl1.gif",

]

module.exports = {
name: 'shoot',
description: 'Shoot someone hehehe.',
execute(client, message, args) {
                    
const user = message.mentions.users.first()
const image = images[Math.floor(Math.random() * images.length)]
const shootmessage = args.slice(1).join(' ')
                    
if (!user) {
let shoot_embed = new Discord.MessageEmbed()
.setDescription(`**${message.author.username}** is staying alive... *pouts*`)
.setColor('RED')
.setImage(image)
message.channel.send(shoot_embed);
return
}
if (shootmessage.length > 0) {
let shoot_embed = new Discord.MessageEmbed()
.setDescription(`**${message.author.username}** is aiming for **<@!${user.id}>**\n\"${shootmessage}\"`)
.setColor('RED')
.setImage('https://cdn.discordapp.com/attachments/713915257248153682/713937794648637520/qdXiUqcTjXy.gif')
message.channel.send(shoot_embed);
return
}
if (user.id === message.author.id) {
let shoot_embed = new Discord.MessageEmbed()
.setDescription(`**${message.author.username}** is staying alive... *pouts*`)
.setColor('RED')
.setImage(image)
message.channel.send(shoot_embed);
return
}
if (user.id === '760244924188327977') {
let shoot_embed = new Discord.MessageEmbed()
.setDescription(`**${message.author.username}** is aiming for **me** :(`)
.setColor('RED')
.setImage(image)
message.channel.send(shoot_embed);
return
}
if (shootmessage == 0) {
let shoot_embed = new Discord.MessageEmbed()
.setDescription(`**${message.author.username}** is aiming for **<@!${user.id}>**`)
.setColor('RED')
.setImage(image)
message.channel.send(shoot_embed);
return
}
else {
let shoot_embed = new Discord.MessageEmbed()
.setDescription(`**${message.author.username}** is shooting nobody ?`)
.setColor('RED')
.setImage(image)
message.channel.send(shoot_embed);
return
}
                
}}








