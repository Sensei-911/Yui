const Discord = require("discord.js")
const website = ('https://yuibot.icu')

module.exports = {
name: 'website',
decription: 'Gives a link to visit the our website.',
execute(client, message, args) {
let web = new Discord.MessageEmbed()
.setTitle('Website')
.setDescription(`See some great stuffs in this page: \n${website}`)
.setColor('BLUE')
message.channel.send(web)

}}