/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const moment = require('moment');
module.exports = {
    name: 'user',
    description: 'Kullanıcı hakkında bazı bilgiler',
    execute(client, message, args) {
        const Discord = require("discord.js")

        let user_embed = new Discord.MessageEmbed()
        .setTitle(message.author.tag)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))  
        .setDescription("İşte** "+message.author.username+" **hakkında bazı bilgiler")
        .setColor("#00FFFF")
        .addField("✏️ Görünür Ad", message.member.displayName, true)
        .addField("🆔 Kullanıcı ID", message.author.id , true)
        .addField("⬆️ En Yüksek Rol", message.member.roles.highest , true)
        .addField('📜 Rolleri', message.member.roles.cache.map(r => `${r}`).join(' | '))
        .addField("📆 Katılma Tarihi", message.member.user.cretedAt, true)
        .addField("📆 Hesap Tarihi", message.member.user.joinedAt, true)
        message.channel.send(user_embed)
}};
