module.exports = {
name: 'vote',
description: 'Gives a link to vote the bot.',
cooldown: 1,
execute(yui, message, args) {
message.channel.send({ embed: { description: "**Vote for me** - [Top.gg](https://top.gg/bot/760244924188327977)", color: '#00FFFF'}})
}}