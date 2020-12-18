const { canModifyQueue } = require("../../utils/Util");

module.exports = {
  name: "loop",
  aliases: ['döngü','l'],
  description: "Toggle music loop.",
  execute(client, message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("There is nothing playing.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.loop = !queue.loop;
    return queue.textChannel
      .send(`Loop is now ${queue.loop ? "**on**" : "**off**"}`)
      .catch(console.error);

}}