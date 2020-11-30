const Discord = require('discord.js');
module.exports = {
    name: "poll",
    description: "Etiketlenen kişinin ismini değiştirir",
    async execute(client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Gerekli izinlere sahip değilsin.").then(m => m.delete(5000));
        let mesaj = args.slice(0).join(' ');
        if (mesaj.length < 1) return message.channel.send("Oylamam için mesaj vermedin.").then(m => m.delete(5000));
        if (mesaj.length > 50) return message.channel.send("50 karakter limitini aşmayın!").then(aw => aw.delete(5000));
        let embed = new Discord.MessageEmbed()
        //.setAuthor('https://images-ext-2.discordapp.net/external/zFuxIUt7MUY7Mu7nbT-kOq9S5KcXmpdoBZfvNVcI0Ow/https/cdn.koya.gg/utilities/poll.jpg','Oylama')
        .setTitle(mesaj)
        .setDescription('👍 Evet\n\n👎 Hayır')
        //.setFooter(message.author.DisplayAvatarURL(),`${message.author.username} tarafından gönderildi`)
        .setTimestamp()
        .setColor('GREEN')
        try {
        var gönder = await message.channel.send(embed);
        await gönder.react("👍");
        await gönder.react("👎");
      } catch (error) {
        console.error(error);
      }

}}

