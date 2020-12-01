/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'joke',
    description: 'Botu davet etmek için link verir.',
    execute(client, message, args) {
   message.channel.send('Espri yükleniyor.').then(message => {
      var espriler = [
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          "İnsanların seni ezmesine izin verme; Ehliyet al, sen onları ez...",
          "İlahi Azrail ... Sen adamı öldürürsün!",
          "Mafya babası olmak için oğlumun adını “Mafya” koydum.",
          "Kim vurduya gittim birazdan gelecem...",
          "Zenginler et, fakirler hayalet yer.",
          "Bugünlerde gözüm çok KIZarıyor.- Benimde arıyor ya!",
          "Hava korsanı uçağı kaçıracaktı ama yapamadı çünkü uçağı kaçırdı.",
          "GİT’Arı’ getir de biraz şarkı söyleyelim. -Abi arı sokmasın!",
          "Sana bir kıllık yapayım, kıllarını koyarsın.",
          "Seven unutmaz oğlum, eight unutur.",
          "Cem Uzan, üstünü örteyim.",
          "Geçenlerde izdivaç programında adam evim, arabam, param var dedi üç hatun aynı anda elektrik aldı. Adam bildiğin üçlü priz çıktı.",
          "Haydi Unkapanı’na gidip birkaç kapan kuralım. Belki un yakalarız",
          "Saçını sarıya boyatıp kaşlarını zift karası bırakınca doğal sarışın olmuyorsun tatlım. Borussia Dortmund deplasman forması gibi oluyon.",
          "Sonuçta çubuk krakerle sigara içme taklidi yapan çocuklardık biz. Hangi ara bu kadar cool olduk.",
          "Adamın biri güneşte yanmış, ay da düz.",
          "Ben Yedigün içiyorum sen Onbeşgün iç.",
          "Sinemada on dakika ara dedi, aradım aradım açmadı.",
          "Röntgen Filmi çektirdik, yakında sinemalarda.",
          "Adamın Biri Notebook Almış, DELLenmiş.",
          "Geçen gün taksi çevirdim hala dönüyor.",
          "Ben hikâye yazarım Ebru Destan.",
          "Geçen gün geçmiş günlerimi aradım ama meşguldü.",
          "Tebrikler kazandınız, şimdi tencere oldunuz!",
          "Kaba kuvvet uygulama, kap kırılabilir.",
          "Türkiye’nin en yeni şehri – Nevşehir",
          "Ayna'nın karşısında süslenme, manga'nın karşısında süslen.",
          "Geçen ‘fil’e çorap aldım, zürafaya almadım.",
          "Yılanlardan korkma, yılmayanlardan kork.",
          "Ben kahve içiyorum, Nurgül Yeşilçay.",
          "Bak şu karşıdaki uçak PİSTİ, ama bir türlü temizlemediler.",
          "Adamın biri gülmüş, saksıya koymuşlar.",
          "Sinüs 60, kosinüs tutmuş…",
          "Adamın biri kızmış istemeye gelmişler.",
          "Ayda 5 milyon kazanma ister misin? Evet.  O zaman Ay’a git.",
          "Funda Arar dediler ama hala daha aramadı.",
          "Adamın kafası atmış bacakları eşek.",
          "Uzun lafın kısası : U.L.",
          "Yağmur yağmış, kar peynir!",
          "Sakla samanı, inekler aç kalsın.",
          "Baraj dendi mi, akan sular durur.",
          "Dünya dönermiş ay da köfte…",
          "Son gülen en geç anlayandır.",
          "Bu erikson, başka erik yok.",
          "Sen kamyonu al, Leonardo da vinci.",
          "Adamın biri gülmüş, bahçeye dikmişler.",
          "Tekel'in nesi var, İki elin sesi var.",
          "Top ağlarda, ben ağlamaz mıyım? ",
          "Esra Erol ile - İs The Watch.",
          "Burger King, bende Vezir.",
          "Ben yürüyelim diyorum Gerard Depardieu.",
          "Ahmet Saz çaldı. Polis tutukladı.",
          "Beni ayda bir sinemaya götürme, Marsta bir sinemaya götür.",
          "Sevgilisi olmayanlar bul-aşık makinası alsınlar.",
          "Ben ekmek yedim Will Smith.",
          "Aaaaa siz çok terlemişsiniz durun size terlik getiriyim.",
          "Temel bir gün Fransa’ya gitmiş:”Aaa burayı da mı Sabancı aldı.” demiş.",
          "Geçen gün arkadaşlarla fırında patates yiyorduk, fırın sıcak geldi bahçeye çıktı.",
          "İngilizcem yok, tanıdığım bütün Cem'ler Türk.",
          "Sarımsağı havanda dövmüşsün, Ha Muş'ta.",
          "Dondurmayı ben yalamam, himalayalar.",
          "Kalbinin sesini dinle güzelse kaset yap",
          "Bağırsaklarda yaşayan tenya kurtları bağırsakta yaşarlar bağırmasak da yaşar.",
          "Çiçeğin biri solmuş diğeri de sağ.",
          "Aklımı kaçırdım, 100.000 TL fidye istiyorum.",
          "Altılıda 1. ayakta yattım. Yarış bitmiş uyanamadım.",
          "Ayakkabıcı sıkıyorsa alma dedi, bende korktum aldım",
          "Balık ekmek 3 liraymış, hadi balık ekelim.",
          "Bekarlık sultanlıktır, fakat er ya da geç demokrasiye geçilir",
          "Adamın kafasına buda heykeli düşmüş, başıma ''buda mı gelecekti'' demiş.",
          "Doktor bu ilAÇ dedi bizde yardım topladık.",
          "Bir sınıftaki öğrencilerin hepsinin kilosu eşitmiş,- Çünkü EŞİT AĞIRLIK sınıfıymış.",
          "Gün gelir devran döner, et döner, tavuk döner.",
          "Eti tadında ama sebzesi tadında değil.",
          "Adama evli misiniz diye sormuşlar, Adam : -hayır arsalıyım demiş.",
          "Ben ağlarım Filip-inler",
          "Lütfen sessiz olun telefon faturasını yeni yatırdım uyuyo şimdi uyanmasın",
          "Erikli su aldım, içinde Erik yoktu !",
          "Nuri ölünce Çin'e gömsünler, nuriçinde yatsın.",
          "3 Japon sırayla uçaktan atlamış. Japonlar ölmüş, sıra ise kırılmış!",
          "Yarasa yararlı bir hayvandır. Yararlı bir hayvan olmasaydı yaramasa derlerdi.",
          "Limon-Ata, muz maymuna verilir.",
          "Adam 7 gün boyunca nezle olmuş. Sıkılmış bugün de Petek’le olayım demiş.",
          "Taşımasuyla neden değirmen dönmez, çünkü taşımasu küçük bir japon kız çocuğudur.",
          "Kelebekler, köstebekler ama ben beklemem.",
          "Karar verdim 14 Şubatta bizim asansöre hediye alacağım. 10 yıldır çıkıyoruz daha birbirimiz hiç kırmadık.",
          "Bütün umutlarım suya düştü. Âmâ boğulmadılar. Çünkü onlara yüzme öğretmiştim",
          "İyi günler, Aslıyla görüşebilir miyim? Aslı evde yok! Fotokopisi var!",
          "Bu gece seni kınıyorum, çünkü kına gecesi.",
          "İzne çıkacam ama çok yüksek merdiven lazım.",
          "Sinirlenince telefonu yavaşça yere bırakıp kendimi son sürat duvara fırlatıyorum.",
          "Geçen gün bir espri patlattım 1 ölü, 2 si ağır yaralı arkadaşı hastaneye kaldırdık.",
          "Hapis yatmışım, ha temiz.. ne fark eder.",
          "Basamakta durmayın otomatik kapı çarpar, böler, karekökünü alır.",
          "Hayırlı olsun Araba almışsın. Evet aldık. Niye Araba aldın ki kendine alsaydın.",
          "Çok Makbule geçti şimdi de Fatma geçiyor.",
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          "Adamın biri ata binmeye bayılırmış, binmiş bayılmış!",
          "Adamın birinin kafası atmış, bacakları eşek!",
          "Adamın biri varmış. İkinci dönem düzeltmiş",
          "Adamın biri kızmış istemeye gelmişler.",
          "Adamın birisi televizyona çıkmış bir daha indirememişler.",
          "Adamın biri gülmüş, saksıya koymuşlar.",
          "Adamın birinin evi yanmış, odaları düz.",
          "Adam biri yerde elli bin bulmuş, aramış durmuş ayaklı bin bulamamış.",
          "Adamın gözleri dolmuş. Ayakları taksi",
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          `+Yeni yapılmış resimlere ne denir?
-‘Nev’resim.`,
          `+Rock yapmayan kişiye ne denir?
-Yaprock.`,
          `+Bir romanı 7 kız yazarsa ne olur?
-Seven kızın romanı.`,
          `+ACIkan var mı ya?
-Yok biz de TATLIkan var.`,
          `+En çok eşek yavrusu nerde bulunur? 
-Tabi ki SPA merkezinde.`,
          `+İshal olmuş böceğe ne denir?
-CIRCIR böceği.`,
          `+En ihtiyaç duyulan arı?
-BaşARI.`,
          `+Adamın tekinin kalbi çalışmıyormuş neden? 
-Çünkü taş kalpliymiş.`,
          `+Keklik askere giderse nolur?
-ER-keklik.`,
          `+Pişmemiş burgere ne denir? 
-Hamburger`,
          `+Asker adın ne?
-Emre-DERSİNİZ komutanım!`,
          `+Sen nasıl bir kulsun?
-Endoplazmik retiKULUM.`,
          `+Dört tarafı suyla çevrili çaya ne denir? 
-Adaçayı`,
          `+Masada hangi örtü kullanılmaz?
-Bitki Örtüsü.`,
          `+Terazi ile diş macunu arasındaki fark nedir? 
-Biri tartar öbürü anti tartar.`,
          `+Fransız ihtilali neye karşı yapılmıştır? 
-Sabaha karşı.`,
          `Şeytan kapıyı nasıl çalar? 
-Din den dön!`,
          `+Yıkanan ton balığına ne denir? 
-Washington.`,
          `+Çalmak fiilinin gelecek zamanı nedir? 
-Hapse girmek.`,
          `+Baykuşlar vedalaşırken ne der?
-Bay Bay Bay Kuş.`,
          `+Denizaltı'nın bir üst modeli nedir?
-Denizyedi.`,
          `+Kırmızı giyen erkeğe ne denir?
-Albay.`,
          `+Adamın biri kalemi yere atmış düşmemiş neden?
-Çünkü PİLOT kalemmiş`,
          `+Senin adın ne?
-Bill.
+Nerden bileyim be?`,
          `+Yemeğin suyuna kim bandı?
-Koli Bandı`, 
          `+Alkollü araç mı kullanıyorsunuz?
-Hayır benzinli.`,
          `+Aya ilk bayrağı kim dikmiştir? 
-Terzi.`,
          `+İneklerin sevmediği element?
-AZ-OT`,
          `+Adamın elindeki herşeye değiyormuş, elindeki neymiş?
-Magnumsa eğer herşeye değer.`,
          `+En kaslı İlyas kimdir?
-CASİLLAS`,
          `+May-mun senin olursa ne olur?
-Your-mun`,
          `+Ayda neden hayat yoktur?
-Çünkü yaşam çok pahalı, tüm fiyatlar astronomik.`,
          `+Kadının kafasına cüzdan düşmüş ve ölmüş, neden?
-Çünkü içinde ağır vasıta ehliyeti varmış.`,
          `+Bebeğin birine tır çarpmış ama ölmemiş, neden?
-Çünkü bebeğin bezi bariyerliymiş.`,
          `+Uçak düşmüş ama kimse ölmemiş, neden?
-Çünkü uçak, Pamukbank’ın üstüne düşmüş.`,
          `+Bebeğe patik giydirmeye çalışmışlar ama giymemiş neden?
-Bebek antipatikmiş.`,
          `+Hangi çiçek hem kafaya takılıp hem çamaşır yıkanır?
-FES-leğen`,
          `+Adamın birinin kafasına selpak havlu düşmüş ölmüş neden?
-Çünkü onlar halka değil fil!`,
          `+Saçı olmayan İl'e ne denir?
-İlkel.`,
          `+İngilizler kendi kıllarına ne der?
-Michael`,
          `+Taşımasu annesinden nasıl su ister?
-Mataramasuko`,
          `+Köpek hırlayınca hangi kası çalışır?
-köpek HIR-kası.`,
          `+İzinsiz satılan meşrubata ne denir?
-Gayri’meşrubat.`,
          `+Gülen ördeğe ne denir?
-KIKIR-duck.`,
          `+Gökdelenin tepesinden adamın kafasına radyo düşmüş ama adama bir şey olmamış neden?
-Radyo hafif müzik çalıyormuş`,
          `+Sen o çeteyi tanıyor musun?
-Hangi çeteyi
+Peçeteyi.`,
          `+Cin Ali mavi mürekkebe düşerse nolur?
-Blue Jean`,
          `+Örümcek adam ağ atamıyormuş neden?
-Çünkü ağ bağlantısı kopmuş.`,
          `+Gözlüklerin numaralı mı?
-Yok kale arkası`,
          `+Japonlar nasıl su dağıtır?
-SUi-CEHN.`,
          `+En güzel çay hangi dağda içilir?
-Çay bar-dağı'nda`,
          `+Sandalye boş mu?
-Hayır arçelik...`,
          `Adam bankayı soymak için içeri girer ve bağırmaya başlar: 
-Kimse kıpırdamasın, sakın kimse yerinden kıpırdamasın! 
Güvenlik elini silahına götürünce
-Sakin olun, lenslerim düştü de…`,
          `+Siviller hangi dili konuşur?
-Sivilce.`,
          `+Rüzgar antik kentte nasıl eser?
-Tarihi eser.`,
          `+Bu tay HAS-taymış.
-Hadi ya geçmiş olsun!`,
          `+Karınızla ortak özelliğiniz nedir? 
-Aynı günde evlendik!`,
          `+Adamın biri bigün kurulanamamış, neden?
-Yaş günüymüş.`,
          `+En değerli meşe hangisidir?
-İzzet Altınmeşe`,
          `+Küçük su birikintisine ne denir?
-Sucuk`,
          `+Hiç bozuk paran var mı? 
-Hayır! Hepsini tamir ettirdim canım.`];
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━              

var espri = espriler[Math.floor(Math.random() * espriler.length)];
message.edit(`${espri}`)})
}}
