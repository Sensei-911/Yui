const Discord = require("discord.js")

module.exports = {
name: 'ping',
description: 'Shows bots ping.',
cooldown: 2,
execute(yui, message, args) {
message.channel.send('Pinging...').then(msg => {
let ping = msg.createdTimestamp - message.createdTimestamp
msg.edit(`${ping}ms`); 
})}}
