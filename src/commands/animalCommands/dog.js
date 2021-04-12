module.exports = {
name: 'dog',
permissions: ["sendMessages", "embedLinks"],
cooldown: 3,
async execute(Yui, message, args) {    
const { KSoftClient } = require('@ksoft/api');
const ksoft = new KSoftClient(require('../../config.json').KSOFT_API_KEY);
const dog = await ksoft.images.random('dog');
message.channel.createMessage({ embed: { author: { name: 'Bork Bork! 🐶', url: dog.url}, image: { url: dog.url}, color: 0x0ffff }}); 
}}