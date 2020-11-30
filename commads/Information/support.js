const { guildlink } = require("../../config.json");

module.exports = {
    name: 'support',
    description: 'Destek sunucusunun linkini verir.',
    execute(client, message, args) {
        const Discord = require("discord.js")
        let user_embed = new Discord.MessageEmbed()
        .setTitle("Destek Sunucuma Gelmek için tıklayın!")
        .setURL(guildlink)
        .setColor("#00FFFF")
        message.channel.send(user_embed)
}};
