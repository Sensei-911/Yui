module.exports = {
name: 'avatar',
description: 'Gives the mentioned users avatar.',
cooldown: 1,
async execute(yui, message, args) {

var user;
var id = args[0];
if(isNaN(args[0]) || args[0].length < 18 || args[0].length > 18) id = message.author.id 
try {
user = (message.mentions.users.first() || await yui.users.fetch(id) || message.author)
message.channel.send({ embed: { author: { name:`Avatar for ${user.tag}`, url: user.displayAvatarURL({ dynamic: true, size: 1024})}, color: '#00FFFF', image: { url: user.displayAvatarURL({ dynamic: true, size: 1024 })}}})
} 
catch (error) {
user = message.author
message.channel.send({ embed: { title: `Avatar for ${user.tag}`, color: '#00FFFF', image: { url: user.displayAvatarURL({ dynamic: true, size: 1024 })}}})
}
}}