module.exports = {
name: 'vote',
description: 'Gives a link to vote the bot.',
cooldown: 2,
permissions: ["sendMessages", "embedLinks"],
execute(Yui, message, args) {
message.channel.createMessage({ embed: { title: "Vote For Yui", description: "[top.gg](https://top.gg/bot/760244924188327977/vote) - [discord.boats](https://discord.boats/bot/760244924188327977/vote)", footer: { text: `${message.author.username}, you can vote every 12 hours!` }, color: 0x0ffff }})
}}