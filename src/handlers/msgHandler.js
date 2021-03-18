module.exports = (yui, message, args) => {

const Discord = require("discord.js");
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
const cooldowns = new Discord.Collection();
const config = require('../secrets/config.json');

yui.on("message", async (message) => {
if(message.author.bot || !message.guild) return;
if(message.content == `<@!${yui.user.id}>`) message.channel.send(`**My prefix here is** \`${yui.prefix}\``)
    
const prefixRegex = new RegExp(`^(<@!?${yui.user.id}>|${escapeRegex(config.prefix)})\\s*`)
if(!prefixRegex.test(message.content.toLowerCase())) return;
const [matchedPrefix] = message.content.toLowerCase().match(prefixRegex);
    
const args = message.content.slice(matchedPrefix.length).trim().split(/ +/)
  
const commandName = args.shift().toLowerCase();
const command = yui.commands.get(commandName) || yui.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
if (!command) return;
    
if (!cooldowns.has(command.name)) {
    
if(command.recovery) return message.channel.send(`This command is __incomplete__ please try again later.`)
if(command.ownerOnly && message.author.id != config.author) return

cooldowns.set(command.name, new Discord.Collection())}
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
    
try {
command.execute(yui, message, args)
}
catch (error) {
console.log(error)
message.reply(`Opps! Please try again later.`).then(msg => { msg.delete({ timeout:10000 })})
     
}});

}