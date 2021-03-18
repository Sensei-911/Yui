module.exports = (yui, message, track) => {
message.channel.send(`Now playing ${track.title} in ${message.member.voice.channel.name}`);
};