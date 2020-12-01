/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const Discord = require('discord.js');
const olabilecekler = ['1','2','3','4','5','6']
const zar_boşluk_emoji = ['<:blank:776723076574347264>']

module.exports = {
    name: 'roll',
    aliases: ["zar"],
    description: 'Zar atarsınız.',
    execute(client, message, args) {

var zar = olabilecekler[Math.floor(Math.random() * olabilecekler.length)];

if (zar == '1') {
const zar_cevapları_1 = ['Maga bee','Nası becerdin la','Aga bee']
var zar_mesajı_1 = zar_cevapları_1[Math.floor(Math.random() * zar_cevapları_1.length)];
message.channel.send(`🎲 **| ${message.author.username}** 6 taraflı bir zar atıyor...\n${zar_boşluk_emoji} **|** ${zar_mesajı_1} Bu bir **${zar}**`) 
}

if (zar == '2') {
const zar_cevapları_2 = ['Fena Değil','Eh işte','Şimdi bir daha at',';(']
var zar_mesajı_2 = zar_cevapları_2[Math.floor(Math.random() * zar_cevapları_2.length)];
message.channel.send(`🎲 **| ${message.author.username}** 6 taraflı bir zar atıyor...\n${zar_boşluk_emoji} **|** ${zar_mesajı_2} Bu bir **${zar}**`) 
}

if (zar == '3') {
const zar_cevapları_3 = ['Gambatte','Hadi az zorla','Beğendim seni böyle devam','Çabanı bize göster!','Müq']
var zar_mesajı_3 = zar_cevapları_3[Math.floor(Math.random() * zar_cevapları_3.length)];
message.channel.send(`🎲 **| ${message.author.username}** 6 taraflı bir zar atıyor...\n${zar_boşluk_emoji} **|** ${zar_mesajı_3} Bu bir **${zar}**`) 
}

if (zar == '4') {
const zar_cevapları_4 = ['Güzel!','UU','Böyle devam','Sen bu işi biliyorsun!','Yavaş yavaş öğrenicen']
var zar_mesajı_4 = zar_cevapları_4[Math.floor(Math.random() * zar_cevapları_4.length)];
message.channel.send(`🎲 **| ${message.author.username}** 6 taraflı bir zar atıyor...\n${zar_boşluk_emoji} **|** ${zar_mesajı_4} Bu bir **${zar}**`) 
}

if (zar == '5') {
const zar_cevapları_5 = ['O-O','6 ya ramak kalmıştı','Hadi şimdi 6 geliyor!',':)','Aferim']
var zar_mesajı_5 = zar_cevapları_5[Math.floor(Math.random() * zar_cevapları_5.length)];
message.channel.send(`🎲 **| ${message.author.username}** 6 taraflı bir zar atıyor...\n${zar_boşluk_emoji} **|** ${zar_mesajı_5} Bu bir **${zar}**`) 
}

if (zar == '6') {
const zar_cevapları_6 = ['Oha','Helal lan','İyi atış','Wow','Oa nasıl attın lan!']
var zar_mesajı_6 = zar_cevapları_6[Math.floor(Math.random() * zar_cevapları_6.length)];
message.channel.send(`🎲 **| ${message.author.username}** 6 taraflı bir zar atıyor...\n${zar_boşluk_emoji} **|** ${zar_mesajı_6} Bu bir **${zar}**`)
}

}}
