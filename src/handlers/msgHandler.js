module.exports = (Yui, message, args) => {
    const config = require('../../config.json')
    const permGifs = require('../assets/arrays.json')
    const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

    Yui.on('messageCreate', async (message) => {
        if (message.author.bot || message.channel.type == 1) return
        if (message.content == `<@!${Yui.user.id}>`) message.channel.createMessage(`My prefix is \`${await Yui.db.getPrefix(message.guildID)}\``)

        const prefixRegex = new RegExp(`^(<@!?${Yui.user.id}>|${escapeRegex(await Yui.db.getPrefix(message.guildID))})\\s*`)

        if (!prefixRegex.test(message.content.toLowerCase())) return
        const [matchedPrefix] = message.content.toLowerCase().match(prefixRegex)

        const args = message.content.slice(matchedPrefix.length).trim().split(/ +/)
        const commandName = args.shift().toLowerCase()
        const command = Yui.commands.get(commandName) || Yui.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName))

        if (!command) return
        const timeLeft = Yui.misc.checkCooldown(command.name, (command.cooldown || 1) * 1000, message.author.id);
        if (timeLeft != 0) {
            const cooldownMessage = await message.channel.createMessage(`**${timeLeft.toFixed(1)}** saniye bekleyin ve tekrar deneyin.`);
            return setTimeout(() => client.deleteMessage(message.channel.id, cooldownMessage.id).catch(() => {}), timeLeft * 1000);
        }

        if (command.permissions) {
            let channelPerms = message.channel.permissionsOf(Yui.user.id)
            for (let i in command.permissions) {
                if (!channelPerms.has(command.permissions[i])) {
                    if (channelPerms.has('sendMessages') && channelPerms.has('readMessages')) {
                        if (channelPerms.has('embedLinks')) {
                            message.channel.createMessage({
                                embed: {
                                    title: 'Not Enough Permission',
                                    description: `I do not have the ${command.permissions[i]} permission!`,
                                    color: Yui.misc.getColor('negative', 'situation'),
                                    image: {
                                        url: permGifs.perms[command.permissions[i]]
                                    }
                                }
                            })
                        }
                    }
                    if (!channelPerms.has('embedLinks')) {
                        message.channel.createMessage(`I do not have the **${command.permissions[i]}** permission!`)
                    }
                    return
                }
            }
        }

        if (command.memberPermissions) {
            let channelPerms = message.channel.permissionsOf(message.author.id)
            for (let i in command.memberPermissions) {
                if (!channelPerms.has(command.memberPermissions[i])) {
                    message.channel.createMessage(`You need the \`${command.memberPermissions[i]}\` permission to use this command!`)
                    return
                }
            }
        }

        let channelPerms = message.channel.permissionsOf(Yui.user.id)

        if (command.ownerOnly && message.author.id != config.author) return
        if (command.recovery) return message.channel.createMessage(`This command is __incomplete__ please try again later.`)
        if (command.isNSFW && !message.channel.nsfw) {
            if (channelPerms.has('embedLinks')) message.channel.createMessage({
                embed: {
                    title: 'NSFW not allowed here',
                    description: 'Use NSFW commands in a NSFW marked channel!',
                    color: 0xff0000,
                    image: {
                        url: permGifs.perms.nsfw
                    }
                }
            })
            else if (!channelPerms.has('embedLinks')) return message.channel.createMessage('Use NSFW commands in a NSFW marked channel!')
        }

        try {
            command.execute(Yui, message, args)
        } catch (error) {
            let logger = require('../utils/logger.js')
            logger.error('Message Handler', error.stack)
            message.channel.createMessage(`An error happened while executing this command if this happens again please come to our support server (<https://discord.gg/pVAQPq79uQ>)`)
        }
    })
}