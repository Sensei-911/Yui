/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const Discord = require('discord.js');

module.exports = {
    name: 'fish',
    execute(client, message, args) {
    var baliklar = ['``Sazan tuttun!`` :fish:' ,'``Köpek balığı tuttun iyi para eder. Sat sat!`` :D' ,'``Uskumru tuttun!`` :fish:' ,'``Mezgit tuttun! Havyarıda var hee`` :) :fish:' ,'``Japon balığı tuttun yemeyi düşünmüyorsun herhalde?``' ,'``Hamsi tuttun!`` :fish:' ,'``Levrek tuttun!`` :fish:' ,'``Hiçbir şey tutamadın maalesef!`` :wastebasket:' ,'``Alabalık tuttun!`` :fish:' ,'``Maalesef balık oltadan kaçtı!`` :wastebasket:' ,'``İstavrit tuttun!`` :fish:'];
    var balik = baliklar[Math.floor(Math.random() * baliklar.length)];
    message.channel.send(balik)
 }}
