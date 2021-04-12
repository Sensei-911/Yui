module.exports = {
name: 'balance',
cooldown: 3,
permissions:["sendMessages", "embedLinks"],
aliases: ['cash','money','bal'],
async execute(Yui, message, args) {

const target = message.mentions[0] || message.author
const coins = await Yui.db.getCoins(target.id)

message.channel.createMessage({ embed: { description: `${target.mention} has ${coins.toLocaleString()} coins!`, color: 0x0ffff} })

}}