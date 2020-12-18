const Discord = require('discord.js');
const { PREFIX } = require('../config.json')
const chalk = require('chalk')
module.exports = client => {
console.log(chalk.bold.redBright('Boot has been successfully completed.'))
const promises = [
client.shard.fetchClientValues('guilds.cache.size'),
client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)')
]
return Promise.all(promises)
.then(results => {
const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0)
const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0)
const messages = [`${PREFIX} help | yuibot.icu | v1.7`,`with ${totalGuilds} servers and ${totalMembers} users! | "yui invite"`,`120 commands & 20 aliases`]
setInterval(function() {
var random_message = Math.floor(Math.random()*(messages.length-0)+1);
client.user.setPresence({ activity: {type:"PLAYING" , name: `${messages[random_message]}`}, status: 'online' })
}, 35000)
})}