/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const { invitelink } = require("../../config.json");

module.exports = {
    name: 'invite',
    description: 'Botu davet etmek için link verir.',
    execute(client, message, args) {
        const Discord = require("discord.js")
        let user_embed = new Discord.MessageEmbed()
        .setTitle("Beni sunucunuza davet etmek için tıklayın!")
        .setURL(invitelink)
        .setColor("#00FFFF")
        message.channel.send(user_embed)
}};
