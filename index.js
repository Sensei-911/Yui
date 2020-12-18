//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const { Discord, Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json");
const fs = require("fs");
const mongoose = require('mongoose');
const client = new Client({ disableMentions: "everyone"});
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
const chalk = require('chalk');
require('./utils/eventHandler.js')(client);
client.login(TOKEN)
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
client.mongoose = require("./utils/mongoose");
client.mongoose.init();
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
client.on("warn", (info) => console.log(info));
client.on("error", console.error);
client.on('error', error => {console.error('WebSocket bir hatayla karşılaştı:', error)})
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
client.on("guildCreate", guild => {console.log(chalk.bold.green(`==============================================================================\nSunucuya Eklendim\nSunucu Bilgileri: ${guild.name} (${guild.id})\nÜye Sayısı:${guild.memberCount}\n==============================================================================`))})
client.on("guildDelete", guild => {console.log(chalk.bold.red(`==============================================================================\nSunucudan Atıldım\nSunucu Bilgileri: ${guild.name} (${guild.id})\nÜye Sayısı:${guild.memberCount}\n==============================================================================`))})
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
return message.channel.send(`⏱ | **${message.author.username}**! Please wait **${timeLeft.toFixed(1)}s** and try again!`).then(b =>{b.delete({timeout:5000})})}}
timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
try {
  command.execute(client, message, args)} 
catch (error) {
console.log(error)
message.channel.send(`🚫 | **${message.author.username}**! I get an error with this command.`).then(a =>{a.delete({timeout:5000})}).catch(console.error);
}});