/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json");
const client = new Client({ disableMentions: "everyone"});
const cooldowns = new Collection();
const fs = require("fs");
const mongoose = require('mongoose');

const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
require('./utils/eventHandler.js')(client);

client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
client.mongoose = require("./utils/mongoose");
client.mongoose.init();
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
client.on("warn", (info) => console.log(info));
client.on("error", console.error);
client.on('error', error => {console.error('WebSocket bir hatayla karşılaştı:', error)});
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
fs.readdirSync('./commands').forEach(dir => {
const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
const command = require(`./commands/${dir}/${file}`);
client.commands.set(command.name, command)}})
client.on("message", async (message) => {
if (message.author.bot) return;
if (!message.guild) return;

const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
if (!prefixRegex.test(message.content)) return;

const [matchedPrefix] = message.content.match(prefixRegex);
const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
const commandName = args.shift().toLowerCase();

const command =
client.commands.get(commandName) ||
client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
if (!command) return;

if (!cooldowns.has(command.name)) {
cooldowns.set(command.name, new Collection())}

const now = Date.now();
const timestamps = cooldowns.get(command.name);
const cooldownAmount = (command.cooldown || 1) * 1000;

if (timestamps.has(message.author.id)) {
const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

if (now < expirationTime) {
const timeLeft = (expirationTime - now) / 1000;
return message.channel.send(`⏱ | **${message.author.username}**! Lüften **${timeLeft.toFixed(1)} saniye** bekleyin ve tekrar deneyin!`).then(b =>{b.delete({timeout:5000})})}}
timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
try {
  command.execute(client, message, args);} 
catch (error) {
console.error(error);
message.channel.send(`🚫 | **${message.author.username}**! Bu komutu uygularken hata alıyorum.`).then(a =>{a.delete({timeout:5000})}).catch(console.error);

}});
