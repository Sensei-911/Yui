const { canModifyQueue } = require("../../utils/Util");

module.exports = {
  name: "skipto",
  aliases: ["st"],
  description: "Listeden bir şarkıyı atlar",
  execute(client, message, args) {
    if (!args.length)
      return message
        .reply(`Kullanım: ${message.client.PREFIX}${module.exports.name} <Liste numarası>`)
        .catch(console.error);

    if (isNaN(args[0]))
      return message
        .reply(`Kullanım: ${message.client.PREFIX}${module.exports.name} <Liste numarası>`)
        .catch(console.error);

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("Liste yok.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (args[0] > queue.songs.length)
      return message.reply(`Liste sadece ${queue.songs.length} şarkı uzunluğunda! `).catch(console.error);

    queue.playing = true;
    if (queue.loop) {
      for (let i = 0; i < args[0] - 2; i++) {
        queue.songs.push(queue.songs.shift());
      }
    } else {
      queue.songs = queue.songs.slice(args[0] - 2);
    }
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ geçtiği şarkı sayısı: ${args[0] - 1}`).catch(console.error);
  }
};
