/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "choco",
  description: "Birine kurabiye verirsiniz.",
  execute(client, message) {
    var kullanıcı = message.mentions.users.first()|| message.author
    if(kullanıcı.id == message.author.id) return message.channel.send(`**${message.author.username}** çok istiyorsan ben sana kurabiye veririm`)
    message.channel.send(`**${kullanıcı.username}**, **${message.author.username}** sana bir 🍫 verdi!
    ㅤ
〜(꒪꒳꒪)〜🍫`)}}
