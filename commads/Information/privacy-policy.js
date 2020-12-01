/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
module.exports = {
    name: 'privacy',
    aliases: ['tos','termofservice'],
    description: 'Kullanım koşulları.',
    execute(client, message, args) {
        const Discord = require("discord.js")
        let privacy = new Discord.MessageEmbed()
        .setTitle("Kullanım Şartları/Privacy Policy")
        .setDescription('***Chika\'nın Kullanım Koşulları/Şartları***')
        .addField(`**KULLANICILARDAN TOPLADIĞIMIZ VERİLER**`,`━━━━━━━━━━━━━━━━━━━━━━━━━`)
        .addField('1. Madde','Chika\'nın bulunduğu sunucuların adları.')
        .addField('2. Madde','Bir kişinin kaç kere öpüldüğünün/vurulduğunun... verisi (roleplay)')
        .addField('3. Madde','Bir kişinin chikaya eklenicek olan ekonomi komutlarından kazandığı para miktarı.')
        .addField('4. Madde','Eklenecek olan prefix değiştirme komutunda hangi sunucunun hangi prefix\'i seçtiğinin verisi.')
        .addField('5. Madde','Eklenecek olan dil değiştirme komutlarında hangi sunucunun hangi dili seçtiğinin verisi.')
        .addField(`BU VERİLERİ NEDEN TOPLUYORUZ`,`━━━━━━━━━━━━━━━━━━━━━━━━━`)
        .addField('1. Madde','Roleplay komutlarında topladığımız veriler ilerde embedin altında bu kişinin kaç kere öpüldüğünün/vurulduğunun verisini footer olarak yazacaktır.')
        .addField('2. Madde','Para komutlarında topladığımız veriler ile bot yeniden başladığında bu verilerin kaybolmamasını sağlıyoruz.')
        .addField('3. Madde','Prefix verilerini botu yeniden başlattığımızda o ayarları tekrardan yapmamanız için topluyoruz.')
        .addField('4. Madde','Dil verilerini botu yeniden başlattığımızda o ayarları tekrardan yapmamanız için topluyoruz.')
        .addField('5. Madde','Botumuzun sağlıklı bir şekilde çalışması için')
        .addField(`BU BİLGİLERİ NASIL KULLANIYORUZ`,`━━━━━━━━━━━━━━━━━━━━━━━━━`)
        .addField(`Özel bir kullanma yöntemimiz yok yani bu bilgiler olmadan bot stabil çalışmaz o yüzden endişe etmenize gerek yok.`)
        .addField(`AMA EĞER ENDİŞELERİNİZ VARSA BİZE ULAŞABİLİRSİNİZ`)
        .addField(`1. Madde`,`Destek sunucumuza gelebilirsiniz.`)
        .addField(`2. Madde`,`Direk bana dm/e-posta(kemalbinbiriki@outlook.com) atabilirsiniz.`)
        .addField(`3. Madde`,`Veriler etkili bir şekilde kullanılmaya başlanınca verilerinizi silmek için bir komut ekleyeceğim.`)
        .addField(`VERİLERİN SİLİNME İŞLEMİ`,`━━━━━━━━━━━━━━━━━━━━━━━━━`)
        .addField(`1. Madde`,`Veriler 1 ile 10 gün arasında silinir.`)
        .addField(`2. Madde`,`Verilerinizin silinme işlemi manual olarak gerçekleştirilecektir o yüzden uzun sürebilir.`)
        .setColor("RED")
        message.author.send(privacy).then(message.react('✅'))
}};
