/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const Discord = require('discord.js');
var images = [
    //Tenor
            "https://media1.tenor.com/images/78d3f21a608a4ff0c8a09ec12ffe763d/tenor.gif",
            "https://media1.tenor.com/images/5ccc34d0e6f1dccba5b1c13f8539db77/tenor.gif",
            "https://media1.tenor.com/images/4db088cfc73a5ee19968fda53be6b446/tenor.gif",
            "https://media1.tenor.com/images/1d94b18b89f600cbb420cce85558b493/tenor.gif",
            "https://media1.tenor.com/images/506aa95bbb0a71351bcaa753eaa2a45c/tenor.gif",
            "https://media1.tenor.com/images/6db54c4d6dad5f1f2863d878cfb2d8df/tenor.gif",
            "https://media1.tenor.com/images/e9d7da26f8b2adbb8aa99cfd48c58c3e/tenor.gif",
            "https://media1.tenor.com/images/9dddcb8d880010200af468d781b4bbcd/tenor.gif",
            "https://media1.tenor.com/images/4d89d7f963b41a416ec8a55230dab31b/tenor.gif",
            "https://media1.tenor.com/images/969f0f462e4b7350da543f0231ba94cb/tenor.gif",
            "https://media1.tenor.com/images/5845f40e535e00e753c7931dd77e4896/tenor.gif",
            "https://media1.tenor.com/images/94989f6312726739893d41231942bb1b/tenor.gif",
            "https://media1.tenor.com/images/1069921ddcf38ff722125c8f65401c28/tenor.gif",
            "https://media1.tenor.com/images/4e9c3a6736d667bea00300721cff45ec/tenor.gif",
            "https://media1.tenor.com/images/f5df55943b64922b6b16aa63d43243a6/tenor.gif",
            "https://media1.tenor.com/images/af76e9a0652575b414251b6490509a36/tenor.gif",
            "https://media1.tenor.com/images/7e30687977c5db417e8424979c0dfa99/tenor.gif",
            "https://media1.tenor.com/images/daffa3b7992a08767168614178cce7d6/tenor.gif",
            "https://media1.tenor.com/images/7db5f172665f5a64c1a5ebe0fd4cfec8/tenor.gif",
            "https://media1.tenor.com/images/e58eb2794ff1a12315665c28d5bc3f5e/tenor.gif",
            "https://media1.tenor.com/images/b77fd0cfd95f89f967be0a5ebb3b6c6a/tenor.gif",
            "https://media1.tenor.com/images/c1058ebe89313d50dfc878d38630036b/tenor.gif",
            "https://media1.tenor.com/images/f9c540c2b5cdb52f22ed835478b0a36f/tenor.gif",
            "https://media1.tenor.com/images/18474dc6afa97cef50ad53cf84e37d08/tenor.gif",
            "https://media1.tenor.com/images/34a1d8c67e7b373de17bbfa5b8d35fc0/tenor.gif",
            "https://media1.tenor.com/images/460c80d4423b0ba75ed9592b05599592/tenor.gif",
            "https://media1.tenor.com/images/c7efda563983124a76d319813155bd8e/tenor.gif",
            "https://media1.tenor.com/images/203df2c2d6288d8c73fd56b1e2da559e/tenor.gif",
            "https://media1.tenor.com/images/3ee30e7a472efe430502d08b993dc79b/tenor.gif",
            "https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif",
            "https://media1.tenor.com/images/c2156769899d169306d16b063a55d0b2/tenor.gif",
            "https://media1.tenor.com/images/42922e87b3ec288b11f59ba7f3cc6393/tenor.gif",
            "https://media1.tenor.com/images/b62f047f8ed11b832cb6c0d8ec30687b/tenor.gif",
            "https://media1.tenor.com/images/3ce31b15c2326831a8de9f0b693763ff/tenor.gif",
            "https://media1.tenor.com/images/228cc8397577141822195070c88f6083/tenor.gif",
            "https://media1.tenor.com/images/074d69c5afcc89f3f879ca473e003af2/tenor.gif",
            "https://media.tenor.com/images/b85d5651a8630fd86496bfc5d54064ec/tenor.gif",
            "https://media.tenor.com/images/b85d5651a8630fd86496bfc5d54064ec/tenor.gif",
            "https://media.tenor.com/images/b5bc982d3a21d3bf765e6f69db5af360/tenor.gif",
            "https://media.tenor.com/images/8d33eeee359d0453de52c5779dd23c46/tenor.gif",
            "https://media1.tenor.com/images/a2b938d651a8f6b89ed4c02f9f8c13ed/tenor.gif",
            "https://media1.tenor.com/images/44b4b9d5e6b4d806b6bcde2fd28a75ff/tenor.gif",
            "https://media1.tenor.com/images/949d3eb3f689fea42258a88fa171d4fc/tenor.gif",
            "https://media.tenor.com/images/8b04ee9611ce4dd032fedc7a0ff03429/tenor.gif",
            "https://media.tenor.com/images/6b371d1268accf30a8afe15d63f977e0/tenor.gif",
            "https://media.tenor.com/images/49dc9058b390fcec0a9ebbe71a2f82af/tenor.gif",
            "https://media.tenor.com/images/7a6c91842f8b2871ecf5234bcd095da7/tenor.gif",
            "https://media.tenor.com/images/2ad519eeb2d1f1158107f731779ee328/tenor.gif",
            "https://media.tenor.com/images/a5e4ed2d6754cdb7a953b95a52bf9f9b/tenor.gif",
            "https://media.tenor.com/images/cee298437607d7b123bc9664c9ce844b/tenor.gif",
            "https://media.tenor.com/images/735539df8adc6335bcf9b03695bfc098/tenor.gif",
            "https://media.tenor.com/images/8c39fcbbef6d5332ad0e44e6346bb7ac/tenor.gif",
            "https://media.tenor.com/images/3f6b2e849c2893e294a2453b6c64ca31/tenor.gif",
            "https://media.tenor.com/images/d1797be89f272743c251e93fb01ce6bd/tenor.gif",
            "https://media.tenor.com/images/2b8ca53acdc528615161cb2a0746099e/tenor.gif",
            "https://media.tenor.com/images/ead7f5a1a7f5b4937eb9699413de3716/tenor.gif",
            "https://media.tenor.com/images/6468d15b99be8cf1813f87855ee40ce8/tenor.gif",
            "https://media.tenor.com/images/45b995cd58a6b271d6abcf80b2a4e2e8/tenor.gif",
            "https://media.tenor.com/images/b794178550be46608fab1db59e71df85/tenor.gif",
            "https://media.tenor.com/images/d9097280bca9a05a02e441ff0eb69511/tenor.gif",
            "https://media.tenor.com/images/f1cf45b04a9e32f13f6a58df28c02552/tenor.gif",

        ]

module.exports = {
    name: 'hug',
    description: 'Birine sarılırsınız.',
    execute(client, message, args) {
        const kullanıcı = message.mentions.users.first()|| message.author
        var image = Math.floor(Math.random() * images.length);
        
        let kiss_embed = new Discord.MessageEmbed()
            
            .setDescription(`**${message.author.username}** kullanıcısı **${kullanıcı.username}** kişisine sarıldı !`)
            .setColor('RED')
            .setImage(String([images[image]]))

        message.channel.send(kiss_embed);
        }};








