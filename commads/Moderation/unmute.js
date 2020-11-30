const Discord = require('discord.js');
const database = require('quick.db');
return
module.exports = {
    name: "unmute",
    description: "Etiketlenen kişinin ismini değiştirir",
    async execute(client, message, args) {

if(!message.member.hasPermission('MANAGE_MESSAGES')) return;

const muteRoleFetch = await database.fetch(`carl-mute-role.${message.guild.id}`);
if(!muteRoleFetch) return message.channel.send('This server does not have a mute role, use `!muterole ` to set one or `!muterole create [name]` to create one.');

if(!args[0]) return message.channel.send(`\`\`\`${message.content.split('unmute')[0]}unmute  [reason]
      ^^^^^^^^
member is a required argument that is missing.\`\`\``);

let member = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.guild.members.cache.find(a => message.guild.members.cache.get(a.user.id).nickname && a.nickname.toLowerCase().includes(args[0].toLowerCase())) || message.guild.members.cache.find(a => a.user.username.toLowerCase().includes(args[0].toLowerCase()))
if(!member) return message.channel.send(`Member "${args[0]}" not found`);
member.roles.remove(muteRoleFetch).then(() => {
return message.channel.send('Successfully unmuted **'+member.user.tag+'**');
})
}}