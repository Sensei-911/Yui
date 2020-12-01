/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const Discord = require('discord.js');

module.exports = {
    name: 'love',
    description: 'Ship komutu.',
    execute(client, message, args) {
        let person = message.mentions.users.first()|| message.author

        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);
        const embed = new Discord.MessageEmbed()
            .setColor('BLUE')
            .addField(`**${message.member.displayName}** **${person.username}** kişisini bu kadar seviyor:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);
        message.channel.send(embed);
}}
