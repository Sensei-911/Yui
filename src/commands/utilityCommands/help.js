module.exports = {
name: "help",
cooldown: 2,
permissions: ["sendMessages", "embedLinks"],
async execute(Yui, message, args) {
if(!args[0]){
message.channel.createMessage({ embed: { color: 0x0ffff, fields: [{ name: 'Command List', value: 'https://yuibot.icu/commands.html'}, { name: 'Command Help', value: '`yui help <command>`'}, {name: 'Direct List',value:'`yui commands`'},{name: 'Some extra links:', value: `[Invite Yui!](https://discord.com/oauth2/authorize?client_id=760244924188327977&scope=bot&permissions=2146954743) | [Support Server](https://discord.gg/pVAQPq79uQ) | [Website](https://yuibot.icu)`}] }})
}
else {
const commandName = args[0].toLowerCase();
const command = Yui.commands.get(commandName) || Yui.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
if(!command || command.ownerOnly) return message.channel.createMessage(`No command called "${args[0]}" was found.`)
message.channel.createMessage({ embed: {title: `${command.name} info`, fields:[{ name: 'Description:', value:command.description ? command.description : "no description"}, { name:'Aliases', value: command.aliases ? command.aliases.join(', ') : "no aliases"}, { name: 'Cooldown', value: command.cooldown ? `${command.cooldown} second(s)` : "1 second(s)"},{name:'Permissions Needed', value: command.perm ? `${"`"+command.perm.join('`, `')+"`"}` : "no permissions needed"}], color: 0x0ffff }})
}
}}