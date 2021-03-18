module.exports = {
name: 'fox',
async execute(yui, message, args) {    
const { KSoftClient } = require('@ksoft/api');
const secrets = require('../../secrets/secrets.json')
const ksoft = new KSoftClient(secrets.KSOFT_API_KEY);
const fox = await ksoft.images.random('fox');
message.channel.send({ embed: { author: { name:'No clue what the fox says 🦊', url: fox.url}, image:{ url: fox.url}, color: 'RANDOM', footer: { text: `${message.author.tag} | Fox is love, fox is life`}}}); 
}}