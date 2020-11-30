const Discord = require('discord.js');

module.exports = {
    name: 'cf',
    description: 'Yazı-Tura yaparsınız.',
    execute(client, message, args) {
        var mesajlar_cf = ["Tura", "Yazı","Dik Durdu"];
        var mesajlar_cf_random = Math.floor(Math.random() * mesajlar_cf.length);
            message.channel.send(`İşte Kazanan: **${mesajlar_cf[mesajlar_cf_random]}**`);
        }};




