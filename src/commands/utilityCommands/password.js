module.exports = {
name: "password",
description: "Create random passwords",
cooldown: 2,
permissions: ["addReactions"],
async execute(Yui, message, args) {
const generator = require('generate-password');
const password = generator.generate({ length: 15, numbers: true });
const guild = await Yui.getRESTGuild(message.guildID)
const userDM = await Yui.getDMChannel(message.author.id)
userDM.createMessage({ embed: { title: 'Password Generator', description: `Your password is \`${password}\``, footer: { text: `Command DM From the server ${guild.name}`}, color: 0x0ffff }}).then(Yui.addMessageReaction(message.channel.id, message.id, '✅'))
}}