module.exports = {
name: 'flip',
aliases: ["coinflip", "cf"],
cooldown: 15,
permissions:["sendMessages", "embedLinks"],
async execute(Yui, message, args) {

const coinFaces = ['heads', 'tails'];
const coinFace = coinFaces[Math.floor(Math.random() * coinFaces.length)]
const balance = await Yui.db.getCoins(message.author.id)

if (!args[0]) return message.channel.createMessage('Heads or Tails')
if (!args[1]) return message.channel.createMessage('How much do you want to bet?')
const betAmount = parseInt(args[1])
if (betAmount > 50000) return message.channel.createMessage({ embed: { description: 'You cant bet more than 50,000', color: 0x0ffff }})
if (betAmount < 0) return message.channel.createMessage({ embed: { description: 'You cannot bet on negative numbers', color: 0x0ffff }})
if (betAmount > balance) return message.channel.createMessage({ embed: { description: 'You are betting more than you have', color: 0x0ffff }})

if(args[0].toLowerCase() == coinFace) {
message.channel.createMessage(`The coin landed on ${coinFace}, **winning** ${betAmount.toLocaleString()} coins! 🎉🎉🎉`)
await Yui.db.addCoins(message.author.id, betAmount)
}

else if(args[0].toLowerCase() != coinFace) {
message.channel.createMessage(`The coin landed on ${coinFace}, **losing** ${betAmount.toLocaleString()} coins!`)
await Yui.db.removeCoins(message.author.id, betAmount)
}

}}