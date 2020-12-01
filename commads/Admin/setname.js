/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const { AUTHOR } = require("../../config.json");
const chalk = require('chalk');
module.exports = {
    name: 'setname',
    description: 'Botun ismini ayarlar',
    execute(client, message, args) {
        let bot_name = args.slice(0).join(' ');
        if(message.author.id !== AUTHOR) return;
        console.log(chalk.bold.redBright("Botun ismi değişti."));
        message.channel.send('Botun ismi değişti.').then(() => {
        client.user.setUsername(bot_name)
        })
}};



