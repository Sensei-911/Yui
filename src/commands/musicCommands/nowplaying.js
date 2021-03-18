const filters = ['8D', 'gate', 'haas', 'phaser', 'treble', 'tremolo', 'vibrato', 'reverse', 'karaoke', 'flanger', 'mcompand', 'pulsator', 'subboost', 'bassboost', 'vaporwave', 'nightcore', 'normalizer', 'surrounding']
module.exports = {
name: 'nowplaying',
aliases: ['np'],
execute(yui, message) {
if(!message.member.voice.channel) return message.channel.send(`You're not in a voice channel !`);
if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel !`);
if (!yui.player.getQueue(message)) return message.channel.send(`No music currently playing !`);
const track = yui.player.nowPlaying(message);
const filters = [];
Object.keys(yui.player.getQueue(message).filters).forEach((filterName) => yui.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;
message.channel.send({
embed: {
color: 'RED',
author: { name: track.title },
fields: [
{ name: 'Channel', value: track.author, inline: true },
{ name: 'Requested by', value: track.requestedBy.username, inline: true },
{ name: 'From playlist', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

{ name: 'Views', value: track.views, inline: true },
{ name: 'Duration', value: track.duration, inline: true },
{ name: 'Filters activated', value: filters.length + '/' + filters.length, inline: true },

{ name: 'Volume', value: yui.player.getQueue(message).volume, inline: true },
{ name: 'Repeat mode', value: yui.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
{ name: 'Currently paused', value: yui.player.getQueue(message).paused ? 'Yes' : 'No', inline: true },

{ name: 'Progress bar', value: yui.player.createProgressBar(message, { timecodes: true }), inline: true }
],
thumbnail: { url: track.thumbnail },
timestamp: new Date(),
}})}}