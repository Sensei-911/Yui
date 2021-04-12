module.exports = {
name: 'unban',
cooldown: 3,
permissions:["sendMessages", "banMembers"],
memberPermissions: ['banMembers'],
async execute(Yui, message, args) {
if (!args[0]) return message.channel.createMessage("Please specify a member to unban.");

try {
const user = await Yui.getRESTUser(args[0])

let reason = args[1];
if(!reason) reason = `Unbanned by ${message.author.username}#${message.author.discriminator}`

await Yui.getGuildBan(message.guildID, args[0])

message.channel.createMessage(`**${user.username}#${user.discriminator}** successfully unbanned.`)
await Yui.unbanGuildMember(message.guildID, args[0], reason);
} catch (e) {
message.channel.createMessage(`I can't unban this user user not banned or cannot get user properly`)
}

}}