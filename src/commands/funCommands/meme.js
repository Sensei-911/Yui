module.exports = {
name: 'meme',
async execute(yui, message, args) {
const { KSoftClient } = require('@ksoft/api');
const secrets = require('../../secrets/secrets.json')
const ksoft = new KSoftClient(secrets.KSOFT_API_KEY);
const meme = await ksoft.images.meme();
message.channel.send({ embed: { author: { name:meme.post.title, url: meme.url}, image:{ url: meme.url}, color: 'RANDOM', footer: { text: `👍 ${meme.post.upvotes} | 💬 ${meme.post.comments}`}, }}); 
}}