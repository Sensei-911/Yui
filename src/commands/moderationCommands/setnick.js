module.exports = {
name: "setnick",
description: "Change the specified members name.",
recovery:true,
execute(yui, message, args) {
const Discord = require('discord.js')
if (!message.member.hasPermission("MANAGE_NICKNAMES")) return
let name = args.slice(1).join(' ');
let mention = message.mentions.users.first();
if(!mention) return message.reply(`Please specify a member!`)
if(!name) return message.reply(`Please enter a username!`)
if(name.length > 32) return message.reply("Please enter a name with no exceeding `32` characters.!")
message.guild.members.cache.get(kullanici.id).setNickname(`${name}`)
message.channel.send(`The username of the person named \`${mention.username}\` has been changed to \`${name}\`.`)

}}