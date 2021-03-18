module.exports = {
name: 'loop',
aliases: ['lp', 'repeat'],
execute(yui, message, args) {
if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel !`);
if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel !`);
if (!yui.player.getQueue(message)) return message.channel.send(`No music currently playing !`);
if (args.join(" ").toLowerCase() === 'queue') {
if (yui.player.getQueue(message).loopMode) {
yui.player.setLoopMode(message, false);
return message.channel.send(`Repeat mode **disabled** !`);
} else {
yui.player.setLoopMode(message, true);
return message.channel.send(`Repeat mode **enabled** the whole queue will be repeated endlessly !`);
}} else {
if (yui.player.getQueue(message).repeatMode) {
yui.player.setRepeatMode(message, false);
return message.channel.send(`Repeat mode **disabled** !`);
} else {
yui.player.setRepeatMode(message, true);
return message.channel.send(`Repeat mode **enabled** the current music will be repeated endlessly !`);
}}}}