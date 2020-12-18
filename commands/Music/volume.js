const { canModifyQueue } = require("../../utils/Util");

module.exports = {
  name: "volume",
  aliases: ["v"],
  description: "Şarkının sesini ayarlar",
  execute(client, message, args) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("Şu an bir şarkı oynamıyor.").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply("Önce bir sesli kanala katılmalısın!").catch(console.error);

    if (!args[0]) return message.reply(`🔊 Mevcut ses: **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply("Lütfen sesi ayarlamak için bir sayı giriniz.").catch(console.error);
    if (parseInt(args[0]) > 100 || parseInt(args[0]) < 0)
      return message.reply("Lütfen 0 - 100 arasında bir sayı kullanın.").catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return queue.textChannel.send(`Şu an ses: **${args[0]}%**`).catch(console.error);
  
}}