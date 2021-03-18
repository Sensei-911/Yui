module.exports = {
name: 'shy',
async execute(yui, message, args) {
const json = require('./images.json')
const image = json.shy[Math.floor(Math.random() * json.shy.length)]
message.channel.send({ embed: { author: { name:`${message.author.username} is shy -,-`, icon_url: message.author.displayAvatarURL({ dynamic: true, size: 1024 }), url: image }, color: '#00FFFF', image: {url: image }}});
}}