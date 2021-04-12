module.exports = {
name: 'uptime',
cooldown: 2,
permissions: ["sendMessages", "embedLinks"],
execute(Yui, message, args) {
const time = { days: Math.floor(Yui.uptime / 86400000), hours: Math.floor(Yui.uptime / 3600000) % 24, minutes: Math.floor(Yui.uptime / 60000) % 60, seconds: Math.floor(Yui.uptime / 1000) % 60}
message.channel.createMessage({ embed: { color: 0x0ffff, description: `${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s`}})
}}