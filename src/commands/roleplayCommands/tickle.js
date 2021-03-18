const client = require('nekos.life');
const neko = new client();

module.exports = {
name: 'tickle',
description: 'Tickle someone specified.',
async execute(yui, message, args) {
const tickleUrl = await neko.sfw.tickle()
const target = message.mentions.users.first()
if(!target){
message.reply('Try to mention someone :^3')
}
else if(target.id === message.author.id) {
message.channel.send(`${message.author.username} wants some tickles -,-`)
}
else if(target){
message.channel.send({ embed: { author: { name:`${message.author.username} is tickles ${target.username}!`, icon_url: message.author.displayAvatarURL({ dynamic: true, size: 1024 }), url: tickleUrl.url }, color: '#00FFFF', image: {url: tickleUrl.url }}});
}

}}