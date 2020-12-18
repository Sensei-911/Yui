const { AUTHOR } = require("../../config.json");
const chalk = require('chalk');
module.exports = {
name: 'setname',
description: 'Change bots name.',
execute(client, message, args) {
let bot_name = args.slice(0).join(' ');
if(message.author.id !== AUTHOR) return;
console.log(chalk.bold.redBright("Bot's name changed."));
message.channel.send("Bot's name changed.").then(() => {
client.user.setUsername(bot_name)

})}}