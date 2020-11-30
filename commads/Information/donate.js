const Discord = require('discord.js');

module.exports = {
    name: 'donate',
    description: 'Bağış yaparsınız.',
    execute(client, message, args) {
        let donate_embed = new Discord.MessageEmbed()
        .setTitle("Chika Premium")
        .setDescription(`Chikanın yaşamasına devam etmesi ve daha iyi performans sağlaması için tabi bazı bağış avantajları almak için!\n\n[Patreon](https://www.patreon.com/join/chika_bot \"Click\") - Aylık Destek`)
        .setFooter("Desteğiniz için şimdiden teşekkürler <3")
        .setColor('RANDOM')
        message.channel.send(donate_embed)
}};
        