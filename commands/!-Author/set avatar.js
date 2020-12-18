const { AUTHOR } = require("../../config.json");
const chalk = require('chalk');
module.exports = {
name: 'setavatar',
description: 'Change bots avatar.',
execute(client, message, args) {
if(message.author.id !== AUTHOR) return;
console.log(chalk.bold.redBright("Bot's avatar changed."));
message.channel.send("Bot's avatar changed.").then(() => {
client.user.setAvatar('./bot_fotos/5.png') 

})}}