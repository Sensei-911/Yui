const { canModifyQueue } = require("../../utils/Util");


module.exports = {
  name: "stop",
  description: "Şarkıyı durdurur",
  execute(client, message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if (!queue) return message.reply("Şu an bir şarkı oynamıyor.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏹ şarkıyı durdurdu!`).catch(console.error);
  }
};
