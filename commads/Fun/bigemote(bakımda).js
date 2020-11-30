module.exports = {
    name: 'bigemote',
    description: 'Emojinin büyük resmini verir',
    execute(client, message, args) {
        return
        const Discord = require("discord.js")
        let id = args.slice(0).join(' ');
        let emoji = message.guild.emojis.cache.find(emoji => emoji.id == `${id}`)
        let emoji_resmi = `https://cdn.discordapp.com/emojis/${emoji.id}.${emoji.animated ? 'gif' : 'png'}`
        let emoji_embed = new Discord.MessageEmbed()
        .setAuthor('Büyük Emoji',message.author.displayAvatarURL({dynamic: true, size: 1024}))
        .setColor('#00FFFF')
        .setImage(emoji_resmi)
        message.channel.send(emoji_embed)
    }};