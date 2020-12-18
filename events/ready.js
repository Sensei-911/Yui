const Discord = require('discord.js');
const { PREFIX } = require('../config.json')
const chalk = require('chalk')
module.exports = client => {
console.log(chalk.bold.redBright('Boot has been successfully completed.'))
client.user.setPresence({ activity: {type:"PLAYING" , name: `${PREFIX} help - yuibot.icu`}, status: 'online' })
}
