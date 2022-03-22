module.exports = {
    name: 'guess',
    permissions: ['sendMessages', 'embedLinks'],
    cooldown: 3,
    async execute(Yui, message, args) {
        const number = parseInt(args[0]) || 20
        if (!number || !Number.isInteger(number)) return message.channel.createMessage('It\'s gotta be a valid number above 10 come on')
        if (number < 10) return message.channel.createMessage('far out that\'s not really a challenge is it??')
        if (number > 100) return message.channel.createMessage('Let\'s try our best to keep the number under 100')

        const random = await Yui.misc.random(1, number)
        let attempts = 2 + Math.round(number / 10)
        let hints = Math.floor(attempts / 2)
        message.channel.createMessage(`${message.author.mention} You've got ${attempts} attempt${attempts === 1 ? '' : 's'} to try and guess my random number between **1 and ${number}**. Type your answer in the chat as a valid number.\nYou can type \`end\` at anytime to stop, or type \`hint\` to know how high or low your last number was.`)

        const guess = async (lastnumber) => {
            let msg = ''
            const prompt = await Yui.MessageCollector.awaitMessage(message.channel.id, message.author.id, 30e3)
            if (!prompt || !prompt.content) {
                return message.channel.createMessage('alright looks like we\'re not playing the game, whatever')
            }
            if (prompt.content.toLowerCase() === 'end') {
                return message.channel.createMessage('You ended the game')
            }
            if (prompt.content.toLowerCase() === 'hint') {
                if (!lastnumber) {
                    message.channel.createMessage('You\'ve gotta actually take a guess first before you get a hint idiot')
                } else if (hints < 1) {
                    message.channel.createMessage('You don\'t have any hints left lol')
                } else {
                    message.channel.createMessage(`Your last number (**${lastnumber}**) was too ${random - lastnumber > 0 ? 'low' : 'high'}\nYou've got \`${attempts}\` attempt${attempts === 1 ? '' : 's'} left and \`${hints -= 1}\` hint${hints === 1 ? '' : 's'} left.`)
                }
                return guess(lastnumber)
            }
            const picked = Number(prompt.content)

            if (picked === random) {
                return message.channel.createMessage(`Good stuff, you got the number right. I was thinking of **${random}**`)
            }
            if (attempts <= 1) {
                return message.channel.createMessage(`Unlucky, you ran out of attempts to guess the number. I was thinking of **${random}**`)
            }

            if (!picked || !Number.isInteger(picked)) {
                msg = `it's gotta be a **valid** number between \`1\` and \`${number}\`\n`
            } else if (picked > number || picked < 1) {
                msg = `it's gotta be a number between \`1\` and \`${number}\`. No higher, no lower\n`
            } else {
                msg = `not this time, `
            }
            message.channel.createMessage(`${msg}\`${attempts -= 1}\` attempt${attempts === 1 ? '' : 's'} left and \`${hints}\` hint${hints === 1 ? '' : 's'} left.`)
            await guess(picked)
        }

        await guess()
    }
}