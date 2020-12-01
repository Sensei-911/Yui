/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const { votelink } = require("../../config.json");

module.exports = {
    name: 'vote',
    description: 'Botu davet etmek için link verir.',
    execute(client, message, args) {
        const Discord = require("discord.js")
        let user_embed = new Discord.MessageEmbed()
        .setTitle("Oy vermek için tıklayın!")
        .setURL(votelink)
        .setColor("#00FFFF")
        message.channel.send(user_embed)
}};
