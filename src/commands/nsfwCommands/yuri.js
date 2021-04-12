module.exports = {
name: 'yuri',
isNSFW: true,
permissions: ["sendMessages", "embedLinks"],
async execute(Yui, message, args) {
const fetch = require('node-fetch')
const json = await fetch('https://nekos.life/api/v2/img/yuri').then(response => response.json())
message.channel.createMessage({ embed: { color: 0x0ffff, image: { url: json.url }, footer: { text: `Requested by ${message.author.username}#${message.author.discriminator}`}, timestamp: new Date()}})
}}