module.exports = (Yui) => {
const config = require('../config.json')
const logger = require('../utils/logger.js')
const logo = require('asciiart-logo');

Yui.on('ready', async () => {
Yui.editStatus('online', { name: 'yui help | yuibot.icu', type: 0 }) 
console.log(logo({ name: 'Discord Yui', font: 'Big', lineChars: 15, padding: 5, margin: 2 }).emptyLine().right(`Yui v2.3.5`).emptyLine().render())
logger.info('Event Handler', 'Boot success!')
})

Yui.on('guildCreate', async (guild) => { 
Yui.executeWebhook(config.webhookClient1.ID, config.webhookClient1.PASS, { embeds: [{ 
author: { name: 'Yui' }, 
title: `Guild Joined: ${guild.name}`, 
description: `<:info:829487360911474688> info\nOn Shard: ${guild.shard.id}\nTotal Guilds: ${await Yui.guilds.size}\n\nOwnerID: ${guild.ownerID}\nMembers: ${guild.memberCount}`, 
timestamp: new Date(), 
color: 0x66ff00, 
thumbnail: { url: guild.iconURL }
}]})

})

Yui.on('guildDelete', async (guild) => { const guilds = await Yui.guilds.size
Yui.executeWebhook(config.webhookClient1.ID, config.webhookClient1.PASS, { embeds: [{ 
author: { name: 'Yui' }, 
title: `Guild Left: ${guild.name}`, 
description: `<:info:829487360911474688> info\nOn Shard: ${guild.shard.id}\nTotal Guilds: ${await Yui.guilds.size}\n\nOwnerID: ${guild.ownerID}\nMembers: ${guild.memberCount}`, 
timestamp: new Date(), 
color: 0xff0000, 
thumbnail: { url: guild.iconURL }
}]})

})

}