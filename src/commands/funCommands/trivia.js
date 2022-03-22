module.exports = {
    name: 'trivia',
    permissions: ['sendMessages', 'attachFiles', 'embedLinks'],
    cooldown: 15,
    async execute(Yui, message, args) {
        const request = require('request-promise-native')

        let difficulties = ['easy', 'medium', 'hard']
        if (args[0]) {
            args.difficulty = difficulties.includes(args[0].toLowerCase()) ? args[0].toLowerCase() : 'easy'
        } else args.difficulty = 'easy'
        let options = {
            method: 'GET',
            url: `https://opentdb.com/api.php?amount=1&type=boolean&difficulty=${args.difficulty}&encode=url3986`,
            json: true
        }
        let response = await request(options)

        if (!response) return

        response = response.results[0]
        let question = await message.channel.createMessage({
            embed: {
                color: Yui.misc.getColor(null, 'default'),
                title: 'Trivia - True/False',
                description: decodeURIComponent(response.question),
                fields: [{
                    name: 'Category',
                    value: decodeURIComponent(response.category),
                    inline: true
                }, {
                    name: 'Difficulty',
                    value: response.difficulty,
                    inline: true
                }],
                footer: {
                    text: 'Reply with either True/False within 30 seconds.'
                }
            }
        })

        const trivia = await Yui.MessageCollector.awaitMessage(message.channel.id, message.author.id, 30000)

        if (trivia) {
            let color, description
            if (trivia.content.toLowerCase() === response.correct_answer.toLowerCase()) {
                color = Yui.misc.getColor('positive', 'situation')
                description = `${message.author.username}#${message.author.discriminator} you're absolutely right.`
            } else {
                color = Yui.misc.getColor('negative', 'situation')
                description = `Unfortunately, you're wrong ${message.author.username}#${message.author.discriminator}`
            }
            message.channel.createMessage({
                embed: {
                    color: color,
                    description: description
                }
            }).catch(() => {})
        };

        if (!trivia) {
            message.channel.createMessage({
                embed: {
                    color: Yui.misc.getColor(null, 'default'),
                    title: 'Trivia Ended',
                    description: 'Trivia was ended as no one was able to answer within 60 seconds.'
                }
            }).then(() => {
                question.delete().catch(() => {})
            }).catch(() => {})
        };
    }
}