module.exports = {
name: 'slowmode',
cooldown: 5,
execute(yui, message, args) {
if(!message.member.hasPermission("MANAGE_CHANNELS")) return
let slow = args[0]
if (!slow) return message.channel.send("You did not specify a quantity!")
if (slow > 21600) return message.channel.send("You can put slowmode for up to 6 hours!")
if (slow > 0) {
message.channel.setRateLimitPerUser(slow).then(message.channel.send(`Slow mode enabled. (1 msg/${slow}s)`))
}
if (slow < 0) {
message.channel.send("Are you serious?") 
}
if (slow == 'off') {
message.channel.setRateLimitPerUser(0).then(message.channel.send(`Slow mode disabled. (1 msg/0s)`))
}

}}