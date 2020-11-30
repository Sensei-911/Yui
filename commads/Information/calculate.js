const { calculator } = require('../../functions')
const math = require('math.js');
const Discord = require('discord.js');
const mathemoji = '<a:narhudo:776707400744566784>'

module.exports = {
    name: 'calculate',
    aliases: ["hesapla"],
    description: 'Verdiğiniz işlemi hesaplayan komut.',
    execute(client, message, args) {
        
if(!args[0]) return message.channel.send('İlk sayıyı tanımla!');
if(!args[1]) return message.channel.send('İkinci sayıyı tanımla!');
if(!args[2]) return message.channel.send('İşlemi tanımla!');
if (args.length > 3) return message.channel.send("Şuan sadece tek işlemli hesaplamalar yapabiliyorum.")

message.channel.send(`${mathemoji} **| ${message.author.username},** işlemin cevabı : **${calculator(args[0],args[1],args[2])}**`)
}};
