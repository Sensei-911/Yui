/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const { AUTHOR } = require("../../config.json");
module.exports = {
    name: 'istatistik',
    description: 'Botu davet etmek için link verir.',
    execute(client, message, args) {
        if(message.author.id !== AUTHOR) return
        const Discord = require("discord.js")
        message.channel.send(`
<a:oksag:766445096777809932> **${client.guilds.cache.size} sunucu!**
<a:oksag:766445096777809932> **${client.users.cache.size} kullanıcı!**`)
}};
