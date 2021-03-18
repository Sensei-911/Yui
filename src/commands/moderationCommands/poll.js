module.exports = {
name: "poll",
description: "Etiketlenen kişinin ismini değiştirir",
async execute(yui, message, args) {
const Discord = require('discord.js')
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Gerekli izinlere sahip değilsin.").then(m => m.delete(5000));
let mesaj = args.slice(0).join(' ');
message.delete()
if (mesaj.length < 1) return message.channel.send("Oylamam için mesaj vermedin.").then(m => m.delete(5000));
if (mesaj.length > 50) return message.channel.send("50 karakter limitini aşmayın!").then(aw => aw.delete(5000));
let embed = new Discord.MessageEmbed()
.setAuthor('Poll', 'https://images-ext-2.discordapp.net/external/zFuxIUt7MUY7Mu7nbT-kOq9S5KcXmpdoBZfvNVcI0Ow/https/cdn.koya.gg/utilities/poll.jpg')
.setDescription(`**${mesaj}**\n\n👍 Yes\n\n👎 No`)
.setFooter(yui.user.username, yui.user.displayAvatarURL())
.setTimestamp()
try {
var gönder = await message.channel.send(embed);
await gönder.react("👍");
await gönder.react("👎");
} catch (error) {
console.error(error);
}

}}