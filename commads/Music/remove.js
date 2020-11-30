const { canModifyQueue } = require("../../utils/Util");

module.exports = {
  name: "remove",
  description: "Listeden bir şarkı kaldırır.",
  execute(client, message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("Liste yok.").catch(console.error);
    if (!canModifyQueue(message.member)) return;
    
    if (!args.length) return message.reply(`Kullanım: ${message.client.PREFIX}remove <Şarkı numarası>`);
    if (isNaN(args[0])) return message.reply(`Kullanım: ${message.client.PREFIX}remove <Şarkı numarası>`);

    const song = queue.songs.splice(args[0] - 1, 1);
    queue.textChannel.send(`${message.author} ❌ kaldırılan: **${song[0].title}**`);
  }
};
