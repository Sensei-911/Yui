/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const Discord = require("discord.js")
module.exports = {
    name: 'snipe',
    description: 'Botun ismini ayarlar',
    async execute(client, message, args) {
        const snip = client.snipes.get(message.channel.id)
        if(!snip) return message.channel.send("nope")

        let embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(snip.content)
        
        if(snip.image) embed.setImage(snip.image)
        
        message.channel.send(embed)
    }}
