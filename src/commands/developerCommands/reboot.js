const chalk = require('chalk');
module.exports = {
name: 'reboot',
aliases: ['restart'],
cooldown: 3,
description: 'Restarts the bot.',
ownerOnly:true,
execute(yui, message, args) {
console.log(chalk.bold.redBright("Bot restarted."));
message.channel.send('Bot restarted.').then(() => {
process.exit(1);

})}}