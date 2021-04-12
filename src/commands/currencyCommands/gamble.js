module.exports = {
name: 'gamble',
aliases: ['bet'],
cooldown: 15,
permissions: ["sendMessages", "embedLinks"],
async execute(Yui, message, args) {

const balance = await Yui.db.getCoins(message.author.id)
const misc = require('../../utils/misc.js')

if (!args[0]) return message.channel.createMessage('How much do you want to bet?')
const betAmount = parseInt(args[0])
if (betAmount > 50000) return message.channel.createMessage('You cant bet more than 50,000')
if (betAmount < 0) return message.channel.createMessage('You cannot bet on negative numbers')
if (betAmount > balance) return message.channel.createMessage('You are betting more than you have')

const roll1 = await misc.random(1, 12);
const roll2 = await misc.random(1, 12);
const percent = roll1 * 10 - roll2 * 10
const percentWon = 100 + percent

const money = betAmount / 100 * percentWon

if(roll1 > roll2) {
let newBalance = balance + money
message.channel.createMessage({ embed: { author: { name: `${message.author.username}'s winning gambling game`, icon_url: message.author.avatarURL }, description: `You won **${money.toLocaleString()}**\n\n**Percent Won**: ${percentWon}%\n**New Balance**: ${newBalance.toLocaleString()}`, fields: [{ name: message.author.username, value: `Rolled \`${roll1}\``, inline: true }, { name: 'Yui', value: `Rolled \`${roll2}\``, inline: true }], color: 0x66ff00 }})
await Yui.db.addCoins(message.author.id, money)
}

else if(roll1 == roll2) {
message.channel.createMessage({ embed: { author: { name: `${message.author.username}'s gambling game`, icon_url: message.author.avatarURL }, description: `Tie! You lost nothing!\n\nYou have **${balance.toLocaleString()}**`, fields: [{ name: message.author.username, value: `Rolled \`${roll1}\``, inline: true }, { name: 'Yui', value: `Rolled \`${roll2}\``, inline: true }], color: 0xffff00 }})
}

else if(roll1 < roll2) {
let newBalance = balance - betAmount
message.channel.createMessage({ embed: { author: { name: `${message.author.username}'s losing gambling game`, icon_url: message.author.avatarURL }, description: `You lost **${betAmount.toLocaleString()}**\n\n**New Balance**: ${newBalance.toLocaleString()}`, fields: [{ name: message.author.username, value: `Rolled \`${roll1}\``, inline: true }, { name: 'Yui', value: `Rolled \`${roll2}\``, inline: true }], color: 0xff0000 }})
await Yui.db.removeCoins(message.author.id, betAmount)
}
}}