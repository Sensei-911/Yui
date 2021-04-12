module.exports = {
name: "lock",
memberPermissions: ['manageChannels'],
recovery: false,
async execute(Yui, message, args) {
const channel = message.channelMentions[0] || message.channel;
if (!channel) return message.channel.createMessage(`Please specify a channel!`)
let reason = args.slice(0).join(' ')
if(!reason) reason = 'No reason given.';

let previousOverwrites = channel.permissionOverwrites.has(message.channel.guild.id) ? channel.permissionOverwrites.get(message.channel.guild.id) : { json: {}, allow: 0, deny: 0 };
if (previousOverwrites.json.sendMessages === false) {
message.channel.createMessage('this channel is already locked ya doofus');
return
}
channel.editPermission(message.channel.guild.id, previousOverwrites.allow | 2048, previousOverwrites.deny | 2048, 'role', reason)

channel.createMessage(`<:greentick:829278953168044052> Locked down **${channel.name}.**`)

}}