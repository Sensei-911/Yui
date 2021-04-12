module.exports = {
name: 'say',
permissions:["sendMessages"],
cooldown: 3,
execute(Yui, message, args) {
const sayMessage = args.slice(0).join(' ');
if (!args[0]) return message.channel.createMessage('What do you want me to say?')
message.channel.createMessage(`${sayMessage}\n\n- **${message.author.username}#${message.author.discriminator}**`);

}}