const { canModifyQueue } = require("../../utils/Util");

module.exports = {
  name: "loop",
  aliases: ['döngü'],
  description: "Müziği döngüye sokar.",
  execute(client, message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply("Şu an bir şarkı oynamıyor.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.loop = !queue.loop;
    return queue.textChannel
      .send(`Döngü şu an ${queue.loop ? "**açık**" : "**kapalı**"}`)
      .catch(console.error);
  }};
