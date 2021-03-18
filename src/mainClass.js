const Discord = require("discord.js");
const yui = new Discord.Client({ disableMentions: "everyone"});
const config = require('./secrets/config.json');
const secrets = require('./secrets/secrets.json')
const { Player } = require('discord-player');
const fs = require("fs");
const AutoPoster = require('topgg-autoposter')
const poster = AutoPoster(secrets.TOPGG_SECRET, yui)
require('./handlers/eventHandler')(yui)
require('./handlers/msgHandler')(yui)
yui.player = new Player(yui);
yui.commands = new Discord.Collection();
yui.prefix = config.prefix

fs.readdirSync('./src/commands').forEach(dir => {
const commandFiles = fs.readdirSync(`./src/commands/${dir}/`).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
const command = require(`./commands/${dir}/${file}`);
yui.commands.set(command.name, command)}
})

const player = fs.readdirSync('./src/commands/musicCommands/Player').filter(file => file.endsWith('.js'));
for (const file of player) {
const event = require(`./commands/musicCommands/Player/${file}`);
yui.player.on(file.split(".")[0], event.bind(null, yui));

}
yui.login(config.token)
