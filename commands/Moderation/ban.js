const Discord = require('discord.js');
       
module.exports = {
name: "ban",
description: "Ban members.",
execute(client, message, args) {
let neden = args.slice(1).join(" ")
if(!neden) reason = `Banned by ${message.author.username}.`
if(!message.member.hasPermission("BAN_MEMBERS"))return message.channel.send('You don\'t have the right permissions to use this command.')
if(!args[0]) return message.channel.send(`\`\`\`yui ban <member> [reason]\n^^^^^^^^\nmember is a required argument that is missing.\`\`\``);
var user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if (user) {const member = message.guild.member(user);
if(member.id === message.author.id) return message.channel.send('You can\'t kick yourself!');
if (member) {if(member.hasPermission('ADMINISTRATOR')) return message.channel.send('I cannot kick the authorities from the server.');
member.ban({reason: neden}).then(() => {message.channel.send(`**${member.user.tag}** successfully banned.`)}).catch(err => {
message.channel.send('I could not ban the user.');
console.error(err)})} else {
message.channel.send("The user is not on this server!")

}}}}