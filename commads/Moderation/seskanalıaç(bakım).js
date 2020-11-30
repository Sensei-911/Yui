const Discord = require('discord.js');

module.exports = {
name: "seskanalıaç",
cooldown: 5,
execute(client, message, args) {
 let kanal = args.slice(0).join(' ');
 let guild = message.guild;
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bunun için gerekli iznin yok'); 
  if (kanal.length < 1) return message.channel.send('Lütfen oluşturacağım kanalın adını yaz.');
   message.delete();
   message.guild.channels.create(kanal, {type: 'voice'})
   message.channel.send("Ses Kanalı Oluşturuldu");
}}