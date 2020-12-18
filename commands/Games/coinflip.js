const Discord = require('discord.js');

module.exports = {
    name: 'coinflip',
    description: 'Heads or Tails.',
    aliases: ["cf","coinflip"],
    execute(client, message, args) {
     var mesajlar_cf = ["Heads","Tails"];
     var mesajlar_cf_random = Math.floor(Math.random() * mesajlar_cf.length);
     message.channel.send(`Here is the winner: **${mesajlar_cf[mesajlar_cf_random]}**`);
}};




