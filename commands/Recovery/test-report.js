const Discord = require('discord.js');
const { mongoose } = require('mongoose');
module.exports = {
    name: 'report',
    description: 'Send reports.',
    async execute(client, message, args) {
    await message.delete();
    if(message.author.id != '22') return;
    let rUser = message.mentions.members.first();
    if(!rUser) return message.reply("Can't find that member.");
    let rreason = args.slice(1).join(' ');
    if(!rreason) return message.reply("Please supply a reason."); 

const report = new Report({
    _id: mongoose.Types.ObjectId(),
    username: rUser.user.username,
    userID: rUser.id,
    reason: rreason,
    rUsername: message.author.username,
    rID: message.author.id,
    time: message.createdAt,
});

report.save()
.then(result => console.log(result))
.catch(err => console.log(err));

message.reply("That report has been saved to database!")

}}