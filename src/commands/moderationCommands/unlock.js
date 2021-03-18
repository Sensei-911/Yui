module.exports = {
name: "unlock",
execute(yui, message, args) {
if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
let channel = message.mentions.channels.first() || message.channel;
let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': null }, `Unlocked by ${message.author.tag}`);
channel.send({ embed: { title: `${channel.name} has been unlocked.` , description: 'Mods had to unlock this channel.',color: 'GREEN'}})

}}