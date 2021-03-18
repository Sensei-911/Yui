const filters = ['8D', 'gate', 'haas', 'phaser', 'treble', 'tremolo', 'vibrato', 'reverse', 'karaoke', 'flanger', 'mcompand', 'pulsator', 'subboost', 'bassboost', 'vaporwave', 'nightcore', 'normalizer', 'surrounding']
module.exports = {
name: 'w-filters',
aliases: ['filters'],
execute(yui, message) {
const on_emote = '✅'
const off_emote = '❎'
if (!message.member.voice.channel) return message.channel.send(`You're not in a voice channel !`);
if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel !`);
if (!yui.player.getQueue(message)) return message.channel.send(`No music currently playing !`);
const filtersStatuses = [[], []];
filters.forEach((filterName) => {
const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (yui.player.getQueue(message).filters[filterName] ? on_emote : off_emote));
});
message.channel.send({
embed: {
color: 'ORANGE',
fields: [
{ name: 'Filters', value: filtersStatuses[0].join('\n'), inline: true },
{ name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
],
timestamp: new Date(),
description: `List of all filters enabled or disabled.\nUse \`${yui.prefix} filter\` to add a filter to a song.`,
}})}}