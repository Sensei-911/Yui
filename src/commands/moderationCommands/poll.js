module.exports = {
name: "poll",
permissions: ['manageMessages', 'sendMessages', 'embedLinks'],
memberPermissions: ['administrator'],
async execute(Yui, message, args, ) {
const pollMessage = args.slice(0).join(' ');
if (pollMessage.length < 1) return message.channel.createMessage("Please enter your message to vote.")
if (pollMessage.length > 50) return message.channel.createMessage("Do not exceed the 50 character limit!")
Yui.deleteMessage(message.channel.id, message.id, 'Poll Message')

const misc = require('../../utils/misc.js')

const msg = await message.channel.createMessage({ embed: { author: { name: 'Poll', icon_url: 'https://images-ext-2.discordapp.net/external/zFuxIUt7MUY7Mu7nbT-kOq9S5KcXmpdoBZfvNVcI0Ow/https/cdn.koya.gg/utilities/poll.jpg' }, description: `**${pollMessage}**\n\n👍 Yes\n\n👎 No`, footer: { text: Yui.user.username, icon_url: Yui.user.avatarURL }, timestamp: new Date(), color: 0x0ffff }}).then(a => {
misc.react('👍', '👎', a)
})

}}