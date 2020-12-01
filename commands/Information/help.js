/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  cooldown: 3,
  aliases: ["yardım"],
  description: "Bu komut.",
  execute(client, message) {
    let help_embed = new MessageEmbed()
      .setAuthor(`Komutların listesi`,message.author.avatarURL({ size:1024, dynamic:true, format: 'png'}))
      .setDescription("İşte kullanabileceğiniz tüm komutların bir listesi!")
      .setColor('#00FFFF')
      .addField("🛡 | Moderasyon","`ban`,`kick`,`clear`,`write`,`setnick`,`kategoriaç`,`seskanalıaç`,`edit`,`slowmode`,`lock`,`unlock`,`poll`")
      .addField("🎭 | Roleplay","`kiss`,`hug`,`shy`,`cry`,`sad`,`slap`,`shoot`")
      .addField("📜 | Yazı","`greentext`,`spoiler`,`banner`,`imagine`,`clap`")
      .addField("😄 | Eğlence","`joke`,`lenny`,`owo`,`choco`,`penis`,`meme`,`coinflip`,`love`,`roll`")
      .addField("🎮 | Oyun","`adamasmaca`,`guessnumber`,`fish`,`slots`,`8ball`")
      .addField("ℹ | Bilgi","`avatar`,`server`,`ping`,`invite`,`user`,`weather`,`calculate`,`anime`,`password`,`snipe`,`translate`,`donate`,`privacy`")
      .addField("🎵 | Müzik","`play`,`stop`,`skip`,`loop`,`pause`,`lyrics`,`nowplaying`,`playlist`,`pruning`,`queue`,`remove`,`resume`,`search`,`shuffle`,`skipto`,`volume`")
      .setFooter(`Botun Sahibi: 'Sensei#0007`,`https://cdn.discordapp.com/avatars/393754881586102282/a_005bfe684a7ccabac56c3167a6a186f7.gif?size=1024`)
    message.channel.send(help_embed);
  }};
