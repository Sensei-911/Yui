module.exports = {
name: 'write',
aliases: ['say'],
description: 'Write what you say.',
execute(yui, message, args) {
let write_mesaj = args.slice(0).join(' ');
if (write_mesaj.length < 1) return message.reply("Give me some args.")
message.delete()
message.channel.send(`${write_mesaj}\n\n- ${message.author.tag}`);

}}