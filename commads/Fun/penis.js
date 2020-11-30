const Discord = require("discord.js")

module.exports = {
    name: 'penis',
    aliases: ["pp"],
    description: 'Shows bots ping',
    execute(client, message, args) {
var cevaplar = ['','=','==','===','====','=====','======','=======','========','=========','==========','===========','============','=============','==============','==============='];
var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
            let penis_embed = new Discord.MessageEmbed()
            .setTitle("Uzunluk Ölçer")
            .setDescription(`${message.author.username} kişisinin penisi
8${cevap}D`)
            .setColor('RANDOM')
message.channel.send(penis_embed);
 }}


