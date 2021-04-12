module.exports = {
name: 'snakeeyes',
aliases: ['se'],
cooldown: 15,
permissions: ["sendMessages", "embedLinks"],
async execute(Yui, message, args) {

const misc = require('../../utils/misc.js');
const balance = await Yui.db.getCoins(message.author.id);

var betAmount = parseInt(args[0]);

if (!betAmount) return message.channel.createMessage({ embed: { description: 'Please specify a bet.', color: 0x0ffff }})
if (betAmount > 50000) return message.channel.createMessage({ embed: { description: 'You cant bet more than 50,000', color: 0x0ffff }})
if (betAmount < 0) return message.channel.createMessage({ embed: { description: 'You cannot bet on negative numbers', color: 0x0ffff }})
if (betAmount > balance) return message.channel.createMessage({ embed: { description: 'You are betting more than you have', color: 0x0ffff }})

const roll1 = await misc.random(1, 6);
const roll2 = await misc.random(1, 6);
const dice = { 1: '<:d1:830554497062666321>', 2: '<:d2:830554559088296046>', 3: '<:d3:830554590239391784>', 4: '<:d4:830554617527140393>', 5: '<:d5:830554642437898240>', 6: '<:d6:830554670216249394>' }

if (roll1 == 1 && roll2 == 1) {
betAmount = betAmount * 8;
await Yui.db.addCoins(message.author.id, betAmount);
let newBalance = balance + betAmount
message.channel.createMessage({ embed: { author: { name: `${message.author.username}'s snake eyes game`, icon_url: message.author.avatarURL }, description: `${dice[roll1]} ${dice[roll2]}\n**SNAKE EYES!** You won **8x** your bet: **${betAmount.toLocaleString()}**\nNow you have **${newBalance.toLocaleString()}**`, color: 0x66ff00 }}) 
}
else if (roll1 == 1 && roll2 != 1 || roll1 !=1 && roll2 == 1) {
betAmount = betAmount * 2;
await Yui.db.addCoins(message.author.id, betAmount);
let newBalance = balance + betAmount
message.channel.createMessage({ embed: { author: { name: `${message.author.username}'s snake eyes game`, icon_url: message.author.avatarURL }, description: `${dice[roll1]} ${dice[roll2]}\nA single eye, not bad. You won **2x** your bet: **${betAmount.toLocaleString()}**\nNow you have **${newBalance.toLocaleString()}**`, color: 0x66ff00 }}) 
}
else {
await Yui.db.removeCoins(message.author.id, betAmount);
let newBalance = balance - betAmount
message.channel.createMessage({ embed: { author: { name: `${message.author.username}'s snake eyes game`, icon_url: message.author.avatarURL }, description: `${dice[roll1]} ${dice[roll2]}\nYou didn't get any snake eyes. Sad. You lost your bet.\nNow you have **${newBalance.toLocaleString()}**`, color: 0xff0000 }})
}

}}