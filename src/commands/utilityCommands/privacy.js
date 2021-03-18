module.exports = {
name: 'privacy',
aliases: ['tos','termofservice'],
description: 'Term of Service.',
cooldown: 15,
execute(yui, message, args) {
const Discord = require("discord.js")
let privacy = new Discord.MessageEmbed()
.setTitle("Privacy Policy")
.setDescription('***Yui\'s Terms/Conditions of Use***')
.addField(`**DATA WE COLLECT FROM USERS**`,`━━━━━━━━━━━━━━━━━━━━━━━━━`)
.addField('Article 1','The names of the servers where Yui is in.')
.addField('Article 2','Data of how many times a person has been kissed/shot... (roleplay)')
.addField('Article 3','The amount of money a person earns from economy commands to be added to the yui.')
.addField('Article 4','The data of which server has chosen which prefix in the prefix replacement command to be added.')
.addField('Article 5','The data of which server has chosen which language in the language change commands to be added.')
.addField(`WHY WE COLLECT THIS DATA`,`━━━━━━━━━━━━━━━━━━━━━━━━━`)
.addField('Article 1','The data we collect in the roleplay commands will write the data of how many times this person has been kissed / shot under the embed as a footer.')
.addField('Article 2','With the data we collect in money commands, we ensure that this data is not lost when the bot restarts.')
.addField('Article 3','We are collecting the prefix data so that you do not make those settings again when we restart the bot.')
.addField('Article 4','When we restart the bot, we collect language data so that you do not make those settings again.')
.addField('Article 5','For our bot to work in a healthy way.')
.addField(`HOW WE USE THIS DATA`,`━━━━━━━━━━━━━━━━━━━━━━━━━`)
.addField(`Article 1`,`We do not have a special method of using it, so the bot will not work stably without this data, so you don't have to worry.`)
.addField(`BUT IF YOU HAVE CONCERNS YOU CAN CONTACT US`,`━━━━━━━━━━━━━━━━━━━━━━━━━`)
.addField(`Article 1`,`You can come to our support server.`)
.addField(`Article 2`,`You can directly send me dm/e-mail (kemalbinbiriki@outlook.com).`)
.addField(`Article 3`,`I will add a command to delete your data once data is being used effectively.`)
.addField(`DATA DELETION PROCESS`,`━━━━━━━━━━━━━━━━━━━━━━━━━`)
.addField(`Article 1`,`Data is deleted between 1 and 10 days.`)
.addField(`Article 2`,`The deletion of your data will be done manually, so it may take a long time.`)
.setColor("RED")
message.author.send(privacy).then(message.react('✅')).catch(() => message.reply("I can't send dm to you try open it for this server..."));

}}