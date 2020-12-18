const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
moment.locale('tr');
const ms = require('ms');

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
}

module.exports = {
    name: 'yazkazan',
    description: 'Etiketlenen kişinin avatarını veren komut',
    execute(client, message, args) {
try {
  return

const filter = m => m.author.id == message.author.id;
message.channel.send('Kelimen geliyor!').then(async s => { 
let kelimeler = ['chimp', 'kraldır', 'aksini', 'iddia', 'eden', 'kaşardır'];

data.set(`kelime.${message.author.id}.${message.guild.id}`, kelimeler.random());
const kelime = await data.fetch(`kelime.${message.author.id}.${message.guild.id}`);

message.channel.send(`Kelimen hazır ${message.author}!\nHızlıca **${kelime.toString()}** yaz!`).then(() => {      
s.delete({timeout: 10000})
message.channel.awaitMessages(filter, { maxMatches: 1, time: 0, errors: ['time'] }).then(collected => {
if(collected.first().content === kelime) {

  data.delete(`kelime.${message.author.id}.${message.guild.id}`);
  return message.channel.send(`Doğru kelime! Çok hızlısın! (${moment(Date.now()-s.createdTimestamp).format('ss.SSS').slice(0).toString().replace('0', '')} saniye)`)

} else {

data.delete(`kelime.${message.author.id}.${message.guild.id}`);
return message.channel.send('Yanlış kelime, oyun bitti!'); 

}


})})
  
})
  } catch(err) { return; }    
}}