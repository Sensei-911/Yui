module.exports = {
name: 'cry',
async execute(yui, message, args) {
const json = require('./images.json')
const image = json.cry[Math.floor(Math.random() * json.cry.length)]
message.channel.send({ embed: { author: { name:`${message.author.username} is crying :c`, icon_url: message.author.displayAvatarURL({ dynamic: true, size: 1024 }), url: image }, color: '#00FFFF', image: {url: image }}});
}}