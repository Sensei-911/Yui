const client = require('nekos.life');
const { nsfw } = new client();
module.exports = {
name: 'yuri',
description: 'Sends random yuri pictures.',
async execute(yui, message, args) {
if(message.channel.nsfw === false) return message.channel.send({embed: { title:'NSFW not allowed here', description:'Use NSFW commands in a NSFW marked channel!', image: { url:'https://i.imgur.com/oe4iK5i.gif'}, color:'RANDOM'}})
const yuri = await nsfw.yuri()
message.channel.send({embed: { title: 'Here, take some yuri.', color: 'RED', image: { url: yuri.url }, footer: { text: `Requested by ${message.author.tag}`}, timestamp: new Date()}})
}}