const moment = require('moment');
module.exports = {
    name: 'server',
    description: 'Sunucu hakkında bazı bilgiler',
    execute(client, message, args) {
        const Discord = require("discord.js")
        let kuruluşönce = moment.utc(message.guild.createdAt, "YYYYMMDD").fromNow()
        .replace(/months/,"ay")
        .replace(/ago/,"önce")
        .replace(/a month/,"1 ay")
        .replace(/two month/,"2 ay")
        let kuruluş = moment.utc(message.guild.createdAt).format('dddd, D MMMM, YYYY')
.replace(/January/,"Ocak")
.replace(/February/,"Şubat")
.replace(/March/,"Mart")
.replace(/April/,"Nisan")
.replace(/May/,"Mayıs")
.replace(/June/,"Haziran")
.replace(/July/,"Temmuz")
.replace(/August/,"Ağustos")
.replace(/September/,"Eylül")
.replace(/October/,"Ekim")
.replace(/November/,"Kasım")
.replace(/December/,"Aralık")
.replace(/Monday/,"Pazartesi")
.replace(/Tuesday/,"Salı")
.replace(/Wednesday/,"Çarşamba")
.replace(/Thursday/,"Perşembe")
.replace(/Friday/,"Cuma")
.replace(/Saturday/,"Cumartesi")
.replace(/Sunday/,"Pazar")

let hareketli_emoji = []
let hareketsiz_emoji = []
message.guild.emojis.cache.forEach(a => {
if(a.animated) {
hareketli_emoji.push(`<a:${a.name}:${a.id}>`)}  //hareketli
if(!a.animated) {
hareketsiz_emoji.push(`<a:${a.name}:${a.id}>`)} //hareketsiz
})

        let sunucu_embed = new Discord.MessageEmbed()
        .setTitle(message.guild.name+" (ID: "+message.guild.id+")")
        .setThumbnail(message.guild.iconURL({dynamic: true}))  
        .setDescription("İşte** "+message.guild.name+" **hakkında bazı bilgiler")
        .setColor("#00FFFF")
        .addFields(
		{ name: '👑 Sunucu Sahibi', value: message.guild.owner, inline: true },
                { name: '👥 Toplam Üye', value: `**${message.guild.memberCount}**`, inline: true },
                { name: '😎 Emojiler', value: `Animasyonlu : **${hareketli_emoji.length ? hareketli_emoji.length : "0"}**\nAnimasyonsuz : **${hareketsiz_emoji.length ? hareketsiz_emoji.length : "0"}**`, inline: true },
                )
        .addFields(
        { name: '🗂️ Kategoriler', value: message.guild.channels, inline: true },
        { name: '💬 Kanallar', value: message.guild.channels.cache, inline: true },
        { name: '❤ Roller', value: message.guild.roles, inline: true },
        )
        .addFields(
                { name: '📆 Kuruluş Tarihi', value: `${kuruluş} **(${kuruluşönce})**`, inline: true },
                { name: '💻 Shard Id', value: `**${message.guild.shardID}**`, inline: true },
        )

        message.channel.send(sunucu_embed)
}};
