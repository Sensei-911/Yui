 /*
client.user.setStatus("idle")
dnd,idle,online,ofline
WATCHING,LISTENING,PLAYING
*/

const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { PREFIX } = require('../config.json')
const { shard } = require('discord.js');
//----------------------------------------------

module.exports = client => {
  client.user.setPresence({ activity: {type:"LISTENING" , name: `${PREFIX}help | ${client.guilds.cache.size} servers | ${client.users.cache.size} members | Beta 1.2`}, status: 'online' })
  
}

