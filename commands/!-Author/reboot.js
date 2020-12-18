const { AUTHOR } = require("../../config.json");
const chalk = require('chalk');
module.exports = {
name: 'reboot',
aliases: ['restart'],
description: 'Restart the bot.',
execute(client, message, args) {
if(message.author.id !== AUTHOR) return;
console.log(chalk.bold.redBright("Bot restarted."));
message.channel.send('Bot restarted.').then(() => {
process.exit(1);

})}}