module.exports = {
name: 'roulette',
cooldown: 15,
permissions:["sendMessages", "embedLinks"],
async execute(Yui, message, args) {   

const balance = Yui.db.getCoins(message.author.id)
const random = Math.floor(Math.random() * 37);

let betAmount = parseInt(args[1]);

if (!args[0])  return message.channel.createMessage({ embed: { description: `Specify a color | Red [1.5x] Black [2x] Green [15x]`, color: 0xff0000 }});
if (!betAmount) return message.channel.createMessage({ embed: { description: `Specify an amount to gamble | yui roulette <color> <amount>`, color: 0xff0000 }}); 
if (betAmount > 50000) return message.channel.createMessage({ embed: { description: 'You cant bet more than 50,000', color: 0x0ffff }})
if (betAmount < 0) return message.channel.createMessage({ embed: { description: 'You cannot bet on negative numbers', color: 0x0ffff }})
if (betAmount > balance) return message.channel.createMessage({ embed: { description: `You are betting more than you have`, color: 0xff0000 }});

let color = args[0].toLowerCase();

if      (color == "b" || color.includes("black")) color = 0;
else if (color == "r" || color.includes("red"))   color = 1;
else if (color == "g" || color.includes("green")) color = 2;
else return message.channel.createMessage({ embed: { description: `Specify a color | Red [1.5x] Black [2x] Green [15x]`, color: 0xff0000 }});

const misc = require('../../utils/misc.js')

if (random == 0 && color == 2) { 
betAmount *= 15
await Yui.db.addCoins(message.author.id, betAmount)
message.channel.createMessage({ embed: { description: `You won ${betAmount} coins\n\nMultiplier: 15x`, color: 0x66ff00 }})
} 

else if (misc.isOdd(random) && color == 1) {
betAmount = parseInt(betAmount * 1.5)
await Yui.db.addCoins(message.author.id, betAmount)
message.channel.createMessage({ embed: { description: `You won ${betAmount} coins\n\nMultiplier: 1.5x`, color: 0x66ff00 }})
}

else if (!misc.isOdd(random) && color == 0) { 
betAmount = parseInt(betAmount * 2)
await Yui.db.addCoins(message.author.id, betAmount)
message.channel.createMessage({ embed: { description: `You won ${betAmount} coins\n\nMultiplier: 2x`, color: 0x66ff00 }})
} 

else { 
await Yui.db.addCoins(message.author.id, -betAmount)
message.channel.createMessage({ embed: { description: `You lost ${betAmount} coins\n\nMultiplier: 0x`, color: 0xff0000 }})
}

}}