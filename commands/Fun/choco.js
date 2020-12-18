const { MessageEmbed } = require("discord.js");
module.exports = {
name: "choco",
aliases: ["chocolate"],
description: "Gives someone cookies.",
execute(client, message) {
var kullanıcı = message.mentions.users.first()|| message.author
if(kullanıcı.id == message.author.id) return message.channel.send(`**${message.author.username}** If you want that much, I'll give you a cookie.`)
message.channel.send(`**${kullanıcı.username}**, you got a 🍫 from **${message.author.username}**\n\n〜(꒪꒳꒪)〜🍫`)

}}