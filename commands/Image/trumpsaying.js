const Discord = require("discord.js");
const { get } = require("superagent");
module.exports = {
name: 'trumpsaying',
description: 'Make Trump say something.',
execute(client, message, args) {
if(!args[0]) return message.channel.send('You didn\'t give me anything to write.')
let url = `https://nekobot.xyz/api/imagegen?type=trumptweet&text=${args.join(" ")}`
get(url).then(res => {
let embed = new Discord.MessageEmbed()
.setColor("0x36393E")
.setAuthor("Trump saying..")
.setImage(res.body.message)
setTimeout(() => {return message.channel.send(embed)}, 100)})

}}