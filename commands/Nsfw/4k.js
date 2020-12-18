const Discord = require('discord.js');
var images = [
"https://cdn.boob.bot/4k/4k1398.jpg",
"https://cdn.boob.bot/4k/4k1296.jpg",
"https://cdn.boob.bot/4k/4k1424.jpg",
"https://cdn.boob.bot/4k/4k1415.jpg",
"https://cdn.boob.bot/4k/4k1249.jpg",
"https://cdn.boob.bot/4k/4k16.jpg",
"https://cdn.boob.bot/4k/4k1400.jpg",
"https://cdn.boob.bot/4k/4k1166.jpg",
"https://cdn.boob.bot/4k/4k20.jpg",
"https://cdn.boob.bot/4k/4k1074.jpg",
"https://cdn.boob.bot/4k/4k67.jpg",
"https://cdn.boob.bot/4k/4k720.jpg",
"https://cdn.boob.bot/4k/4k590.jpg",
"https://cdn.boob.bot/4k/4k656.jpg",
"https://cdn.boob.bot/4k/4k45.jpg",
"https://cdn.boob.bot/4k/4k70.jpg",
"https://cdn.boob.bot/4k/4k1179.jpg",
"https://cdn.boob.bot/4k/4k1172.jpg",
"https://cdn.boob.bot/4k/4k112.jpg",
"https://cdn.boob.bot/4k/4k1202.jpg",
"https://cdn.boob.bot/4k/4k1334.jpg",
"https://cdn.boob.bot/4k/4k1022.jpg",
"https://cdn.boob.bot/4k/4k48.jpg",
"https://cdn.boob.bot/4k/4k479.jpg",
"https://cdn.boob.bot/4k/4k1199.jpg",
"https://cdn.boob.bot/4k/4k1376.jpg",
"https://cdn.boob.bot/4k/4k140.jpg",
"https://cdn.boob.bot/4k/4k31.jpg",
"https://cdn.boob.bot/4k/4k1038.jpg",
"https://cdn.boob.bot/4k/4k1018.jpg",
"https://cdn.boob.bot/4k/4k1271.jpg",
"https://cdn.boob.bot/4k/4k1060.jpg",
"https://cdn.boob.bot/4k/4k1197.jpg",
"https://cdn.boob.bot/4k/4k1314.jpg",
"https://cdn.boob.bot/4k/4k1364.jpg",
"https://cdn.boob.bot/4k/4k1200.jpg",
"https://cdn.boob.bot/4k/4k1214.jpg",
"https://cdn.boob.bot/4k/4k1096.jpg",
"https://cdn.boob.bot/4k/4k1153.jpg",
"https://cdn.boob.bot/4k/4k165.jpg",
"https://cdn.boob.bot/4k/4k668.jpg",
"https://cdn.boob.bot/4k/4k718.jpg",
"https://cdn.boob.bot/4k/4k1355.jpg",
"https://cdn.boob.bot/4k/4k1190.jpg",
"https://cdn.boob.bot/4k/4k1387.jpg",
"https://cdn.boob.bot/4k/4k1304.jpg",
"https://cdn.boob.bot/4k/4k1282.jpg",
"https://cdn.boob.bot/4k/4k1283.jpg",
"https://cdn.boob.bot/4k/4k1097.jpg",
"https://cdn.boob.bot/4k/4k1417.jpg",
"https://cdn.boob.bot/4k/4k1173.jpg",
"https://cdn.boob.bot/4k/4k89.jpg",
"https://cdn.boob.bot/4k/4k55.jpg",
"https://cdn.boob.bot/4k/4k1110.jpg",
"https://cdn.boob.bot/4k/4k301.jpg",
"https://cdn.boob.bot/4k/4k1186.jpg",
"https://cdn.boob.bot/4k/4k703.jpg",
"https://cdn.boob.bot/4k/4k1441.jpg",
"https://cdn.boob.bot/4k/4k1440.jpg",
"https://cdn.boob.bot/4k/4k445.jpg",
"https://cdn.boob.bot/4k/4k1123.jpg",
"https://cdn.boob.bot/4k/4k1064.jpg",
"https://cdn.boob.bot/4k/4k1175.jpg",

]

module.exports = {
name: '4k',
description: 'Sends random 4k porn.',
execute(client, message, args) {
if (message.channel.nsfw === true) {
const image = images[Math.floor(Math.random() * images.length)-1]
let image_embed = new Discord.MessageEmbed()
.setTitle('Here, take some 4k porn.')
.setColor('RED')
.setImage(image)
.setFooter(`Requested by ${message.author.tag}`)
.setTimestamp()
message.channel.send(image_embed)
}
else {
message.channel.send('This isn\'t a nsfw channel!')
}
}}








