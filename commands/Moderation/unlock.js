const Discord = require('discord.js');
       
module.exports = {
name: "unlock",
description: "Unlock the channel.",
execute(client, message, args) {
if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
let channel = message.mentions.channels.first() || message.channel;
message.channel.send(`Channel ${channel} has been unlocked.`).then(m => m.delete({timeout: 7000}));
let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': null }, 'Unlocked by '+message.author.tag);
channel.send(new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(channel.name+' has been unlocked.')
.setDescription(`Mods had to unlock this channel.`));

}}