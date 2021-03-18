module.exports = {
name: 'aww',
async execute(yui, message, args) {
const { KSoftClient } = require('@ksoft/api');
const secrets = require('../../secrets/secrets.json')
const ksoft = new KSoftClient(secrets.KSOFT_API_KEY);
const aww = await ksoft.images.aww();
message.channel.send({ embed: { author: { name:aww.post.title, url: aww.url}, image:{ url: aww.url}, footer: { text: 'AWWWWWWWW'}, color: 'RANDOM'}}); 
}}