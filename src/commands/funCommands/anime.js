const animeJs = require('@freezegold/anime.js');
const anime = new animeJs.Client()
const Discord = require("discord.js")
module.exports = {
name: 'anime',
description: 'Gives informations about the specified anime.',
async execute(yui, message, args) {
let anime_name = args.slice(0).join(' ')
if(!anime_name)return message.channel.send("You must enter an anime name.")
anime.searchAnime(anime_name).then(res => {
if(!res) return message.channel.send("I cant find this anime.")
let embed = new Discord.MessageEmbed()
.setDescription(`${res[0].synopsis.replace("'", "").replace("+","\n")}\n\n**🎊 Total episodes** : ${res[0].episodeCount}\n**⭐ Average Rating** : ${res[0].averageRating}/100\n\n\n`)
.setColor("#00FFFF")
.setTitle(res[0].titles.romaji)
.setThumbnail(res[0].posterImage.large)
message.channel.send(embed)

})}}