const economy = require('../../utils/dbFunctions')

module.exports = {
name: 'balance',
aliases: ['cash','money','bal'],
async execute(yui, message, args) {

const target = message.mentions.users.first() || message.author
const msg = { guildId: message.guild.id, userId: target.id }
const coins = await economy.getCoins(msg.guildId, msg.userId)

if(target.bot) return message.channel.send(`Bots can't have coins`)
message.channel.send(`💰 | **${target.username}**, you currently have **__${coins} coins__!**`)

}}