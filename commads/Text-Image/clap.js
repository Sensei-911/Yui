/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const Discord = require("discord.js")
module.exports = {
    name: 'clap',
    description: 'Clap',
    execute(client, message, args) {
        let clap = args.slice(0).join('').split('').join(':clap:')
        if (clap.length < 1) return message.channel.send("Yazmam için bir şey vermedin.")
        if (clap.length > 666) return message.channel.send('666 kelimenin altında tut!')
        message.channel.send(clap)
    }}
