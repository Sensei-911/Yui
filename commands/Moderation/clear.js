const Discord = require('discord.js');

module.exports = {
name: "clear",
alias: ['purge','clean'],
description: "Clears messages.",
cooldown: 7,
async execute(client, message, args) {
let clear = args.slice(0).join(' ');
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message
if(!clear) return message.channel.send("You should write how many messages will be deleted.")
if(isNaN(clear)) return message.channel.send("You must enter a number.")
if(clear > 200) return message.channel.send("Keep it under 100 letters.")
if(clear < 0) return message.channel.send("I can't delete messages in negative numbers.")
message.channel.bulkDelete(clear)
await message.channel.send(`♻ **Cleared** \`${clear}\` **messages**`).then(b =>{b.delete({timeout:5000})})

}}