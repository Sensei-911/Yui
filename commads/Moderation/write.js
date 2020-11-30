const Discord = require("discord.js")
module.exports = {
    name: 'write',
    aliases: ['say'],
    description: 'Etiketlenen kişinin avatarını veren komut',
    execute(client, message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply("Bu komutu kullanamazsın.").then(m => m.delete(5000));
        let write_mesaj = args.slice(0).join(' ');
        if (write_mesaj.length < 1) return message.reply("Yazmam için bir şey vermedin.")
        message.delete();
        message.channel.send(write_mesaj);
}};