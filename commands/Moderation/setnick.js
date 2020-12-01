/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const Discord = require('discord.js');

module.exports = {
    name: "setnick",
    description: "Etiketlenen kişinin ismini değiştirir",
    execute(client, message, args) {
  if (!message.member.hasPermission("MANAGE_NICKNAMES")) return
  let isim = args.slice(1).join(' ');
  let kullanici = message.mentions.users.first();
  if(!kullanici) return message.reply(`Lütfen bir kullanıcı belirtiniz!`)
  if(!isim) return message.reply(`Lütfen bir kullanıcı adı giriniz!`)
  if(isim.length > 32) return message.reply(`Lütfen \`32\` karakteri geçmeyecek şekilde bir isim giriniz!`)
  message.guild.members.cache.get(kullanici.id).setNickname(`${isim}`)
  message.channel.send(`\`${kullanici.username}\` adlı kişinin kullanıcı adı \`${isim}\` olarak değiştirildi.`)
}}
