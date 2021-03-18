module.exports = (yui) => {
const chalk = require('chalk')
const Discord = require('discord.js')
const webhookClient1 = new Discord.WebhookClient('id','token');
const webhookClient2 = new Discord.WebhookClient('id','token'); 
yui.on('guildCreate', (guild) => {
webhookClient1.send(`New Server: **${guild.name}**\nMembers: **${guild.memberCount}**`)
})

yui.on('guildDelete', (guild) => {
webhookClient1.send(`Removed Server: **${guild.name}**\nMembers: **${guild.memberCount}**`)
})

yui.on('ready', () => {
webhookClient2.send(`**Yui Is Ready**`)
console.log(chalk.bold.green('Boot has been successfully completed...'))
yui.user.setPresence({ activity: {type:"PLAYING" , name: `${yui.prefix} help | yuibot.icu`}, status: 'online' })

})

}