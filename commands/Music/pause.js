const { canModifyQueue } = require("../../utils/Util");

module.exports = {
  name: "pause",
  description: "Şarkıyı durdurur",
  execute(client, message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Şu an bir şarkı oynamıyor.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return message.react('⏸').catch(console.error);
    
    }}};
