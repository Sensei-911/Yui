const client = require('nekos.life');
const { nsfw } = new client();
module.exports = {
name: 'trap',
description: 'Sends random trap pictures.',
async execute(yui, message, args) {
if(message.channel.nsfw === false) return message.channel.send({embed: { title:'NSFW not allowed here', description:'Use NSFW commands in a NSFW marked channel!', image: { url:'https://i.imgur.com/oe4iK5i.gif'}, color:'RANDOM'}})
const trap = await nsfw.trap()
message.channel.send({embed: { title: 'Here, take some trap.', color: 'RED', image: { url: trap.url }, footer: { text: `Requested by ${message.author.tag}`}, timestamp: new Date()}})
}}