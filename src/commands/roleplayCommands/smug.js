const client = require('nekos.life');
const neko = new client();

module.exports = {
name: 'smug',
async execute(yui, message, args) {
const smugUrl = await neko.sfw.smug()
message.channel.send({ embed: { author: { name:`${message.author.username} has a smug look`, icon_url: message.author.displayAvatarURL({ dynamic: true, size: 1024 }), url: smugUrl.url }, color: '#00FFFF', image: {url: smugUrl.url }}});

}}