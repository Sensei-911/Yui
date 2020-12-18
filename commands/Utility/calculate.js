const { calculator } = require("../../utils/functions");
const math = require('math.js');
const Discord = require('discord.js');
const mathemoji = '<a:narhudo:776707400744566784>'

module.exports = {
name: 'calculate',
aliases: ["hesapla"],
description: 'Calculate the args.',
execute(client, message, args) {
        
if(!args[0]) return message.channel.send('Provide the first number!');
if(!args[1]) return message.channel.send('Provide the second number!');
if(!args[2]) return message.channel.send('Provide the operation!');
if (args.length > 3) return message.channel.send("Currently I can only make calculations with one operation.")

message.channel.send(`${mathemoji} **| ${message.author.username},** answer of your question : **${calculator(args[0],args[1],args[2])}**`)

}}