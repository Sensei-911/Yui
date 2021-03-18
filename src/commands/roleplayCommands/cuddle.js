const client = require('nekos.life');
const neko = new client();

module.exports = {
name: 'cuddle',
description: 'Cuddle someone specified.',
async execute(yui, message, args) {
const cuddleUrl = await neko.sfw.cuddle()
const target = message.mentions.users.first()
if(!target){
message.reply('Try to mention someone :^3')
}
else if(target.id === message.author.id) {
message.channel.send(`${message.author.username} wants some cuddles...`)
}
else if(target){
message.channel.send({ embed: { author: { name:`${message.author.username} is cuddles ${target.username}!`, icon_url: message.author.displayAvatarURL({ dynamic: true, size: 1024 }), url: cuddleUrl.url }, color: '#00FFFF', image: {url: cuddleUrl.url }}});
}

}}