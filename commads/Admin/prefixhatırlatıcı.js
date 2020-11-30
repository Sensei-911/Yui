const { PREFIX } = require("../../config.json");
module.exports = {
  aliases: "<@760244924188327977>",
  execute(client, message) {
    message.channel.send(`Prefix'im **${PREFIX}**`)
  }};