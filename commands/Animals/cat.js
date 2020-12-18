const Discord = require('discord.js');
const axios = require('axios')

module.exports = {
name: 'cat',
description: 'Sends random cat picture.',
cooldown: 5,
async execute(client, message, args) {
axios
.get('https://api.thecatapi.com/v1/images/search')
.then((res) => {
message.channel.send({ files: [res.data[0].url]});  

})}}