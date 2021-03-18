module.exports = {
name: "help",
cooldown: 3,
description: "See a list of commands available, all on discord. If you run yui help <name of a command> It will also give you more info such as a description",
async execute(yui, message,args) {
if(!args[0]){
message.channel.send({ embed: { color: '#00FFFF', fields: [{ name: 'Command List', value: 'https://yuibot.icu/commands.html'},{name: 'Command Help', value: '`yui help <command>`'},{name:'Direct List',value:'`yui commands`'},{name: 'Some extra links:', value: `[Invite Yui!](https://discord.com/oauth2/authorize?client_id=760244924188327977&scope=bot&permissions=2146954743) | [Support Server](https://discord.gg/pVAQPq79uQ) | [Website](https://yuibot.icu)`}]}})
}
else{
const commandName = args[0].toLowerCase();
const command = yui.commands.get(commandName) || yui.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
if(!command) return message.channel.send(`I can't find a command called \`${args[0]}\``)
if(command.ownerOnly) return message.channel.send(`I can't find a command called \`${command.name}\``)
message.channel.send({ embed: {title: `${command.name} info`, fields:[{name: 'Description:',value:command.description ? command.description : "no description"},{name: 'Usage',value: command.usage ? `\`${command.usage}\`` : `yui ${command.name}`},{name:'Aliases',value:command.aliases ? command.aliases.join(', ') : "no aliases"},{name:'Cooldown',value:command.cooldown ? command.cooldown+"s" : "1s"},{name:'Permissions Needed', value: command.perm ? `${"`"+command.perm.join('`, `')+"`"}` : "no permissions information"},],color: '#00FFFF'}})
}
}}