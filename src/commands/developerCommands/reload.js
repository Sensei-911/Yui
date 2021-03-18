module.exports = {
name: 'reload',
description: 'Reloads a command',
ownerOnly:true,
execute(yui,message, args) {
if(!args[0]) return message.channel.send(`You didn't pass any command to reload!`)
const commandName = args[0].toLowerCase();
const command = yui.commands.get(commandName) || yui.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
if (!command) return message.channel.send(`There is no command with name or alias \`${commandName}\`!`);
delete require.cache[require.resolve(`./${command.name}.js`)];
try {
const newCommand = require(`./${command.name}.js`);
message.yui.commands.set(newCommand.name, newCommand);
} catch (error) {
console.error(error);
message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
}
message.channel.send(`Command \`${command.name}\` was reloaded!`);

}};