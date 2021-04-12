module.exports = {
name: 'cry',
cooldown: 2,
permissions: ["sendMessages", "embedLinks"],
async execute(Yui, message, args) {
const misc = require('../../utils/misc.js')
const image = await misc.jsonData('../assets/json/roleplay.json', 'cry')
message.channel.createMessage({ embed: { author: { name:`${message.author.username} is crying :c`, icon_url: message.author.avatarURL, url: image }, color: 0x0ffff, image: { url: image }}});
}}