const { canModifyQueue } = require("../../utils/Util");

module.exports = {
  name: "remove",
  description: "Remove songs from queue.",
  execute(client, message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("Liste yok.").catch(console.error);
    if (!canModifyQueue(message.member)) return;
    
    if (!args.length) return message.reply(`Usage: ${message.client.PREFIX}remove <Song number>`);
    if (isNaN(args[0])) return message.reply(`Usage: ${message.client.PREFIX}remove <Song number>`);

    const song = queue.songs.splice(args[0] - 1, 1);
    queue.textChannel.send(`${message.author} ❌ removed **${song[0].title}**`);
  
}}