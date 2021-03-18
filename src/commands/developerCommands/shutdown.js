const chalk = require('chalk');
module.exports = {
name: 'shutdown',
aliases: ['off'],
cooldown: 3,
description: 'Shutdown the bot.',
ownerOnly:true,
async execute(yui, message, args) {
await console.log(chalk.bold.redBright("Bot shutdown success."));
await message.channel.send('Bot shutdown success.')
await process.exit(0)

}}