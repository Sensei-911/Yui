module.exports = {
name: 'cat',
async execute(yui, message, args) {    
const { KSoftClient } = require('@ksoft/api');
const secrets = require('../../secrets/secrets.json')
const ksoft = new KSoftClient(secrets.KSOFT_API_KEY);
const cat = await ksoft.images.random('cat');
message.channel.send({ embed: { author: { name:'Meow 😻', url: cat.url}, image:{ url: cat.url}, color: 'RANDOM'}}); 
}}