const { AUTHOR } = require("../../config.json");
module.exports = {
    name: 'embed-info',
    description: 'Kullanıcı hakkında bazı bilgiler',
    execute(client, message, args) {
        if(message.author.id !== AUTHOR) return
        const Discord = require("discord.js")
        message.channel.send(`
**.setTitle('')** === __Genel Başlık__
**.addField('','')** === __Başlıklı Yazı__
**.setAuthor('','')** === __Profil Iconlu embed__
**.setDescription('')** === __Normal yazı__
**.setFooter('')** === __En Alt Kısım__
**.setColor('')** === __Embed Rengi__
**.setTimestamp()** === __Zamanı Belirtir__
**.setURL('')** === __Başlığa link ekler__
**.addBlankField()** === __Araya boşluk ekler__
**.setThumbnail()** === __Sağ tarafına resim ekler__
**.setImage()** === __Alt tarafına resim ekler__`)
}};
