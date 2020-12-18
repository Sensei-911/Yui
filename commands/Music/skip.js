const { canModifyQueue } = require("../../utils/Util");

module.exports = {
  name: "skip",
  aliases: ["s"],
  description: "Sonraki şarkıya atlar",
  execute(client, message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue)
      return message.reply("Şu an bir şarkı oynamıyor.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ şarkıyı geçti`).catch(console.error);

}}