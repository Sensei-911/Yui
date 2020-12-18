const Discord = require('discord.js');
var images = [
"https://cdn.boob.bot/yaoi/66EE.gif",
"https://cdn.boob.bot/yaoi/573.jpg",
"https://cdn.boob.bot/yaoi/901A.jpg",
"https://cdn.boob.bot/yaoi/8705.jpg",
"https://cdn.boob.bot/yaoi/7A4E.jpg",
"https://cdn.boob.bot/yaoi/275B.png",
"https://cdn.boob.bot/yaoi/AE6.jpg",
"https://cdn.boob.bot/yaoi/38EA.jpg",
"https://cdn.boob.bot/yaoi/2625.png",
"https://cdn.boob.bot/yaoi/4B14.jpg",
"https://cdn.boob.bot/yaoi/5258.png",
"https://cdn.boob.bot/yaoi/2B98.jpg",
"https://cdn.boob.bot/yaoi/8EE4.gif",
"https://cdn.boob.bot/yaoi/6E32.jpg",
"https://cdn.boob.bot/yaoi/2CCE.jpg",
"https://cdn.boob.bot/yaoi/446B.jpg",
"https://cdn.boob.bot/yaoi/83FE.jpg",
"https://cdn.boob.bot/yaoi/5730.gif",
"https://cdn.boob.bot/yaoi/87A0.png",
"https://cdn.boob.bot/yaoi/7611.jpg",
"https://cdn.boob.bot/yaoi/695A.png",
"https://cdn.boob.bot/yaoi/429A.jpg",
"https://cdn.boob.bot/yaoi/9B00.jpg",
"https://cdn.boob.bot/yaoi/709E.jpg",
"https://cdn.boob.bot/yaoi/41FF.jpg",
"https://cdn.boob.bot/yaoi/94F2.jpg",
"https://cdn.boob.bot/yaoi/34AD.jpg",
"https://cdn.boob.bot/yaoi/538E.png",
"https://cdn.boob.bot/yaoi/32DC.png",
"https://cdn.boob.bot/yaoi/4943.jpg",
"https://cdn.boob.bot/yaoi/3A20.jpg",
"https://cdn.boob.bot/yaoi/8B42.jpg",
"https://cdn.boob.bot/yaoi/93BC.jpg",
"https://cdn.boob.bot/yaoi/4B14.jpg",
"https://cdn.boob.bot/yaoi/5695.jpg",
"https://cdn.boob.bot/yaoi/4CE5.jpg",
"https://cdn.boob.bot/yaoi/7AE9.png",
"https://cdn.boob.bot/yaoi/1E46.gif",
"https://cdn.boob.bot/yaoi/122A.jpg",
"https://cdn.boob.bot/yaoi/6BC6.jpg",
"https://cdn.boob.bot/yaoi/6789.gif",
"https://cdn.boob.bot/yaoi/4C4A.jpg",
"https://cdn.boob.bot/yaoi/87A.jpg",
"https://cdn.boob.bot/yaoi/8DAE.jpg",
"https://cdn.boob.bot/yaoi/26C0.jpg",
"https://cdn.boob.bot/yaoi/402E.jpg",
"https://cdn.boob.bot/yaoi/13FB.jpg",
"https://cdn.boob.bot/yaoi/6824.gif",
"https://cdn.boob.bot/yaoi/9B00.jpg",
"https://cdn.boob.bot/yaoi/80F7.jpg",
"https://cdn.boob.bot/yaoi/3241.jpg",
"https://cdn.boob.bot/yaoi/8BDD.jpg",
"https://cdn.boob.bot/yaoi/9C36.jpg",
"https://cdn.boob.bot/yaoi/74DB.jpg",
"https://cdn.boob.bot/yaoi/6A90.jpg",
"https://cdn.boob.bot/yaoi/1BDA.jpg",
"https://cdn.boob.bot/yaoi/1D10.gif",
"https://cdn.boob.bot/yaoi/62B1.jpg",
"https://cdn.boob.bot/yaoi/6216.jpg",
"https://cdn.boob.bot/yaoi/1496.jpg",
"https://cdn.boob.bot/yaoi/D52.jpg",
"https://cdn.boob.bot/yaoi/10F4.jpg",
"https://cdn.boob.bot/yaoi/82C8.gif",
"https://cdn.boob.bot/yaoi/3DC2.jpg",
"https://cdn.boob.bot/yaoi/46D7.jpg",
"https://cdn.boob.bot/yaoi/7CBA.jpg",
]
module.exports = {
name: 'yaoi',
description: 'Sends random yaoi pictures.',
execute(client, message, args) {
if (message.channel.nsfw === true) {
const image = images[Math.floor(Math.random() * images.length)-1]
let image_embed = new Discord.MessageEmbed()
.setTitle('Here, take some yaoi.')
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