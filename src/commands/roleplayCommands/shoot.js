module.exports = {
name: 'shoot',
description: 'Shoot someone specified.',
async execute(yui, message, args) {
const json = require('./images.json')
const image = json.shoot[Math.floor(Math.random() * json.shoot.length)]
const target = message.mentions.users.first()
if(!target){
message.reply('Try to mention someone :^3')
}
else if(target.id === message.author.id) {
message.channel.send(`${message.author.username} lets don't do that :c`)
}
else if(target){
message.channel.send({ embed: { author: { name:`${message.author.username} is shooting ${target.username}!`, icon_url: message.author.displayAvatarURL({ dynamic: true, size: 1024 }), url: image }, color: '#00FFFF', image: {url: image }}});
}

}}