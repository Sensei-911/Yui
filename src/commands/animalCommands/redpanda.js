module.exports = {
name: 'redpanda',
permissions: ["sendMessages", "embedLinks"],
cooldown: 3,
async execute(Yui, message, args) {    
const json = require('../../assets/json/animals.json');
const image = json.redpandas[Math.floor(Math.random() * json.redpandas.length)]
message.channel.createMessage({ embed: { author: { name: 'dawwwwwwww 🐼', url: image }, image: { url: image }, color: 0x0ffff }});
}}