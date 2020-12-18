const Discord = require('discord.js');
       
module.exports = {
name: "kick",
description: "Etiketlenen kişiyi atan komut",
execute(client, message, args) {
let neden = args.slice(1).join(" ")
if(!neden) reason = `Kickked by ${message.author.username}.`
if(!message.member.hasPermission("KICK_MEMBERS"))return message.channel.send('You don\'t have the right permissions to use this command.')
if(!args[0]) return message.channel.send('Please specify a member.');
var user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if (user) {const member = message.guild.member(user);
if(member.id === message.author.id) return message.channel.send('You can\'t kick yourself!');
if (member) {if(member.hasPermission('ADMINISTRATOR')) return message.channel.send('I cannot kick the authorities from the server.');
member.kick({reason: neden}).then(() => {message.channel.send(`**${member.user.tag}** successfully kicked.`)}).catch(err => {
message.channel.send('I could not kick the user.');
console.error(err)})} else {
message.channel.send("The user is not on this server!")

}}}}                   