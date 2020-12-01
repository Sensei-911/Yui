/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const animeJs = require('@freezegold/anime.js');
const anime = new animeJs.Client()
const Discord = require("discord.js")
module.exports = {
    name: 'anime',
    description: 'Adam asmaca',
    async execute(client, message, args) {
let lol = args.slice(0).join(' ')
if(!lol) return message.channel.send("Bir anime adı girmelisin.")
anime.searchAnime(lol).then(res => {
if(!res) return message.channel.send("Böyle bir anime bulamadım.")
let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(res[0].titles.romaji)
.setDescription(`${res[0].synopsis.replace("'", "").replace("+","\n")}\n\n**MyAnimeList kullanıcı sayısı** : \`${res[0].userCount}\`\n**MyAnimeList favori sayısı** : \`${res[0]. favoritesCount}\`\n**Çıkış Tarihi** : \`${res[0].startDate}\`\n**Bitiş tarihi** : \`${res[0].endDate}\`\n**Bölüm Sayısı** : \`${res[0].episodeCount}\`\n**Bölüm Uzunluğu** : \`${res[0].episodeLength}dk\`\n**Nsfw Mi?** : ${res[0].nsfw? "Evet" : "Hayır"}\n\n**:star: Reyting** : ${res[0].averageRating}/100\n\n\n`)
.setThumbnail(res[0].  posterImage.large)
message.channel.send(embed)

});
}}
