module.exports = (Yui, message, args) => {

const Eris = require("eris");
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
const cooldowns = new Eris.Collection();
const config = require('../config.json');
const db = require('../utils/dbFunctions.js')

Yui.on("messageCreate", async (message) => {
if(message.author.bot || message.channel.type == 1) return;
if(message.content == `<@!${Yui.user.id}>`) message.channel.createMessage(`My prefix is \`${await db.getPrefix(message.guildID)}\``)

const prefixRegex = new RegExp(`^(<@!?${Yui.user.id}>|${escapeRegex(await db.getPrefix(message.guildID))})\\s*`)

if(!prefixRegex.test(message.content.toLowerCase())) return;
const [matchedPrefix] = message.content.toLowerCase().match(prefixRegex);

var args = message.content.slice(matchedPrefix.length).trim().split(/ +/)

const commandName = args.shift().toLowerCase();
const command = Yui.commands.get(commandName) || Yui.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
if (!command) return;

if (!cooldowns.has(command.name)) {

cooldowns.set(command.name, new Eris.Collection())}
const now = Date.now();
const timestamps = cooldowns.get(command.name);
const cooldownAmount = (command.cooldown || 1) * 1000;
if (timestamps.has(message.author.id)) {
const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
if (now < expirationTime) {
const timeLeft = (expirationTime - now) / 1000;
return message.channel.createMessage({ embed: { title: 'Slow Down', description: `This command can be used again in **${timeLeft.toFixed(1)}** second`, color: 0xff0000 }})}}
timestamps.set(message.author.id, now);
setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

const permGifs = require('../assets/json/arrays.json')

if(command.permissions) {
let channelPerms = message.channel.permissionsOf(Yui.user.id);
for(let i in command.permissions) {
if(!channelPerms.has(command.permissions[i])){
if(channelPerms.has("sendMessages") && channelPerms.has("readMessages")) 
if(channelPerms.has("embedLinks")) {
message.channel.createMessage ({ embed: { title: 'Not Enough Permission', description: `I do not have the ${command.permissions[i]} permission!`, color: 0xff0000 , image: { url: permGifs.perms[command.permissions[i]] }}})
}
if(!channelPerms.has("embedLinks")) {
message.channel.createMessage(`I do not have the **${command.permissions[i]}** permission!`)
}
return;
}}}

if(command.memberPermissions) {
let channelPerms = message.channel.permissionsOf(message.author.id);
for(let i in command.memberPermissions){
if(!channelPerms.has(command.memberPermissions[i])){
message.channel.createMessage(`You need the \`${command.memberPermissions[i]}\` permission to use this command!`);
return;
}}}

let channelPerms = message.channel.permissionsOf(Yui.user.id);

if(command.recovery) return message.channel.createMessage(`This command is __incomplete__ please try again later.`)
if(command.ownerOnly && message.author.id != config.author) return
if(command.isNSFW && !message.channel.nsfw) {
if (channelPerms.has('embedLinks')) message.channel.createMessage ({'embed': { title: 'NSFW not allowed here', description: 'Use NSFW commands in a NSFW marked channel!', color: 0xff0000 , image: { url: permGifs.perms.nsfw }}})
else if (!channelPerms.has('embedLinks')) message.channel.createMessage ('Use NSFW commands in a NSFW marked channel!')
return
}

try {
command.execute(Yui, message, args)
}
catch (error) {
let logger = require('../utils/logger.js')
logger.error(error)
message.channel.createMessage(`An error happened while executing this command if this happens again please come to our support server (<https://discord.gg/pVAQPq79uQ>)`)
}

})}