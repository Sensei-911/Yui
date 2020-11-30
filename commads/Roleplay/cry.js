const Discord = require('discord.js');
var images = [
"https://cdn.zerotwo.dev/CRY/df8f1f99-10bb-4fe0-89c3-1bf66fc51bb8.gif",
"https://cdn.zerotwo.dev/CRY/0082dcf7-7856-4ca2-a80d-83e04d3dce38.gif",
"https://cdn.zerotwo.dev/CRY/5e7dee35-0e88-4769-86ec-dfdd3c3f70b5.gif",
"https://cdn.zerotwo.dev/CRY/80593a71-a91c-4bd0-8523-c04d27a43789.gif",
"https://cdn.zerotwo.dev/CRY/ffceebc6-39b5-488b-a1cb-4e9735ad66e1.gif",
"https://cdn.zerotwo.dev/CRY/403b09c4-51c1-48df-a2db-4c8cc602071a.gif",
"https://cdn.zerotwo.dev/CRY/ecd02327-14be-4c8a-8851-532e909e9400.gif",
"https://cdn.zerotwo.dev/CRY/c68b8db2-0a35-486a-a3e1-5ab0deb1893d.gif",
"https://cdn.zerotwo.dev/CRY/6626ce08-2ce2-4c56-b1a1-5e64709281ce.gif",
"https://cdn.zerotwo.dev/CRY/ebb4058b-4b8f-44e2-8705-c5f843a6a5bf.gif",
"https://cdn.zerotwo.dev/CRY/97bdb2d1-4b0a-419b-ab29-7f2567eebf9d.gif",
"https://cdn.zerotwo.dev/CRY/8ab10637-83fd-4716-8607-61a81153ade8.gif",
"https://cdn.zerotwo.dev/CRY/f689aae4-4c55-4c94-9cd9-e41569ccf738.gif",
"https://cdn.zerotwo.dev/CRY/8e93496f-c6f5-4676-9003-d387c7b9e78c.gif",
"https://cdn.zerotwo.dev/CRY/2b50e469-fcf2-41a4-9ff1-d02838968ebc.gif",
"https://cdn.zerotwo.dev/CRY/5a646f81-8284-440e-95fe-b8254965bbc9.gif",
"https://cdn.zerotwo.dev/CRY/7914ed96-1d57-40f0-9b19-266e1dcae465.gif",
"https://cdn.zerotwo.dev/CRY/3240b8cf-3b4d-4cc6-89ed-04a64401c040.gif", 
"https://cdn.zerotwo.dev/CRY/6c96ed30-bcb5-4cc3-ad72-85e6555820a6.gif",
"https://cdn.zerotwo.dev/CRY/c21386af-09c4-47ae-b5a3-de385d677fe4.gif", 
"https://cdn.zerotwo.dev/CRY/c6545e9b-d291-4d86-b384-9efaba3daf08.gif",
"https://cdn.zerotwo.dev/CRY/d83b7768-541b-46c4-b2e5-c76dca269368.gif",
"https://cdn.zerotwo.dev/CRY/03c0d9d6-93d8-42f1-802d-354419817d60.gif",
"https://cdn.zerotwo.dev/CRY/a71b548a-f621-4f0e-bcac-039c1014ecaf.gif",

"https://media1.tenor.com/images/ce52606293142a2bd11cda1d3f0dc12c/tenor.gif",
"https://media1.tenor.com/images/4f22255d60f3f19edf9296992b4e3483/tenor.gif",
"https://media1.tenor.com/images/8f6da405119d24f7f86ff036d02c2fd4/tenor.gif",
"https://media1.tenor.com/images/7ef999b077acd6ebef92afc34690097e/tenor.gif",
"https://media1.tenor.com/images/b0f4b5f158e8a964adbabd048fb9e556/tenor.gif",
"https://media1.tenor.com/images/6e47929917ceb22efc613c381bfcd928/tenor.gif",
"https://media1.tenor.com/images/0dd358d29b8eb3a3349d073b7b75b85b/tenor.gif",
"https://media.tenor.com/images/70b0852747ed7427ba8d73d1115b968f/tenor.gif",
"https://media1.tenor.com/images/03d0a83ff1101c24b9ee9652d31ac2c9/tenor.gif",
"https://media1.tenor.com/images/d22d5b7c7face2349bcc3c272e3430a7/tenor.gif",
]

module.exports = {
    name: 'cry',
    description: 'Ağlarsınız.',
    execute(client, message, args) {
        const kullanıcı = message.mentions.users.first()|| message.author
        var image = Math.floor(Math.random() * images.length);
        
        let kiss_embed = new Discord.MessageEmbed()
            
            .setDescription(`**${message.author.username}** kullanıcısı ağlıyor **${kullanıcı.username}**`)
            .setColor('RED')
            .setImage(String([images[image]]))

        message.channel.send(kiss_embed);
        }};








