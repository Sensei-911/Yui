const Discord = require('discord.js');

module.exports = {
name: "create-category",
aliases: ['createcategory','createcg'],
cooldown: 5,
description: "Create category.",
execute(client, message, args) {
if (!message.member.hasPermission("MANAGE_CHANNELS")) return 
let channel_name = args.slice(0).join(' ');
if(!channel_name) return message.channel.send(`Please write the name of the channel I\'m going to create.`)
if(channel_name.length > 100) return message.channel.send(`Keep it under 100 words.`)
message.guild.channels.create(channel_name, {type: 'category'})
message.channel.send(`A category named \`${channel_name}\` successfully  was created.`)
 
}}