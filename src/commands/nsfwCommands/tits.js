const client = require('nekos.life');
const { nsfw } = new client();
module.exports = {
name: 'tits',
description: 'Sends random tits pictures.',
async execute(yui, message, args) {
if(message.channel.nsfw === false) return message.channel.send({embed: { title:'NSFW not allowed here', description:'Use NSFW commands in a NSFW marked channel!', image: { url:'https://i.imgur.com/oe4iK5i.gif'}, color:'RANDOM'}})
const tits = await nsfw.tits()
message.channel.send({embed: { title: 'Here, take some tits.', color: 'RED', image: { url: tits.url }, footer: { text: `Requested by ${message.author.tag}`}, timestamp: new Date()}})
}}