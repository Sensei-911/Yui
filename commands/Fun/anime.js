const animeJs = require('@freezegold/anime.js');
const anime = new animeJs.Client()
const Discord = require("discord.js")
module.exports = {
name: 'anime',
description: 'Gives informations about the specified anime.',
async execute(client, message, args) {
let lol = args.slice(0).join(' ')
if(!lol) return message.channel.send("You must enter an anime name.")
anime.searchAnime(lol).then(res => {
if(!res) return message.channel.send("I cant find this anime.")
let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(res[0].titles.romaji)
.setDescription(`${res[0].synopsis.replace("'", "").replace("+","\n")}\n\n**MyAnimeList users** : \`${res[0].userCount}\`\n**MyAnimeList favorite** : \`${res[0]. favoritesCount}\`\n**Release date** : \`${res[0].startDate}\`\n**Last episode date** : \`${res[0].endDate}\`\n**Total episodes** : \`${res[0].episodeCount}\`\n**Duration** : \`${res[0].episodeLength}dk\`\n**Nsfw ?** : ${res[0].nsfw? "Yes" : "No"}\n\n**:star: Rating** : ${res[0].averageRating}/100\n\n\n`)
.setThumbnail(res[0].  posterImage.large)
message.channel.send(embed)

})}}