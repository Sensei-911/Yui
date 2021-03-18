const filters = ['8D', 'gate', 'haas', 'phaser', 'treble', 'tremolo', 'vibrato', 'reverse', 'karaoke', 'flanger', 'mcompand', 'pulsator', 'subboost', 'bassboost', 'vaporwave', 'nightcore', 'normalizer', 'surrounding']
module.exports = {
name: 'filter',
aliases: [],
execute(yui, message, args) {
if(!message.member.voice.channel) return message.channel.send(`You're not in a voice channel !`);
if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`You are not in the same voice channel !`);
if(!yui.player.getQueue(message)) return message.channel.send(`No music currently playing !`);
if(!args[0]) return message.channel.send(`Please specify a valid filter to enable or disable !`);
const filterToUpdate = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());
if(!filterToUpdate) return message.channel.send(`This filter doesn't exist, try for example (8D, vibrato, pulsator...) !`);
const filtersUpdated = {};
filtersUpdated[filterToUpdate] = yui.player.getQueue(message).filters[filterToUpdate] ? false : true;
yui.player.setFilters(message, filtersUpdated);
if(filtersUpdated[filterToUpdate]) message.channel.send(`I'm **adding** the filter to the music, please wait... Note : the longer the music is, the longer this will take.`);
else message.channel.send(`I'm **disabling** the filter on the music, please wait... Note : the longer the music is playing, the longer this will take.`);
}}