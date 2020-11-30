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