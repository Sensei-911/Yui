module.exports = {
name: 'happy',
async execute(yui, message, args) {
const json = require('./images.json')
const image = json.happy[Math.floor(Math.random() * json.happy.length)]
message.channel.send({ embed: { author: { name:`${message.author.username} is happy :)`, icon_url: message.author.displayAvatarURL({ dynamic: true, size: 1024 }), url: image }, color: '#00FFFF', image: {url: image }}});
}}