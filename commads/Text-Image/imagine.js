/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const Discord = require("discord.js")
module.exports = {
    name: 'imagine',
    description: 'Bir şey hayal edersiniz',
    execute(client, message, args) {
        let write_mesaj = args.slice(0).join(' ');
        if (write_mesaj.length < 1) return message.reply("Yazmam için bir şey vermedin.")
        let write_embed = new Discord.MessageEmbed()
        .setDescription(`imagine ${write_mesaj}`)
        .setFooter(`${message.author.username} hayal etmek için gerçekten çok uğraşıyor`)
        .setColor('RANDOM')
        message.channel.send(write_embed);

}};
