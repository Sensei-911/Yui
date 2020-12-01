/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const Discord = require('discord.js');
const generator = require('generate-password');

module.exports = {
    name: "password",
    description: "Rastgele şifre üretir",
    execute(client, message, args) {
    var uzunluk = args.slice(0).join(' ');
    if (uzunluk.length > 2) return message.channel.send("Üç basamaklı şifre üretemezsiniz.")
    if (!uzunluk) return message.channel.send('Bir şifre uzunluğu belirt!').then(msg3 => msg3.delete({timeout:2000}));

    var password = generator.generate({
        length: uzunluk,
        numbers: true,
    })

    message.channel.send(`<a:hack:776876557738311734> **| Şifreniz:** ${password}`);
}}
