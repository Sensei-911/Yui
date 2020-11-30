const Discord = require('discord.js');
var images = [
//Zero Two
"https://cdn.zerotwo.dev/SAD/dea4e3ef-9af8-40c3-bddd-7c1a4aefe371.gif",
"https://cdn.zerotwo.dev/SAD/b7543974-3993-46a7-95ac-2fdfed60792c.gif",
"https://cdn.zerotwo.dev/SAD/02fe495f-f17f-4dce-a754-93f37c2e25c5.gif",
"https://cdn.zerotwo.dev/SAD/ab7a526e-0200-42df-ae93-9ed9d41aeac3.gif",
"https://cdn.zerotwo.dev/SAD/bb19fbdd-90ed-4a3f-af42-37d89acd8df9.gif",
"https://cdn.zerotwo.dev/SAD/0bca1383-3d28-45a6-9a89-8c9f25874f1c.gif",
"https://cdn.zerotwo.dev/SAD/edc5f5a4-cb77-47cd-b22a-faea0cad0b65.gif",
"https://cdn.zerotwo.dev/SAD/2c2702a8-04bc-438d-9b86-d76a20a1de22.gif",
"https://cdn.zerotwo.dev/SAD/9dedaf77-06ed-4e56-92eb-01dd8951b359.gif",
"https://cdn.zerotwo.dev/SAD/16b55366-09b1-4128-abd1-8e786a9f1a7f.gif",
"https://cdn.zerotwo.dev/SAD/76f8a4cb-da99-4257-a1d9-17362a1e6086.gif",
"https://cdn.zerotwo.dev/SAD/fd316a94-f3cc-4819-89b3-5b25b61a1a91.gif",
"https://cdn.zerotwo.dev/SAD/99c83607-1073-4af8-b3bd-240ac4157d00.gif",
"https://cdn.zerotwo.dev/SAD/6d8cf0d1-7362-423d-82da-ba9e5d125fd6.gif",
       ]

module.exports = {
    name: 'sad',
    description: 'Üzülürsünüz',
    execute(client, message, args) {
        const kullanıcı = message.mentions.users.first()|| message.author   
        var image = Math.floor(Math.random() * images.length);
        
        let kiss_embed = new Discord.MessageEmbed()
            
            .setDescription(`**${message.author.username}** kullanıcısı **${kullanıcı.username}** üzüldü`)
            .setColor('RED')
            .setImage(String([images[image]]))

        message.channel.send(kiss_embed);
        }};








