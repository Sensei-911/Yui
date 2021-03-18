module.exports = {
name: 'uptime',
description: 'Shows bots uptime.',
cooldown: 1,
execute(yui, message, args) {
const time = { days: Math.floor(yui.uptime / 86400000), hours: Math.floor(yui.uptime / 3600000) % 24, minutes: Math.floor(yui.uptime / 60000) % 60, seconds: Math.floor(yui.uptime / 1000) % 60}
message.channel.send({ embed: { color: '#00FFFF', description:`${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s`}})
}}