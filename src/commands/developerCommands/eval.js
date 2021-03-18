const Discord = require('discord.js')
const channel_id = ('783163192712364033')
module.exports = {
name: 'eval',
aliases: ['try'],
description: 'Try commands.',
ownerOnly:true,
execute(yui, message, args) {
if(message.channel.id != channel_id) return 
try {
var code = args.join(" ");
var evaled = eval(code);
if (typeof evaled !== "string")
evaled = require("util").inspect(evaled);
let Embed = new Discord.MessageEmbed()
.addField("Code","```js\n" + code + "```")
.setDescription("```js\n" + clean(evaled) + "```")
if (Embed.description.length >= 2048)
Embed.description = Embed.description.substr(0, 2042) + "```...";
return message.channel.send(Embed)
} catch (err) {
message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
}
function clean(text) {
if (typeof(text) === "string")
return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
else
return text;
}
}}