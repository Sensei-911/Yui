const { invitelink } = require("../../config.json");

module.exports = {
    name: 'invite',
    description: 'Botu davet etmek için link verir.',
    execute(client, message, args) {
        const Discord = require("discord.js")
        let user_embed = new Discord.MessageEmbed()
        .setTitle("Beni sunucunuza davet etmek için tıklayın!")
        .setURL(invitelink)
        .setColor("#00FFFF")
        message.channel.send(user_embed)
}};
