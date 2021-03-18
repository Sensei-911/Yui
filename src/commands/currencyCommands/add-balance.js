const economy = require('../../utils/dbFunctions')

module.exports = {
name: 'add-balance',
ownerOnly:true,
async execute(yui, message, args) {

const mention = message.mentions.users.first()
if(!mention) return message.reply('Please tag a user to add coins to.')
const coins = args[1]
if(isNaN(coins)) return message.channel.send('Please provide a valid numnber of coins.')
const msg = { guildId: message.guild.id, userId: mention.id }
await economy.addCoins(msg.guildId, msg.userId, coins)

message.reply(`💳 | You've given **${mention.username}** **__${coins} coins__**.`)

}}
