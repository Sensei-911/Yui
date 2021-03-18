const client = require('nekos.life');
const neko = new client();

module.exports = {
name: 'kiss',
description: 'Kiss someone specified.',
async execute(yui, message, args) {
const kissUrl = await neko.sfw.kiss()
const target = message.mentions.users.first()
if(!target){
message.reply('Try to mention someone :^3')
}
else if(target.id === message.author.id) {
message.channel.send(`${message.author.username} want some kisses...`)
}
else if(target){
message.channel.send({ embed: { author: { name:`${message.author.username} is kissing ${target.username}!`, icon_url: message.author.displayAvatarURL({ dynamic: true, size: 1024 }), url: kissUrl.url }, color: '#00FFFF', image: {url: kissUrl.url }}});
}

}}