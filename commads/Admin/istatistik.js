const { AUTHOR } = require("../../config.json");
module.exports = {
    name: 'istatistik',
    description: 'Botu davet etmek için link verir.',
    execute(client, message, args) {
        if(message.author.id !== AUTHOR) return
        const Discord = require("discord.js")
        message.channel.send(`
<a:oksag:766445096777809932> **${client.guilds.cache.size} sunucu!**
<a:oksag:766445096777809932> **${client.users.cache.size} kullanıcı!**`)
}};
