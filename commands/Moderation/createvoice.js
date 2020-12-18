const Discord = require('discord.js');

module.exports = {
name: "createvoice",
description: "Create voice channel.",
aliases: ['createvc','create-vc'],
cooldown: 5,
execute(client, message, args) {
let channel_name = args.slice(0).join(' ');
if (!message.member.hasPermission("MANAGE_CHANNELS")) return
if(!channel_name) return message.channel.send(`Please write the name of the channel I\'m going to create.`)
if(channel_name.length > 100) return message.channel.send(`Keep it under 100 words.`)
message.guild.channels.create(channel_name, {type: 'voice'})
message.channel.send(`A voice channel named \`${channel_name}\` successfully  was created.`)

}}