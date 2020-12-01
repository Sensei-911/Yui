/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const Discord = require("discord.js")
module.exports = {
    name: 'translate',
    description: 'Spoiler içinde yazar',
    execute(client, message, args) {
    let google = args.slice(0).join('+');

        let link = `https://translate.google.com/?hl=tr#tr/en/` + google;
        if(!link)return message.reply("Hata !")
  if(!google) return message.reply("**Lütfen Ne Çevireceğimi Yaz**")
        let embed = new Discord.MessageEmbed()
    
    .setColor("0xe2ff00")
    .setTimestamp() 
    .addField("Kelime:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
    .setFooter('Mag | Google Çeviri Sistemi')    
          
    message.channel.send(embed);

    }}
