module.exports = {
name: 'fox',
permissions: ["sendMessages", "embedLinks"],
cooldown: 3,
async execute(Yui, message, args) {    
const { KSoftClient } = require('@ksoft/api');
const ksoft = new KSoftClient(require('../../config.json').KSOFT_API_KEY);
const fox = await ksoft.images.random('fox');
message.channel.createMessage({ embed: { author: { name: 'No clue what the fox says 🦊', url: fox.url}, image: { url: fox.url}, color: 0x0ffff }});
}}