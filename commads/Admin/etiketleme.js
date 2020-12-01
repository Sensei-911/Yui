/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const { AUTHOR } = require("../../config.json");
const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "etiketle",
  description: "Bu komut.",
  execute(client, message) {
    if(message.author.id !== AUTHOR) return
    const taggedUser = message.mentions.users.first()|| message.author
    message.channel.send(`<@${taggedUser.id}>`)
  }};
