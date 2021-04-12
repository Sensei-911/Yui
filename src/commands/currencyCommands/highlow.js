module.exports = {
name: 'highlow',
cooldown: 15,
async execute(Yui, message, args) {
const misc = require('../../utils/misc.js')
const number = await misc.random(1, 100)
const hint = await misc.random(1, 100)
const money = await misc.random(500, 2000)

message.channel.createMessage({ embed: { author: { name: `${message.author.username}'s high-low game`, icon_url: message.author.avatarURL }, description: `A number secret between 1-100 has been chosen. Your hint is **${hint}**.\n Respond with "high", "low", or "jackpot".`, footer: { text: `Choose whether you think the hidden number is higher, lower, or the same number as the hint`}, color: 0x0ffff }})

const guess = await Yui.MessageCollector.awaitMessage(message.channel.id, message.author.id, 5e4);
if (!guess) return message.channel.createMessage("You did not answer the question try to give it next time.")

const guessContent = guess.content

if (!['low', 'high', 'jackpot'].includes(guessContent.toLowerCase())) return message.channel.createMessage(`${message.author.mention} Hey your options to respond are "high", "low", and "jackpot". Run the command again with more brain cells next time. (Number was ${number} btw)`)

let correctAnswer;
if (number > hint) correctAnswer = 'high'
if (number < hint) correctAnswer = 'low'
if (number == hint) correctAnswer = 'jackpot'

if (guessContent.toLowerCase() == correctAnswer) {
await Yui.db.addCoins(message.author.id, money)
message.channel.createMessage({ embed: { author: { name: `${message.author.username}'s high-low game`, icon_url: message.author.avatarURL }, description: `**You won ${money.toLocaleString()}**\n\nYour hint was **${hint}**. The hidden number was **${number}**.`, color: 0x66ff00 }})
}
if (guessContent.toLowerCase() != correctAnswer) {
message.channel.createMessage({ embed: { author: { name: `${message.author.username}'s high-low game`, icon_url: message.author.avatarURL }, description: `**You lost!**\n\nYour hint was **${hint}**. The hidden number was **${number}**.`, color: 0xff0000 }})
}

}}