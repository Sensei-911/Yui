module.exports = {
    name: 'gif',
    permissions: ['sendMessages', 'embedLinks'],
    cooldown: 3,
    async execute(Yui, message, args) {
        let search = encodeURIComponent(args.join(' '))
        const data = await Yui.http.get('https://api.giphy.com/v1/gifs/search').query({
            api_key: require('../../../config.json').GIPHY_API_KEY,
            q: search,
            limit: 25,
            rating: 'PG-13',
            lang: 'en'
        })

        if (!args[0]) return message.channel.createMessage('Please enter a word to search.')
        if (!data.body.data[0]) return message.channel.createMessage('I can\'t find any images for that. try something else.')

        message.channel.createMessage({
            embed: {
                title: `First Result for "${decodeURIComponent(search)}" on GIPHY`,
                thumbnail: {
                    url: 'https://image.ibb.co/b0Gkwo/Poweredby_640px_Black_Vert_Text.png'
                },
                image: {
                    url: data.body.data[0].images.original.url
                },
                color: Yui.misc.getColor(null, 'default')
            }
        })
    }
}