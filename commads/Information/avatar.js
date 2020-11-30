module.exports = {
    name: 'avatar',
    description: 'Etiketlenen kişinin avatarını veren komut',
    execute(client, message, args) {
        const Discord = require("discord.js")
        let kullanıcı = message.mentions.users.first() || message.author
        let avatar_embed = new Discord.MessageEmbed()
        .setTitle(message.author.tag)
        .setURL(kullanıcı.displayAvatarURL({dynamic: true, size: 1024}))
        .setColor('#00FFFF')
        .setImage(kullanıcı.displayAvatarURL({dynamic: true, size: 1024}))

        message.channel.send(avatar_embed)
}};
