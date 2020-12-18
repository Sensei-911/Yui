const Discord = require('discord.js');
var images = [
"https://cdn.boob.bot/anal/1E19A.jpg",
"https://cdn.boob.bot/anal/175DE.jpg",
"https://cdn.boob.bot/anal/115E4.jpg",
"https://cdn.boob.bot/anal/9F15.jpg",
"https://cdn.boob.bot/anal/1B111.jpg",
"https://cdn.boob.bot/anal/1EEBA.jpg",
"https://cdn.boob.bot/anal/19DCA.jpg",
"https://cdn.boob.bot/anal/16FB7.png",
"https://cdn.boob.bot/anal/133D5.jpg",
"https://cdn.boob.bot/anal/BF13.jpg",
"https://cdn.boob.bot/anal/AE42.jpg",
"https://cdn.boob.bot/anal/695A.jpg",
"https://cdn.boob.bot/anal/16990.jpg",
"https://cdn.boob.bot/anal/5127.jpg",
"https://cdn.boob.bot/anal/11DAF.jpg",
"https://cdn.boob.bot/anal/3D31.jpg",
"https://cdn.boob.bot/anal/19852.jpg",
"https://cdn.boob.bot/anal/205F8.jpg",
"https://cdn.boob.bot/anal/853E.jpg",
"https://cdn.boob.bot/anal/7A2B.jpg",
"https://cdn.boob.bot/anal/14A87.jpg",
"https://cdn.boob.bot/anal/B3DD.jpg",
"https://cdn.boob.bot/anal/19717.jpg",
"https://cdn.boob.bot/anal/107F2.jpg",
"https://cdn.boob.bot/anal/C517.jpg",
"https://cdn.boob.bot/anal/1B850.jpg",
"https://cdn.boob.bot/anal/1DD17.jpg",
"https://cdn.boob.bot/anal/1768D.jpg",
"https://cdn.boob.bot/anal/16E7C.jpg",
"https://cdn.boob.bot/anal/1FA7C.png",
"https://cdn.boob.bot/anal/876E.jpg",
"https://cdn.boob.bot/anal/BA6D.jpg",
"https://cdn.boob.bot/anal/1FBB7.jpg",
"https://cdn.boob.bot/anal/13254.jpg",
"https://cdn.boob.bot/anal/155BD.jpg",
"https://cdn.boob.bot/anal/BC34.jpg",
"https://cdn.boob.bot/anal/13970.jpg",
"https://cdn.boob.bot/anal/1B7E7.jpg",
"https://cdn.boob.bot/anal/140F5.jpg",
"https://cdn.boob.bot/anal/67D9.jpg",
"https://cdn.boob.bot/anal/B725.jpg",
"https://cdn.boob.bot/anal/2184A.jpg",
"https://cdn.boob.bot/anal/F488.jpg",
"https://cdn.boob.bot/anal/1571B.jpg",
"https://cdn.boob.bot/anal/E7D1.jpg",
"https://cdn.boob.bot/anal/672A.jpg",
"https://cdn.boob.bot/anal/B699.jpg",
"https://cdn.boob.bot/anal/1C665.jpg",
"https://cdn.boob.bot/anal/1FFAE.jpg",
"https://cdn.boob.bot/anal/18902.jpg",
"https://cdn.boob.bot/anal/12F52.jpg",
"https://cdn.boob.bot/anal/1A7E8.jpg"

]
module.exports = {
name: 'anal',
description: 'Sends random anal pictures.',
execute(client, message, args) {
if (message.channel.nsfw === true) {
const image = images[Math.floor(Math.random() * images.length)-1]
let image_embed = new Discord.MessageEmbed()
.setTitle('Here, take some anal porn.')
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