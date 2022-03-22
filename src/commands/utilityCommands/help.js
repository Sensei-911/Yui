module.exports = {
    name: 'help',
    cooldown: 2,
    permissions: ['sendMessages', 'embedLinks'],
    async execute(Yui, message, args) {
        if (!args[0]) {
            message.channel.createMessage({
                embed: {
                    color: Yui.misc.getColor(null, 'default'),
                    fields: [{
                        name: 'Command Help',
                        value: '`yui help <command>`'
                    }, {
                        name: 'Direct List',
                        value: '`yui commands`'
                    }]
                }
            })
        } else {
            const commandName = args[0].toLowerCase()
            const command = Yui.commands.get(commandName) || Yui.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
            if (!command || command.ownerOnly) return message.channel.createMessage(`No command called "${args[0]}" was found.`)
            message.channel.createMessage({
                embed: {
                    title: `${command.name} info`,
                    fields: [{
                        name: 'Description:',
                        value: command.description ? command.description : 'no description'
                    }, {
                        name: 'Aliases',
                        value: command.aliases ? command.aliases.join(', ') : 'no aliases'
                    }, {
                        name: 'Cooldown',
                        value: command.cooldown ? `${command.cooldown} second(s)` : '1 second(s)'
                    }, {
                        name: 'Permissions Needed',
                        value: command.perm ? `${'`' + command.perm.join('`, `') + '`'}` : 'no permissions needed'
                    }],
                    color: Yui.misc.getColor(null, 'default')
                }
            })
        }
    }
}