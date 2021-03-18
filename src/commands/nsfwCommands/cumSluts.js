const client = require('nekos.life');
const { nsfw } = new client();
module.exports = {
name: 'cumsluts',
description: 'Sends random cum sluts pictures.',
async execute(yui, message, args) {
if(message.channel.nsfw === false) return message.channel.send({embed: { title:'NSFW not allowed here', description:'Use NSFW commands in a NSFW marked channel!', image: { url:'https://i.imgur.com/oe4iK5i.gif'}, color:'RANDOM'}})
const cumsluts = await nsfw.cumsluts()
message.channel.send({embed: { title: 'Here, take some cum sluts.', color: 'RED', image: { url: cumsluts.url }, footer: { text: `Requested by ${message.author.tag}`}, timestamp: new Date()}})
}}