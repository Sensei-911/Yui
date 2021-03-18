module.exports = {
name: 'ship',
aliases: ["love"],
description: 'Measures how much someone loves you',
execute(yui, message, args) {
const loveTarget = message.mentions.users.first() || message.author
const lovePercent = Math.random() * 100;
const loveIndex = Math.floor(lovePercent / 10);
const loveLevel = '💖'.repeat(loveIndex) + '💔'.repeat(10 - loveIndex)

if(!args[0] || message.mentions.users.first() == message.author) {
message.channel.send({embed: { fields: [{ name: `${message.author.username} loves itself that much:`, value: `💟 ${Math.floor(lovePercent)}%\n\n${loveLevel}`}], color: '#00FFFF'}})
}
else if (message.mentions.users.first()) {
message.channel.send({embed: { fields: [{ name: `${message.author.username} loves ${loveTarget.username} that much:`, value: `💟 ${Math.floor(lovePercent)}%\n\n${loveLevel}`}], color: '#00FFFF'}})
}
else {
message.channel.send({embed: { fields: [{ name: `${message.author.username} loves itself that much:`, value: `💟 ${Math.floor(lovePercent)}%\n\n${loveLevel}`}], color: '#00FFFF'}})
}
}}
