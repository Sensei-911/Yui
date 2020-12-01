/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const Discord = require('discord.js');
var images = [
            //Zero-Two
                "https://cdn.zerotwo.dev/SHY/e18377de-69d9-4490-9276-6053cb234f82.gif",
                "https://cdn.zerotwo.dev/SHY/90c6d2b7-4e17-49dd-851d-7f2aa16609c9.gif",
                "https://cdn.zerotwo.dev/SHY/9cbffd41-cf16-4ee6-86b5-a712ffab2bc8.gif",
                "https://cdn.zerotwo.dev/SHY/ecaba0ab-50cd-47bc-91fe-6949e7f1d76d.gif",
                "https://cdn.zerotwo.dev/SHY/139a2f7d-a381-48ef-8e56-fa01eecf1301.gif",
                "https://cdn.zerotwo.dev/SHY/3f5b54ee-e054-49bd-9d78-78aa1999f130.gif",
                "https://cdn.zerotwo.dev/SHY/c6638396-747a-4aea-abf0-2d61a4d14a5b.gif",
                "https://cdn.zerotwo.dev/SHY/747bfa31-8afb-47ae-b91c-ea1083e934a3.gif",
                "https://cdn.zerotwo.dev/SHY/a52804c3-74c8-4263-a722-18ed68fa2a9e.gif",
                "https://cdn.zerotwo.dev/SHY/e79b84e1-5305-4d32-89ad-0fd7a16e5e5a.gif",
                "https://cdn.zerotwo.dev/SHY/b14e4241-386f-4d3e-b499-d5d645184215.gif",
                "https://cdn.zerotwo.dev/SHY/9cbffd41-cf16-4ee6-86b5-a712ffab2bc8.gif",
                "https://cdn.zerotwo.dev/SHY/398bccee-0281-42fb-afbe-023ee8a42045.gif",
                "https://cdn.zerotwo.dev/SHY/38832d3a-94d5-45f0-9519-d39eee0f7b1a.gif",
                "https://cdn.zerotwo.dev/SHY/d74c0e5c-50c5-43a7-a947-5ed02f0e5fc4.gif",
                "https://cdn.zerotwo.dev/SHY/4d185e6a-065c-44c4-a11b-6b0c47efeed1.gif",
]

module.exports = {
    name: 'shy',
    description: 'Utanırsınız',
    execute(client, message, args) {
        const kullanıcı = message.mentions.users.first()|| message.author   
        var image = Math.floor(Math.random() * images.length);
        
        let shy_embed = new Discord.MessageEmbed()
            
            .setDescription(`**${message.author.username}** kullanıcısı utandı **${kullanıcı.username}**`)
            .setColor('RED')
            .setImage(String([images[image]]))

        message.channel.send(shy_embed);
        }};








