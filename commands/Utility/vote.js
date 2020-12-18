module.exports = {
name: 'vote',
description: 'Gives a link to vote the bot.',
execute(client, message, args) {
const Discord = require("discord.js")
let vote_embed = new Discord.MessageEmbed()
.setTitle("Vote Links")
.setDescription("**Vote for me**\n[top.gg](https://top.gg/bot/760244924188327977) - Every 12 hours\n[discordbotlist.com](https://discordbotlist.com/bots/chika-5569) - Every 12 hours\n[discord.boats](https://discord.boats/bot/760244924188327977) - Every 12 hours\n[discord.bots.gg](https://discord.bots.gg/bots/760244924188327977) - Every 12 hours")
.setColor("#00FFFF")
.setTimestamp() 
.setFooter("Remember to log-in before voting so you can vote")
message.channel.send(vote_embed)

}}
