const Eris = require('eris')
const config = require('../config.json')
const MessageCollector = require('./utils/MessageCollector.js')
const logger = require('./utils/logger.js')

const Yui = new Eris.Client(config.token, {
    debug: true,
    restMode: true,
    allowedMentions: {
        everyone: false,
        roles: false,
        users: true
    },
    autoreconnect: true,
    defaultImageSize: 1024,
    disableEveryone: true,
    messageLimit: 0
})

Yui.commands = new Eris.Collection()
Yui.db = require('./utils/dbFunctions')(Yui)
Yui.misc = require('./utils/misc'), (Yui)
Yui.http = require('./utils/http')
Yui.MessageCollector = new MessageCollector(Yui)

try {
    const AutoPoster = require('topgg-autoposter')
    setInterval(() => AutoPoster(config.TOPGG_SECRET, Yui), 3600000 * 6)
} catch (e) {}

const { readdirSync } = require('fs')
const handlers = []
const categories = {}

readdirSync('./src/handlers').forEach(dir => handlers.push(dir))

handlers.forEach(handler => {
    require(`./handlers/${handler}`)(Yui)
})

readdirSync('./src/commands').forEach(dir => {
    const commandFiles = readdirSync(`./src/commands/${dir}`).filter((file) => file.endsWith('.js'))
    for (const file of commandFiles) {
        Object.assign(categories, {
            [dir]: commandFiles
        })
        const command = require(`./commands/${dir}/${file}`)
        Yui.commands.set(command.name, command)
    }
})

process.on('unhandledRejection', rejection => logger.error('unhandledRejection', rejection))
Yui.categories = [categories], (Yui)
Yui.connect()