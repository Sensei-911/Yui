module.exports = {
    name: 'ship',
    permissions: ['sendMessages', 'attachFiles', 'embedLinks'],
    cooldown: 5,
    async execute(Yui, message, args) {
        const target = message.mentions[0] || message.author
        const percent = Math.floor(Math.random() * 100)

        const Canvas = require('canvas')
        const canvas = Canvas.createCanvas(700, 250)
        const ctx = canvas.getContext('2d')

        const background = await Canvas.loadImage('src/assets/ship.jpg')
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

        ctx.strokeStyle = '#74037b'
        ctx.strokeRect(0, 0, canvas.width, canvas.height)

        ctx.font = '60px sans-serif'
        ctx.fillStyle = '#000000'
        ctx.fillText(percent, canvas.width / 2.2, canvas.height / 1.8)

        const avatar2 = await Canvas.loadImage(target.avatarURL)
        ctx.drawImage(avatar2, 475, 25, 190, 190)

        ctx.beginPath()
        ctx.arc(125, 125, 100, 0, Math.PI * 2, true)
        ctx.closePath()

        const avatar = await Canvas.loadImage(message.author.avatarURL)
        ctx.drawImage(avatar, 30, 25, 190, 190)

        message.channel.createMessage({
            content: `${message.author.username}#${message.author.discriminator} x ${target.username}#${target.discriminator}`
        }, {
            file: canvas.toBuffer(),
            name: 'love.jpg'
        })
    }
}