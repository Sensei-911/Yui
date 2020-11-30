const { AUTHOR } = require("../../config.json");
const chalk = require('chalk');
module.exports = {
    name: 'reboot',
    description: 'Botu yeniden başlatır',
    execute(client, message, args) {
        if(message.author.id !== AUTHOR) return;
        console.log(chalk.bold.redBright("Bot Yeniden Başladı"));
        message.channel.send('Bot Yeniden Başlatıldı.').then(() => {
            process.exit(1);

        })
}};