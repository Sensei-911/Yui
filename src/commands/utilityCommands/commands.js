module.exports = {
    name: 'commands',
    cooldown: 2,
    permissions: ['sendMessages', 'embedLinks'],
    execute(Yui, message, args) {
        function nonArgs() {
            message.channel.createMessage({
                embed: {
                    author: {
                        name: "Yui's commands.",
                        icon_url: Yui.user.avatarURL
                    },
                    description: `\`\`\`\nyui commands <group>\n\`\`\``,
                    color: Yui.misc.getColor(null, 'default'),
                    fields: [{
                        name: '🛡 Moderation',
                        value: `${Yui.categories[0].moderationCommands.length} commands`,
                        inline: true
                    }, {
                        name: '💰 Currency',
                        value: `${Yui.categories[0].currencyCommands.length} commands`,
                        inline: true
                    }, {
                        name: '🔧 Utility',
                        value: `${Yui.categories[0].utilityCommands.length} commands`,
                        inline: true
                    }, {
                        name: '🙂 Roleplay',
                        value: `${Yui.categories[0].roleplayCommands.length} commands`,
                        inline: true
                    }, {
                        name: '🔞 Nsfw',
                        value: `${Yui.categories[0].nsfwCommands.length} commands`,
                        inline: true
                    }, {
                        name: '😅 Fun',
                        value: `${Yui.categories[0].funCommands.length} commands`,
                        inline: true
                    }, {
                        name: '🐣 Animals',
                        value: `${Yui.categories[0].animalCommands.length} commands`,
                        inline: true
                    }]
                }
            })
        }

        if (!args[0]) {
            nonArgs()
        } else if (args[0].toLowerCase() == 'animals') {
            message.channel.createMessage({
                embed: {
                    color: Yui.misc.getColor(null, 'default'),
                    title: 'Animal Commands',
                    description: Yui.categories[0].animalCommands.join(', ').replace(/.js/g, '')
                }
            })
        } else if (args[0].toLowerCase() == 'currency') {
            message.channel.createMessage({
                embed: {
                    color: Yui.misc.getColor(null, 'default'),
                    title: 'Currency Commands',
                    description: Yui.categories[0].currencyCommands.join(', ').replace(/.js/g, '')
                }
            })
        } else if (args[0].toLowerCase() == 'fun') {
            message.channel.createMessage({
                embed: {
                    color: Yui.misc.getColor(null, 'default'),
                    title: 'Fun Commands',
                    description: Yui.categories[0].funCommands.join(', ').replace(/.js/g, '')
                }
            })
        } else if (args[0].toLowerCase() == 'moderation') {
            message.channel.createMessage({
                embed: {
                    color: Yui.misc.getColor(null, 'default'),
                    title: 'Moderation Commands',
                    description: Yui.categories[0].moderationCommands.join(', ').replace(/.js/g, '')
                }
            })
        } else if (args[0].toLowerCase() == 'nsfw') {
            if (message.channel.nsfw === true) {
                message.channel.createMessage({
                    embed: {
                        color: Yui.misc.getColor('negative', 'situation'),
                        title: 'Nsfw Commands',
                        description: Yui.categories[0].nsfwCommands.join(', ').replace(/.js/g, '')
                    }
                })
            }
            if (message.channel.nsfw === false) {
                message.channel.createMessage({
                    embed: {
                        color: Yui.misc.getColor(null, 'default'),
                        title: 'NSFW not allowed here',
                        description: 'You must switch to an NSFW channel to view commands!'
                    }
                })
            }
        } else if (args[0].toLowerCase() == 'roleplay') {
            message.channel.createMessage({
                embed: {
                    color: Yui.misc.getColor(null, 'default'),
                    title: 'Roleplay Commands',
                    description: Yui.categories[0].roleplayCommands.join(', ').replace(/.js/g, '')
                }
            })
        } else if (args[0].toLowerCase() == 'utility') {
            message.channel.createMessage({
                embed: {
                    color: Yui.misc.getColor(null, 'default'),
                    title: 'Utility Commands',
                    description: Yui.categories[0].utilityCommands.join(', ').replace(/.js/g, '')
                }
            })
        } else {
            nonArgs()
        }
    }
}