const Discord = require('discord.js');
module.exports = {
    name: "kategoriaç",
    description: "Kategori oluşturur",
    execute(client, message, args) {
  let kanaladi = args[0]
  if(!kanaladi) return message.channel.send(`Katagori Oluşturmam İçin Bir İsim Girmelisin.`)
 
  message.guild.channels.create(kanaladi, {type: 'category'})
 
  message.channel.send(`Başarıyla \`${kanaladi}\` adında bir katagori oluşturuldu.`)
 
}}