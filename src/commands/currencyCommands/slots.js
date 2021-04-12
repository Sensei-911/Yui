module.exports = {
name: 'slots',
description: 'Take your chances at a slot machine.',
aliases: ['slotmachine'],
cooldown: 15,
permissions:["sendMessages", "embedLinks"],
async execute(Yui, message, args) {   

const slotItems = ['💰', '🔥', '✨', '🏆', '💎', '🔔', '💥', '🥇']; 
const balance = await Yui.db.getCoins(message.author.id)

let win = false;

if (!args[0]) return message.channel.createMessage({ embed: { description: 'Specify an amount', color: 0xff0000 }});
let betAmount = parseInt(args[0])
if (betAmount > 50000) return message.channel.createMessage({ embed: { description: 'You cant bet more than 50,000', color: 0x0ffff }})
if (betAmount < 0) return message.channel.createMessage({ embed: { description: 'You cannot bet on negative numbers', color: 0x0ffff }})
if (betAmount > balance) return message.channel.createMessage({ embed: { description: 'You are betting more than you have', color: 0x0ffff }})

let number = []
for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length) }

if (number[0] == number[1] && number[1] == number[2]) { 
betAmount *= 9
win = true;
} 
else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
betAmount *= 2
win = true;
}

if (win) {
await Yui.db.addCoins(message.author.id, betAmount)
let newBalance = balance + betAmount
message.channel.createMessage({ embed: { description: `**>** ${slotItems[number[0]]} ${slotItems[number[1]]} ${slotItems[number[2]]} **<**\n\nYou won **${betAmount.toLocaleString()}**\nMultiplier \`2x\`\nYou now have **${newBalance.toLocaleString()}**`, color: 0x66ff00, footer: { text: 'winner winner'} }})
} 

else {
await Yui.db.addCoins(message.author.id, -betAmount)
let newBalance = balance - betAmount
message.channel.createMessage({ embed: { description: `**>** ${slotItems[number[0]]} ${slotItems[number[1]]} ${slotItems[number[2]]} **<**\n\nYou lost **${betAmount.toLocaleString()}**\nYou now have **${newBalance.toLocaleString()}**`, color: 0xff0000, footer: { text: 'sucks to suck'} }})
}

}}