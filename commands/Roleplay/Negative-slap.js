const Discord = require('discord.js');
var images = [
"https://cdn.zerotwo.dev/SLAP/4832c8f0-90a3-4fe5-84a9-aa46ae079796.gif",
"https://cdn.zerotwo.dev/SLAP/7c5490f6-7f70-494b-8f84-73c1c9aee03a.gif",
"https://cdn.zerotwo.dev/SLAP/797e3a1b-2c5e-4556-adf1-3f10afa0d76e.gif",
"https://cdn.zerotwo.dev/SLAP/8033a02c-b983-4cec-bbb7-e57c0361103b.gif",
"https://cdn.zerotwo.dev/SLAP/ee77ff1d-325b-4495-950b-b29978aa8c92.gif",
"https://cdn.zerotwo.dev/SLAP/a34c9068-686b-4d56-af6f-1e64a94f6ef2.gif",
"https://cdn.zerotwo.dev/SLAP/cf972400-4ce4-4a3a-8fbf-33d1bc5f142f.gif",
"https://cdn.zerotwo.dev/SLAP/cf972400-4ce4-4a3a-8fbf-33d1bc5f142f.gif",
"https://cdn.zerotwo.dev/SLAP/9be3ae42-362a-42cb-a340-7bb73de67ff8.gif",
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"https://cdn.weeb.sh/images/SJdXoVguf.gif",
"https://cdn.weeb.sh/images/Bkj-oaV0Z.gif",
"https://cdn.weeb.sh/images/rJs7GAttb.gif",
"https://cdn.weeb.sh/images/B1fnQyKDW.gif",
"https://cdn.weeb.sh/images/B1jk41KD-.gif",
"https://cdn.weeb.sh/images/rkaqm1twZ.gif",
"https://cdn.weeb.sh/images/rkpAXa5bG.gif",
"https://cdn.weeb.sh/images/Sk9mfCtY-.gif",
"https://cdn.weeb.sh/images/r1VF-lcyz.gif",
"https://cdn.weeb.sh/images/BJ8o71tD-.gif",
"https://cdn.weeb.sh/images/BkxEo7ytDb.gif",

]

module.exports = {
name: 'slap',
description: 'Are you slapping someone :C',
execute(client, message, args) {
                    
const user = message.mentions.users.first()
const image = images[Math.floor(Math.random() * images.length)]
const slapmessage = args.slice(1).join(' ')
                    
if (!user) {
let slap_embed = new Discord.MessageEmbed()
.setDescription(`**${message.author.username}** is slaps themselves`)
.setColor('RED')
.setImage('https://media.discordapp.net/attachments/713917306173915227/713943123352486009/YYmrMK6550X.gif')
message.channel.send(slap_embed);
return
}
if (slapmessage.length > 0) {
let slap_embed = new Discord.MessageEmbed()
.setDescription(`**${message.author.username}** is slapping **<@!${user.id}>**\n\"${slapmessage}\"`)
.setColor('RED')
.setImage(image)
message.channel.send(slap_embed);
return
}
if (user.id === message.author.id) {
let slap_embed = new Discord.MessageEmbed()
.setDescription(`**${message.author.username}** is slaps themselves`)
.setColor('RED')
.setImage('https://media.discordapp.net/attachments/713917306173915227/713943123352486009/YYmrMK6550X.gif')
message.channel.send(slap_embed);
return
}
if (user.id === '760244924188327977') {
let slap_embed = new Discord.MessageEmbed()
.setDescription(`**${message.author.username}** is slaps **me** :(`)
.setColor('RED')
.setImage(image)
message.channel.send(slap_embed);
return
}
if (slapmessage == 0) {
let slap_embed = new Discord.MessageEmbed()
.setDescription(`**${message.author.username}** is slapping **<@!${user.id}>**`)
.setColor('RED')
.setImage(image)
message.channel.send(slap_embed);
return
}
else {
let slap_embed = new Discord.MessageEmbed()
.setDescription(`**${message.author.username}** slapping ?`)
.setColor('RED')
.setImage(image)
message.channel.send(slap_embed);
return
}
                
}}