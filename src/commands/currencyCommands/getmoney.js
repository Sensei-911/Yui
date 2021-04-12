module.exports = {
name: 'getmoney',
cooldown: 60,
permissions:["sendMessages", "embedLinks"],
async execute(Yui, message, args) {
const misc = require('../../utils/misc.js')
const coins = await misc.random(5000, 10000)
await Yui.db.addCoins(message.author.id, coins)
message.channel.createMessage({ embed: { title: 'Use Them To Gamble', description: `You claimed ${coins} coins!`, footer: { text: 'You can use this command in 60 seconds'}, color: 0x66ff00 }})
}}