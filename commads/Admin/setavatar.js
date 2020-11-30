const { AUTHOR } = require("../../config.json");
const chalk = require('chalk');
module.exports = {
    name: 'setavatar',
    description: 'Botun avatarını değiştirir',
    execute(client, message, args) {
        if(message.author.id !== AUTHOR) return;
        console.log(chalk.bold.redBright("Botun avatarı değişti"));
        message.channel.send('Botun avatarı değişti.').then(() => {
            client.user.setAvatar('./bot_fotos/5.png') 
        
})}};



