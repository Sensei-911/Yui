/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
module.exports = {
    name: 'avatar',
    description: 'Etiketlenen kişinin avatarını veren komut',
    execute(client, message, args) {
        const Discord = require("discord.js")
        let kullanıcı = message.mentions.users.first() || message.author
        let avatar_embed = new Discord.MessageEmbed()
        .setTitle(message.author.tag)
        .setURL(kullanıcı.displayAvatarURL({dynamic: true, size: 1024}))
        .setColor('#00FFFF')
        .setImage(kullanıcı.displayAvatarURL({dynamic: true, size: 1024}))

        message.channel.send(avatar_embed)
}};
