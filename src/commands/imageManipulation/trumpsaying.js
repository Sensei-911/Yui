const Discord = require("discord.js");
const { get } = require("superagent");
module.exports = {
name: 'trumpsaying',
description: 'Make Trump say something.',
async execute(yui, message, args) {
try{
if(!args[0]) return message.channel.send('You didn\'t give me anything to write.')
if(args[0]){
let url = `https://nekobot.xyz/api/imagegen?type=trumptweet&text=${args.join(" ")}`
get(url).then(res => {
let embed = new Discord.MessageEmbed()
.setColor("#00FFFF")
.setAuthor("Trump saying..")
.setImage(res.body.message)
setTimeout(() => {return message.channel.send(embed)}, 100)})
}
}
catch(error){
message.channel.send('404 error :/')
}
}}