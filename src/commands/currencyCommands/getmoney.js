const { MessageEmbed } = require("discord.js");
const economy = require('../../utils/dbFunctions')
const rn = require('random-number')

module.exports = {
name: 'randommoney',
aliases: ['getmoney'],
description: 'Get your daily coins!',
cooldown: 10,
async execute(yui, message,args) {  

const coinsCalculate = ({ min: 200, max: 500, integer: true })
const coins = rn(coinsCalculate)
const moneyEmbed = new MessageEmbed()
.setTitle(`Here are your coins, ${message.author.username}`)
.setColor('#66FF00')
.setDescription(`**__${coins}__ coins** was placed in your wallet!`);
message.channel.send(moneyEmbed)
await economy.addCoins(message.guild.id, message.author.id, coins)
}

}