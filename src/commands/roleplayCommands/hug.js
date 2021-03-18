const client = require('nekos.life');
const neko = new client();

module.exports = {
name: 'hug',
description: 'Hug someone specified.',
async execute(yui, message, args) {
const hugUrl = await neko.sfw.hug()
const target = message.mentions.users.first()
if(!target){
message.reply('Try to mention someone :^3')
}
else if(target.id === message.author.id) {
message.channel.send(`**${message.author.username}** wants a hug...`)
}
else if(target){
message.channel.send({ embed: { author: { name:`${message.author.username} is hugs ${target.username}`, icon_url: message.author.displayAvatarURL({ dynamic: true, size: 1024 }), url: hugUrl.url }, color: '#00FFFF', image: {url: hugUrl.url }}});
}

}}