const Discord = require("discord.js");
const { get } = require("superagent");
module.exports = {
name: 'changemymind',
description: 'Write what you say in a image.',
async execute(client, message, args) {
let word = args.slice(0).join(' ');
if(word < 1) return message.channel.send('Please write something.') 
if (word > 666) return message.channel.send('Keep it under 666 words!')
let url = `https://nekobot.xyz/api/imagegen?type=changemymind&text=${args.join(" ")}`
get(url).then(res => {
message.channel.send({ files: [res.body.message]});  

})}}