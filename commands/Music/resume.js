const { canModifyQueue } = require("../../utils/Util");

module.exports = {
  name: "resume",
  aliases: ["r"],
  description: "Starts paused song.",
  execute(client, message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel.send(`${message.author} ▶ resumed the music!`).catch(console.error);
    }
    return message.reply("Liste durdurulmamış").catch(console.error);
  
}}
