/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const { PREFIX } = require("../../config.json");
module.exports = {
  aliases: "<@760244924188327977>",
  execute(client, message) {
    message.channel.send(`Prefix'im **${PREFIX}**`)
  }};
