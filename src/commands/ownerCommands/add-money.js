module.exports = {
    name: 'add-money',
    permissions: ['sendMessages', 'embedLinks'],
    ownerOnly: true,
    async execute(Yui, message, args) {
        try {
            let target

            if (!args[0]) return message.channel.createMessage('Please provide a user with id.')
            if (args[0]) target = await Yui.getRESTUser(args[0])
            if (!args[1]) return message.channel.createMessage('You need to specify the coin to be added')
            if (isNaN(args[1])) return message.channel.createMessage('Please provide a valid numnber of coins.')
            await Yui.db.addCoins(target.id, args[1])

            message.channel.createMessage({
                embed: {
                    description: `You have successfully gived ${args[1]} free coins to ${target.username}`,
                    color: Yui.misc.getColor(null, 'default')
                }
            })
        } catch (e) {
            message.channel.createMessage({
                embed: {
                    description: `Cannot find this user on Discord.`,
                    color: Yui.misc.getColor('negative', 'situation')
                }
            })
        }
    }
}