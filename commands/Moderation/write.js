const Discord = require("discord.js")

module.exports = {
name: 'write',
aliases: ['say','yaz'],
description: 'Write what you say.',
execute(client, message, args) {
if (!message.member.hasPermission("MANAGE_MESSAGES"))
return message.reply("You can't use this.").then(m => m.delete(5000));
let write_mesaj = args.slice(0).join(' ');
if (write_mesaj.length < 1) return message.reply("Give me some args.")
message.delete();
message.channel.send(write_mesaj);

}}