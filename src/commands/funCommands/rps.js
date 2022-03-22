module.exports = {
    name: 'rps',
    permissions: ['sendMessages'],
    cooldown: 5,
    execute(Yui, message, args) {
        let outcomes = ['ROCK', 'PAPER', 'SCISSOR']
        let userOutcome = args.join(' ').toUpperCase()

        if (!outcomes.includes(userOutcome)) {
            return message.channel.createMessage({
                embed: {
                    title: 'Example Usage',
                    description: '```\ny!rps <rock/paper/scissor>\n```',
                    color: Yui.misc.getColor(null, 'default')
                }
            })
        }

        let botOutcome = outcomes[Math.floor(Math.random() * outcomes.length)]

        let result = 'I win! :yum:'
        if (userOutcome === botOutcome) {
            result = 'Oh damn! It\'s a draw, dude. 😕'
        } else if (userOutcome === 'ROCK') {
            if (botOutcome === 'SCISSOR') {
                result = 'You win. 👏'
            }
        } else if (userOutcome === 'PAPER') {
            if (botOutcome === 'ROCK') {
                result = 'You win. 👏'
            }
        } else if (userOutcome === 'SCISSOR') {
            if (botOutcome === 'PAPER') {
                result = 'You win. 👏'
            }
        }

        message.channel.createMessage({
            embed: {
                color: Yui.misc.getColor(null, 'default'),
                description: `You chose **${userOutcome}**, I chose **${botOutcome}**. *${result}*`
            }
        })
    }
}