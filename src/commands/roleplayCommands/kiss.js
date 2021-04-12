module.exports = {
name: 'kiss',
cooldown: 2,
permissions: ["sendMessages", "embedLinks"],
async execute(Yui, message, args) {
const misc = require('../../utils/misc.js')
const image = await misc.jsonData('../assets/json/roleplay.json', 'kiss')
const target = message.mentions[0]
if(!target){
message.channel.createMessage(`${message.author.mention}, please try to mention someone :^3`)
}
else if(target.id === message.author.id) {
message.channel.createMessage(`${message.author.username} wants some kisses...`)
}
else if(target){
message.channel.createMessage({ embed: { author: { name:`${message.author.username} is kisses ${target.username}`, icon_url: message.author.avatarURL, url: image }, color: 0x0ffff, image: {url: image }}});
}

}}