module.exports = {
name: 'clearqueue',
aliases: ['cq'],
execute(yui, message) {
if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel !`);
if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel !`);
if (!yui.player.getQueue(message)) return message.channel.send(`No music currently playing !`);
if (yui.player.getQueue(message).tracks.length <= 1) return message.channel.send(`There is only one song in the queue.`);
yui.player.clearQueue(message);
message.channel.send(`The queue has just been **removed** !`);

}};