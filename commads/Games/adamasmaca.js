/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const { stripIndents } = require('common-tags');
let oyndurum = new Set();

module.exports = {
    name: 'adamasmaca',
    description: 'Adam asmaca',
    async execute(client, message, args) {

  let kelime= [
    "KÖPEK",
    "TAPİR",
    "LAGOS",
    "EBABİL",
    "BİZON",
    "TIRTIL",
    "BOĞA",
    "SİVRİSİNEK",
    "YENGEÇ",
    "TAVUK",
    "ORNİTORENK",
    "MERCAN",
    "KANGURU",
    "KEÇİ",
    "ZÜRAFA",
    "AYI",
    "KAPLAN",
    "LÜFER",
    "VAŞAK",
    "ÖRDEK",
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "PATLICAN",
    "KIZILCIK",
    "KORUNGA",
    "KETEN",
    "KEKİK",
    "DEREOTU",
    "KİRAZ",
    "MARUL",
    "HARDAL",
    "DİŞBUDAK",
    "BİBERİYE",
    "KARANFİL",
    "MANOLYA",
    "KARNIBAHAR",
    "NOHUT",
    "SÜMBÜL",
    "FULYA",
    "BERGAMOT",
    "KABAK",
    "HANIMELİ",
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    "İRAN",
    "ÜRDÜN",
    "JAMAİKA",
    "LİBERYA",
    "AFGANİSTAN",
    "ÇİN",
    "YEMEN",
    "SUDAN",
    "ANDORRA",
    "MOLDOVA",
    "VATİKAN",
    "FAS",
    "BOTSVANA",
    "GÜRCİSTAN",
    "İSVİÇRE",
    "BURUNDİ",
    "MONAKO",
    "AVUSTURYA",
    "MOĞOLİSTAN"
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
]
        if (oyndurum.has(message.channel.id)) return message.reply('Kanal başına sadece bir adam asmaca oyunu meydana gelebilir.');

        try {
            const cevap = kelime[Math.floor(Math.random() * kelime.length)].toLowerCase();
            let point = 0;
            let displayText = null;
            let tahmin = false;
            const confirmation = [];
            const yanlış = [];
            const display = new Array(cevap.length).fill('_');
            while (cevap.length !== confirmation.length && point < 6) {
                await message.channel.send(stripIndents`
                    ${displayText === null ? '**Kobra Adam Asmaca**!' : displayText ? '**Çok iyisin!**' : '**Yanlış Harf!**'}
                         **Kelime:**    \`${display.join(' ')}\`
                    **Yanlış Harfler:** ${yanlış.join(', ') || 'Yok'}
                    \`\`\`
                    _________
                    |    |
                    |    ${point > 0 ? '' : ''}
                    |   ${point > 2 ? '┌' : ' '}${point > 1 ? '()' : ''}${point > 3 ? '┐' : ''}
                    |    ${point > 4 ? '/' : ''} ${point > 5 ? '\\' : ''}
                    |
                    \`\`\`
                `);
                const filter = res => {
                    const choice = res.content.toLowerCase();
                    return res.author.id === message.author.id && !confirmation.includes(choice) && !yanlış.includes(choice);
                };
                const guess = await message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 300000
                });
                if (!guess.size) {
                    await message.channel.send('Zamanın doldu!');
                    break;
                }
                const choice = guess.first().content.toLowerCase();
                if (choice === 'end') break;
                if (choice.length > 1 && choice === cevap) {
                    tahmin = true;
                    break;
                } else if (cevap.includes(choice)) {
                    displayText = true;
                    for (let i = 0; i < cevap.length; i++) {
                        if (cevap.charAt(i) !== choice) continue;
                        confirmation.push(cevap.charAt(i));
                        display[i] = cevap.charAt(i);
                    }
                } else {
                    displayText = false;
                    if (choice.length === 1) yanlış.push(choice);
                    point++;
                }
            }
            oyndurum.delete(message.channel.id);
            if (cevap.length === confirmation.length || tahmin) return message.channel.send(`**Tebrikler kelimeyi buldun! **${cevap}!`);
            return message.channel.send(`Maalesef bilemedin kelime bu: **${cevap}**`);
        } catch (err) {
            oyndurum.delete(message.channel.id);
            return message.reply(`Olamaz! Bir Hata Verdi: \`${err.message}\``);
        }
    

}}
