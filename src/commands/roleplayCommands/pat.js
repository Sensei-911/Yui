const client = require('nekos.life');
const neko = new client();

module.exports = {
name: 'pat',
description: 'Pat someone specified.',
async execute(yui, message, args) {
const patUrl = await neko.sfw.pat()
const target = message.mentions.users.first()
if(!target){
message.reply('Try to mention someone :^3')
}
else if(target.id === message.author.id) {
message.channel.send(`**${message.author.username}** wants a headpat UwU`)
}
else if(target){
message.channel.send({ embed: { author: { name:`${message.author.username} is giving ${target.username} a headpat!`, icon_url: message.author.displayAvatarURL({ dynamic: true, size: 1024 }), url: patUrl.url }, color: '#00FFFF', image: {url: patUrl.url }}});
}

}}