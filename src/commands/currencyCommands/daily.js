module.exports = {
    name: 'daily',
    cooldown: 5,
    permissions: ['sendMessages', 'embedLinks'],
    async execute(Yui, message, args) {
        if (await Yui.db.getDaily(message.author.id) == 0) {
            message.channel.createMessage({
                embed: {
                    title: `Here are your daily coins, ${message.author.username}`,
                    description: 'You\'ve claimed your daily and earned **250,000**!',
                    color: 5025616
                }
            })
            await Yui.db.addCoins(message.author.id, 250000)
            await Yui.db.claimDaily(message.author.id)
            return
        }

        const LAST_CLAIMED = new Date(await Yui.db.getDaily(message.author.id)).getTime()
        const DATE_DIFFERENCE = Date.now() - LAST_CLAIMED
        const DAYS_PASSED = DATE_DIFFERENCE / (1000 * 60 * 60 * 24)

        const REMAINING_DATE_OBJECT = {
            hours: Math.floor(DATE_DIFFERENCE / 3600000) % 24,
            minutes: Math.floor(DATE_DIFFERENCE / 60000) % 60,
            seconds: Math.floor(DATE_DIFFERENCE / 1000) % 60
        }

        const REMAINING_DATE_TO_TIME = `${23 - REMAINING_DATE_OBJECT.hours} hours, ${60 - REMAINING_DATE_OBJECT.minutes} minutes and ${60 - REMAINING_DATE_OBJECT.seconds} seconds`

        if (DAYS_PASSED < 1) return message.channel.createMessage({
            embed: {
                title: 'You\'ve already claimed your daily today',
                description: `Your next daily is ready in:\n**${REMAINING_DATE_TO_TIME}**`,
                color: 16711680
            }
        })

        if (DAYS_PASSED >= 1) {
            message.channel.createMessage({
                embed: {
                    title: `Here are your daily coins, ${message.author.username}`,
                    description: 'You\'ve claimed your daily and earned **250,000**!',
                    color: 5025616
                }
            })
            await Yui.db.addCoins(message.author.id, 250000)
            await Yui.db.claimDaily(message.author.id)
        }
    }
}