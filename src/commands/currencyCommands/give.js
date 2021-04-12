module.exports = {
name: 'give',
cooldown: 3,
aliases: ["transfer", "send"],
async execute(Yui, message, args) {

const balance = await Yui.db.getCoins(message.author.id);

if (!args[0]) return message.channel.createMessage({ embed: { description: 'Please specify a user.', color: 0x0ffff }})
if (!args[1]) return message.channel.createMessage({ embed: { description: 'Please specify the coin amount.', color: 0x0ffff }})

const moneyAmount = parseInt(args[1]);

if (moneyAmount < 0)       return message.channel.createMessage({ embed: { description: 'You cannot give money in negative numbers', color: 0x0ffff }})
if (moneyAmount > balance) return message.channel.createMessage({ embed: { description: 'You dont have that much money!', color: 0x0ffff }})

const target = message.mentions[0]

await Yui.db.addCoins(target.id, moneyAmount)
await Yui.db.removeCoins(message.author.id, moneyAmount)

message.channel.createMessage({ embed: { description: `You gived ${target.mention} ${moneyAmount} coins!`, color: 0x66ff00 }})

}}