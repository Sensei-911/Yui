module.exports = {
name: 'resume',
execute(yui, message) {
if(!message.member.voice.channel) return message.channel.send(`You're not in a voice channel !`);
if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel !`);
if(!yui.player.getQueue(message)) return message.channel.send(`No music currently playing !`);
if(!yui.player.getQueue(message).paused) return message.channel.send(`The music is already playing !`);
yui.player.resume(message);
message.channel.send(`Song ${yui.player.getQueue(message).playing.title} resumed !`);
}}