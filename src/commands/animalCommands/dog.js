module.exports = {
name: 'dog',
async execute(yui, message, args) {    
const { KSoftClient } = require('@ksoft/api');
const secrets = require('../../secrets/secrets.json')
const ksoft = new KSoftClient(secrets.KSOFT_API_KEY);
const dog = await ksoft.images.random('dog');
message.channel.send({ embed: { author: { name:'Bork Bork! 🐶', url: dog.url}, image:{ url: dog.url}, color: 'RANDOM'}}); 
}}