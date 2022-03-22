module.exports = {
    name: 'anime',
    cooldown: 2,
    permissions: ['sendMessages', 'embedLinks'],
    async execute(Yui, message, args) {
        if (!args[0]) return message.channel.createMessage('You must enter an anime name.')

        const animeApi = require('@freezegold/anime.js')
        const animeName = args.slice(0).join(' ')
        const malScraper = require('mal-scraper')
        const name = animeName

        var genres
        await malScraper.getInfoFromName(name, true).then(data => genres = data.genres)

        animeApi.searchAnime(animeName).then(response => {
                if (!response) return message.channel.createMessage('Nothing found')
                if (response[0].endDate == null) var info = {
                    status: 'current',
                    whenFinished: '?',
                    totalEpisodes: '??'
                }
                else var info = {
                    status: 'finished',
                    whenFinished: response[0].endDate,
                    totalEpisodes: response[0].episodeCount
                }
                if (response[0].duration == null) var duration = '?'
                else var duration = response[0].episodeLength

                message.channel.createMessage({
                    embed: {
                        title: response[0].titles.romaji,
                        url: `https://kitsu.io/anime/${response[0].id}`,
                        thumbnail: {
                            url: response[0].posterImage.large
                        },
                        description: `${response[0].synopsis.replace("'", '').replace('+', '\n')}`,
                        color: Yui.misc.getColor(null, 'default'),
                        fields: [{
                            name: '⏳ Status',
                            value: info.status,
                            inline: true
                        }, {
                            name: '🗂️ Type',
                            value: response[0].subType,
                            inline: true
                        }, {
                            name: '➡ Genres',
                            value: genres.join(', '),
                            inline: false
                        }, {
                            name: '📆 Aired',
                            value: `from **${response[0].startDate}** to **${info.whenFinished}**`,
                            inline: false
                        }, {
                            name: '📀 Total Episodes',
                            value: info.totalEpisodes,
                            inline: true
                        }, {
                            name: '⏱ Duration',
                            value: `${duration} mn`,
                            inline: true
                        }, {
                            name: '⭐ Average Rating',
                            value: `**${response[0].averageRating}/100**`,
                            inline: true
                        }, {
                            name: '🏆 Rank',
                            value: `**TOP ${response[0].ratingRank}**`,
                            inline: true
                        }]
                    }
                })
            }

        )
    }
}