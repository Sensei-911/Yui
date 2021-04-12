const Eris = require('eris')
const config = require('./config.json');
const MessageCollector = require('./utils/MessageCollector.js')

const Yui = new Eris.Client(config.token, {
debug: true,
restMode: true, 
allowedMentions: { everyone: false, roles: false, users: true },
autoreconnect: true,
defaultImageSize: 1024, 
disableEveryone: true,
messageLimit: 0,
requestTimeout: 0,

disableEvents:{
TYPING_START:true,
VOICE_SERVER_UPDATE:true,
VOICE_STATE_UPDATE:true,
USER_NOTE_UPDATE:true,
CHANNEL_PINS_UPDATE:true,
MESSAGE_UPDATE:true,
RELATIONSHIP_ADD:true,
RELATIONSHIP_REMOVE:true
}

})

Yui.commands = new Eris.Collection();
Yui.db = require('./utils/dbFunctions.js')
Yui.http = require('./utils/http.js')
Yui.MessageCollector = new MessageCollector(Yui)
process.setMaxListeners(0);

const AutoPoster = require('topgg-autoposter')
AutoPoster(config.TOPGG_SECRET, Yui)

const { readdirSync } = require("fs");

require('./handlers/eventHandler.js')(Yui)
require('./handlers/msgHandler.js')(Yui)

readdirSync('./src/commands').forEach(dir => {
const commandFiles = readdirSync(`./src/commands/${dir}/`).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
const command = require(`./commands/${dir}/${file}`);
Yui.commands.set(command.name, command)

}})

Yui.connect();