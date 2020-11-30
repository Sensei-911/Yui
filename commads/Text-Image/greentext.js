const Discord = require("discord.js")
module.exports = {
    name: 'greentext',
    description: 'Söylenen yazıyı yeşil yazar',
    execute(client, message, args) {
        let write_mesaj = args.slice(0).join(' ');
        if (write_mesaj.length < 1) return message.reply("Yazmam için bir şey vermedin.")
        message.channel.send('```'+`css
${write_mesaj}`+'```');
}};
