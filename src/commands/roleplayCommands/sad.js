module.exports = {
name: 'sad',
async execute(yui, message, args) {
const json = require('./images.json')
const image = json.sad[Math.floor(Math.random() * json.sad.length)]
message.channel.send({ embed: { author: { name:`${message.author.username} is sad :c`, icon_url: message.author.displayAvatarURL({ dynamic: true, size: 1024 }), url: image }, color: '#00FFFF', image: {url: image }}});
}}