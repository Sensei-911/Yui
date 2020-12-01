/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
var Jimp = require('jimp');
const Discord = require('discord.js');
return
module.exports = {
    name: 'wasted',
    description: 'Spoiler içinde yazar',
    execute(client, message, args) {
  var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(295, 295)
            image.greyscale()
            image.gaussian(3)
            Jimp.read("https://cdn.glitch.com/b18a2fa6-68cb-49d5-9818-64c50dd0fdab%2F1.png?1529363616039", (err, avatar) => {
                avatar.resize(295, 295)
                image.composite(avatar, 4, 0).write(`./x/${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./x/${user.id}.png`));
                  message.react('617413726768988160')
                }, 1000);
          message.channel.stopTyping();
            });
        });
    }}
