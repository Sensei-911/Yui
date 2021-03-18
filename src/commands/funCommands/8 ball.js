module.exports = {
name: '8ball',
aliases: ["8b"],
description: 'Answers your questions.',
execute(yui, message, args) {
var answers = ["Hai","Of course","Maybe","Why not","I do not know","it is not clear","Could be","If you say so","Of course yes","Of course not","Ask again later","It should be like that","Hai onii-sama", "I don't know right now","Yus","Nope","Yup"]
let sekizball_mesaj = args.slice(0).join(' ');
if (sekizball_mesaj.length < 1) return message.channel.send(`**${message.author.username}** You need to ask a question.`)
var answer = answers[Math.floor(Math.random()*(answers.length))]
message.channel.send(`🎱 **| ${message.author.username} asked:** ${sekizball_mesaj}\n💨 **| Answer:** ${answer}`)

}}