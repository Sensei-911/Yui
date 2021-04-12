module.exports = {
name: 'stats',
aliases: ['statistics'],
cooldown: 3,
permissions: ["sendMessages", "embedLinks"],
description: 'Gives informations about bots stats',
ownerOnly:true,
async execute(Yui, message, args) {
const time = { days: Math.floor(Yui.uptime / 86400000), hours: Math.floor(Yui.uptime / 3600000) % 24, minutes: Math.floor(Yui.uptime / 60000) % 60, seconds: Math.floor(Yui.uptime / 1000) % 60}
message.channel.createMessage({ embed: {
author: { name: `${Yui.user.username} Stats` },
fields: [
{
name: `Server Count`,
value: await Yui.guilds.size
},
{
name: `Uptime`,
value: `${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s`
},
{
name: 'Ping',
value: `${message.channel.guild.shard.latency.toFixed()}ms`
}
],
thumbnail: { url: Yui.user.avatarURL },
color: 0x0ffff

}})

}}