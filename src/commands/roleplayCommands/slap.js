const client = require('nekos.life');
const neko = new client();

module.exports = {
name: 'slap',
description: 'Slap someone specified.',
async execute(yui, message, args) {
const slapUrl = await neko.sfw.slap()
const target = message.mentions.users.first()
if(!target){
message.reply('Try to mention someone :^3')
}
else if(target.id === message.author.id) {
message.channel.send(`Don't do that to yourself, ${message.author.username}`)
}
else if(target){
message.channel.send({ embed: { author: { name:`${message.author.username} is slaps ${target.username}!`, icon_url: message.author.displayAvatarURL({ dynamic: true, size: 1024 }), url: slapUrl.url }, color: '#00FFFF', image: {url: slapUrl.url }}});
}

}}