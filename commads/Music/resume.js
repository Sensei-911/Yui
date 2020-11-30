const { canModifyQueue } = require("../../utils/Util");

module.exports = {
  name: "resume",
  aliases: ["r"],
  description: "Şarkıyı başlatır",
  execute(client, message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Şu an bir şarkı oynamıyor.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel.send(`${message.author} ▶ müziği yeniden başlattı!`).catch(console.error);
    }
    return message.reply("Liste durdurulmamış").catch(console.error);
  }
};
