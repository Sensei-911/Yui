module.exports = {
name: 'lick',
async execute(yui, message, args) {
const { KSoftClient } = require('@ksoft/api');
const secrets = require('../../secrets/secrets.json')
const ksoft = new KSoftClient(secrets.KSOFT_API_KEY);
const lickUrl = await ksoft.images.random('lick',{ nsfw: false });
const target = message.mentions.users.first()
if(!target){
message.reply('Try to mention someone :^3')
}
else if(target.id === message.author.id) {
message.channel.send(`${message.author.username} want some licks..`)
}
else if(target) {
message.channel.send({ embed: { author: { name:`${message.author.username} is licking ${target.username}`, icon_url: message.author.displayAvatarURL({ dynamic: true, size: 1024 }), url: lickUrl.url }, color: '#00FFFF', image: {url: lickUrl.url }}});
}
}}