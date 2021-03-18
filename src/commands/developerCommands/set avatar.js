const chalk = require('chalk');
module.exports = {
name: 'setavatar',
description: 'Change bots avatar.',
aliases: ['changeavatar'],
cooldown: 3,
ownerOnly:true,
async execute(yui, message, args) {
try {
message.channel.send('My profile picture successfully changed.')
yui.user.setAvatar(args[0]) 
}
catch(error) {
message.reply(`Oops! Please try again.\n\n\`\`\`${error}\`\`\``)
}

}}
