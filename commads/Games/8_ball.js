/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */      
       const Discord = require('discord.js');
       var cevaplar = [
       "Kaynaklarım eveti gösteriyor",
       "Sonra tekrar sor",
       "Evet",
       "Hayır",
       "Kesinlikle",
       "Bende öyle düşünüyorum",
       "Sen ne dersen o",
       "Şüphesiz",
       "Şimdi tahmin edemem",
       "İşaretler eveti gösteriyor",
       "Bilemedim",
       "Yup",
       "Bilmem",
       "Doğru diyorsun",
       "Hai onii-san",
       "Sadece bugün için",
       "Belki",
       "Kimseye söyleme ama hayır ( ͡° ͜ʖ ͡°)",
       "Bunun cevabını yarın söylerim",
       "Cevaplamaya üşendim şimdi",
       "Sen dersinde olmazmı",
       "Tabi",
]
       
       module.exports = {
           name: '8ball',
           aliases: ["8b"],
           description: 'Rastgele cevap verir',
           execute(client, message, args) {
            let sekizball_mesaj = args.slice(0).join(' ');
            if (sekizball_mesaj.length < 1) return message.channel.send(`**${message.author.username}** Bir soru sormalısın.`)
               var cevap = cevaplar[Math.floor(Math.random()*(cevaplar.length))]
               message.channel.send(`🎱 **| ${message.author.username} sordu :** ${sekizball_mesaj}
<:blank:776723076574347264> **| Cevap :** ${cevap}`)
}}
