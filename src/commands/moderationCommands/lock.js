module.exports = {
name: "lock",
description: "Etiketlenen kişinin ismini değiştirir",
execute(yui, message, args) {
if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
let channel = message.mentions.channels.first() || message.channel;
let reason;
if(!message.mentions.channels.first()) {if(args[0]) reason = args.slice(0).join(' ')}
if(message.mentions.channels.first()) {if(args[1]) reason = args.slice(1).join(' ')}
let reasonn;
if(!reason) reasonn = '. No reason given.';
if(reason) reasonn = ` for ${reason} reason.`;
let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': false }, `Locked by ${message.author.tag}`)
channel.send({ embed: { title: `${channel.name} has been Locked.`, description:`Unfortunately, mods had to lock this channel${reasonn} Please respect this decision and it MAY be reopened in the future.`,color: 'RED'}})
    
}}