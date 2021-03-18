module.exports = {
name: 'play',
aliases: ['p'],
execute(yui, message, args,track) {
if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel !`);
if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel !`);
if (!args[0]) return message.channel.send(`Please indicate the title of a song !`);
yui.player.play(message, args.join(" "), { firstResult: true });
}}