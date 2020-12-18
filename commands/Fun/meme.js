const Discord = require('discord.js');
const got = require('got');

module.exports = {
name: "meme",
description: "Random meme.",
execute(client , message, args) {
const meme_embed = new Discord.MessageEmbed();
got('https://www.reddit.com/r/memes/random/.json').then(response => {
let content = JSON.parse(response.body);
let permalink = content[0].data.children[0].data.permalink;
let memeUrl = `https://reddit.com${permalink}`;
let memeImage = content[0].data.children[0].data.url;
let memeTitle = content[0].data.children[0].data.title;
let memeUpvotes = content[0].data.children[0].data.ups;
let memeNumComments = content[0].data.children[0].data.num_comments;
meme_embed.setTitle(`${memeTitle}`);
meme_embed.setURL(`${memeUrl}`)
meme_embed.setColor('RANDOM')
meme_embed.setImage(memeImage);
meme_embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
message.channel.send(meme_embed)

})}}