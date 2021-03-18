const chalk = require('chalk');
module.exports = {
name: 'setname',
description: 'Change bots name.',
aliases: ['changename'],
cooldown: 3,
ownerOnly:true,
async execute(yui, message, args) {
try {
let botName = args.slice(0).join(' ');
message.channel.send('My name is successfully changed.')
yui.user.setUsername(botName)
}
catch (e) {
message.reply(`Oops! Please try again.\n\`\`\`${error}\`\`\``)
}
}}