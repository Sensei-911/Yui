const Discord = require('discord.js');
const generator = require('generate-password');
let password_emoji = ('<a:hack:776876557738311734>')

module.exports = {
name: "password",
aliases: ["generatepassword"],
description: "Create randomly passwords",
execute(client, message, args) {
var password_length = args.slice(0).join(' ');
if (password_length.length > 2) return message.channel.send("You cannot generate a three-digit password.")
if (!password_length) return message.channel.send('Specify a password length!').then(msg => msg.delete({timeout:2000}));
var password = generator.generate({
length: password_length,
numbers: true,
})
message.author.send(`${password_emoji} **| Your password:** \`${password}\``).then(message.react('✅'))
}}