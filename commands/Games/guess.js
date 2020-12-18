const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
module.exports = {
name: 'guess',
description: 'Guess randomly selected numbers.',
async execute(client, message, args) {
this.games = new Set();
if(this.games.has(message.channel.id)) await message.reply('Only one duel can occur per channel.');
const islem = Math.floor(Math.random() * (100 - 1)) + 1
const fixedlisonuç = islem
let choice;
let haklar = 10
await message.react('👌')
this.games.add(message.channel.id);
await message.channel.send(stripIndents`\n${message.author}, Guess the number Between 0 and 100\n\`${rights}\`You have the right to try.`);
let uwu = false;
while (!uwu && haklar !== 0) {
const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 15000 });
if(!response.first()) { 
this.games.delete(message.channel.id);
message.channel.send(`${message.author}, Unfortunately! Time is up!`)
message.channel.send(`${message.author}, 🤷 You lost! Number: \`${fixedlisonuç}\` 🤷`)}              
const choice = response.first().content
if(isNaN(choice)) {
continue;
}
if (choice !== fixedlisonuç)  {
haklar -= 1
if(fixedlisonuç > choice) {
await message.channel.send(stripIndents`\n${message.author}, 🔺 You have to say bigger number!\nYou have\`${haklar}\`attempts.`);
continue;
}
if(fixedlisonuç < choice) {
await message.channel.send(stripIndents`\n${message.author}, 🔻 You have to say a smaller number!\n\You have\`${haklar}\`attempts.`);
continue;
}}
if (choice == fixedlisonuç) {
uwu = true
}}
if (haklar == 0) {
this.games.delete(message.channel.id);
await message.channel.send(`${message.author}, 🤷 You lost! Number: \`${fixedlisonuç}\` 🤷`)
}
if (uwu) {
this.games.delete(message.channel.id);
await message.channel.send(`${message.author}, 🎉 Right guess! Number: \`${fixedlisonuç}\` 🎉`)
try {
} catch(e) {
this.games.delete(message.channel.id);
message.channel.send('Something went wrong')
}} else {
this.games.delete(message.channel.id);
return console.log('Something went wrong')
}

}}