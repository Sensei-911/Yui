module.exports = {
name: 'reboot',
aliases: ['restart'],
permissions:["sendMessages"],
recovery: true,
ownerOnly:true,
async execute(Yui, message, args) {
await message.channel.createMessage('Rebooting this cluster...')
await process.exit(1);
}}