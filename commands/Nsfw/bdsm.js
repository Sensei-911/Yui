const Discord = require('discord.js');
var images = [
"https://cdn.boob.bot/bdsm/5636.jpg",
"https://cdn.boob.bot/bdsm/A375.jpg",
"https://cdn.boob.bot/bdsm/4CEA.JPG",
"https://cdn.boob.bot/bdsm/95C9.jpg",
"https://cdn.boob.bot/bdsm/7076.gif",
"https://cdn.boob.bot/bdsm/99C0.jpg",
"https://cdn.boob.bot/bdsm/6DBA.jpg",
"https://cdn.boob.bot/bdsm/8219.jpg",
"https://cdn.boob.bot/bdsm/4A74.JPG",
"https://cdn.boob.bot/bdsm/AAD7.jpg",
"https://cdn.boob.bot/bdsm/C4F4.jpg",
"https://cdn.boob.bot/bdsm/6A2C.jpg",
"https://cdn.boob.bot/bdsm/C3B9.gif",
"https://cdn.boob.bot/bdsm/71B1.gif",
"https://cdn.boob.bot/bdsm/64D7.jpg",
"https://cdn.boob.bot/bdsm/730F.jpg",
"https://cdn.boob.bot/bdsm/89E4.jpg",
"https://cdn.boob.bot/bdsm/89E4.jpg",
"https://cdn.boob.bot/bdsm/ACC1.jpg",
"https://cdn.boob.bot/bdsm/6405.jpg",
"https://cdn.boob.bot/bdsm/439E.JPG",
"https://cdn.boob.bot/bdsm/C3DC.jpg",
"https://cdn.boob.bot/bdsm/C3FF.jpg",
"https://cdn.boob.bot/bdsm/4BD2.JPG",
"https://cdn.boob.bot/bdsm/C468.jpg",
"https://cdn.boob.bot/bdsm/41D7.JPG",
"https://cdn.boob.bot/bdsm/851B.jpg",
"https://cdn.boob.bot/bdsm/4821.JPG",
"https://cdn.boob.bot/bdsm/6E8C.gif",
"https://cdn.boob.bot/bdsm/D25A.jpg",
"https://cdn.boob.bot/bdsm/63E2.jpg",
"https://cdn.boob.bot/bdsm/CF35.jpg",
"https://cdn.boob.bot/bdsm/44D9.JPG",
"https://cdn.boob.bot/bdsm/D953.jpg",
"https://cdn.boob.bot/bdsm/3FCA.JPG",
"https://cdn.boob.bot/bdsm/7125.jpg",
"https://cdn.boob.bot/bdsm/A677.jpg",
"https://cdn.boob.bot/bdsm/D7AF.jpg",
"https://cdn.boob.bot/bdsm/B25C.jpg",
"https://cdn.boob.bot/bdsm/6BD0.jpg",
"https://cdn.boob.bot/bdsm/C5A3.jpg",
"https://cdn.boob.bot/bdsm/4B8C.JPG",
"https://cdn.boob.bot/bdsm/816A.jpg",
"https://cdn.boob.bot/bdsm/3DBD.JPG",
"https://cdn.boob.bot/bdsm/4844.JPG",
"https://cdn.boob.bot/bdsm/90BA.jpg",
"https://cdn.boob.bot/bdsm/D5C5.jpg",
"https://cdn.boob.bot/bdsm/9353.jpg",
"https://cdn.boob.bot/bdsm/96BE.jpg",
"https://cdn.boob.bot/bdsm/7A4E.jpg",
"https://cdn.boob.bot/bdsm/488A.JPG",
"https://cdn.boob.bot/bdsm/5FEB.jpg",
"https://cdn.boob.bot/bdsm/7C15.png",
"https://cdn.boob.bot/bdsm/76E3.jpg",
]
module.exports = {
name: 'bdsm',
description: 'Sends random bdsm pictures.',
execute(client, message, args) {
if (message.channel.nsfw === true) {
const image = images[Math.floor(Math.random() * images.length)-1]
let image_embed = new Discord.MessageEmbed()
.setTitle('Here, take some bdsm porn.')
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