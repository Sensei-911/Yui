const Discord = require('discord.js');

module.exports = {
name: 'fish',
cooldown: 3,
description: 'Sending random fishs.',
execute(client, message, args) {
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
var fishs = ['Kavgacı siyam balığı','Sazan','Blobfish','Lepistes','Japon balığı','Nil Tilapyası','Güneş balığı','Turna balığı','Mavi Cerrah balığı','Bayağı yayın balığı','Asya Arowanası','Channa Striata','Salmo Salar M. Sebago','Kılıç balığı','Megalodon','Lambuka','Lüfer','Büyük kurdela balığı','Palyaço balığı','Candiru','Atlantik Golyat Orfozu','İri Ağızlı Siyah Levrek','Neon tetra','Büyük beyaz köpek balığı','Uskumru','Gökkuşağı Alabalığı','Çipura','Uzakdoğu Kedi Balığı','Palamut','Büyük Camgöz','Balina Köpek Balığı','Tatlısu levreği','Melek balığı','Lepomis Macrochirus','Kırmızı Levrek','Sargan','Leopar Vatoz','Fener balığı','Mavi Yüzgeçli Atlantik Orkinosu','Barramundi','Mersin Morinası','Astronot balığı','Atlantik Morinası','Arapaima Gigas','Dev ağızlı köpekbalığı','Siyah Moli','Sudak balığı','Oncorhynchus keta','Dubar','Karagöz istavrit','Volitan Aslan Balığı',]
var fish = fishs[Math.floor(Math.random() * fishs.length)];
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
if (fish == 'Kavgacı siyam balığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://cdn.yenicaggazetesi.com.tr/news/416929.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Sazan') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://baliklar.gen.tr/images/sazan-baligi.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Blobfish') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://elhstalon.net/wp-content/uploads/2019/09/Blobfish.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Lepistes') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://www.sametsahin.com.tr/wp-content/uploads/2018/12/full-red-lepistes-1.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Japon balığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://rasyonalist.org/wp-content/uploads/2017/08/goldfish-japon-bal%C4%B1%C4%9F%C4%B1-cover.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Nil Tilapyası') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://w7.pngwing.com/pngs/64/479/png-transparent-oily-fish-gilt-head-bream-aquaculture-agriculture-aquaculture-seafood-fauna-fish-products.png')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Güneş balığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://cdn.karar.com/gallery/2019/03/1509098/gunes-baligi-4.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Turna balığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://www.albashop.com.tr/Data/Blog/3.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Mavi Cerrah balığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://sc01.alicdn.com/kf/UT8s95PXvxXXXagOFbXn.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Bayağı yayın balığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://www.hayattakalma.net/wp-content/uploads/2018/01/yayin-baligi-avi-03.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Asya Arowanası') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://alternatifdunyam.com/wp-content/uploads/2020/07/Scleropages-formosus-800x445.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Channa Striata') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://i.ytimg.com/vi/Sei8iqamFTs/maxresdefault.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Salmo Salar M. Sebago') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('http://www.ittiofauna.org/webmuseum/pesciossei/salmoniformes/salmonidae/salmoninae/salmo/salmosalar/images/salmo_salar05-500.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Kılıç balığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://i1.wp.com/www.adrasanbalik.com/wp-content/uploads/2015/02/305-Tetrapturus-betone-Rafinesque.jpg?fit=700%2C320&ssl=1')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Megalodon') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://www.nhm.ac.uk/content/dam/nhmwww/discover/megalodon/megalodon_warpaint_shutterstock-full-width.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Lambuka') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('http://www.izmirsuurkoop.com/wp-content/uploads/2019/11/lambuka-baligi-ozellikleri-avi-ve-pisirme-teknikleri-1.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Lüfer') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://www.birbes.com/wp-content/uploads/2018/06/L%C3%BCfer-Bal%C4%B1%C4%9F%C4%B1-Faydalar%C4%B1-Nelerdir-Hangi-Denizde-Bulunur-Hangi-Ayda-Tazedir.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Büyük kurdela balığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://www.denizhaber.net/d/news/8457.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Palyaço balığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://www.bipalyaco.com/wp-content/uploads/2017/04/palyaco-baligi-nedir-1.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Candiru') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://ychef.files.bbci.co.uk/624x351/p03d9r46.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Atlantik Golyat Orfozu') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://myanimals.com/tr/wp-content/uploads/2019/11/dev-balik.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'İri Ağızlı Siyah Levrek') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://www.onthewater.com/wp-content/uploads/2016/05/Black-Sea-Bass.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Neon tetra') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Neonsalmler_Paracheirodon_innesi.jpg/220px-Neonsalmler_Paracheirodon_innesi.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Büyük beyaz köpek balığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://seyler.ekstat.com/img/max/800/Z/ZG7dn8GnyyMlGDY6-636728783718278497.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Uskumru') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://i2.milimaj.com/i/milliyet/75/1200x675/5e9c9fe85542801c74f2a485.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Gökkuşağı Alabalığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('http://yilmazalabalik.com/wp-content/uploads/2018/12/gokkusagi-1.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Çipura') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://iasbh.tmgrup.com.tr/7f2c8a/812/467/22/0/873/489?u=https://isbh.tmgrup.com.tr/sbh/2018/04/27/cipura-1524818794050.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Uzakdoğu Kedi Balığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/2/2c/Ameiurus_catus.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Palamut') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://i4.hurimg.com/i/hurriyet/75/750x422/5be3ef3c7af5072140e6a058.jpeg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Büyük Camgöz') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://i.pinimg.com/236x/85/69/91/856991aacc0d53c3c7113700792ebdbf.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Balina Köpek Balığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/1/18/Rhincodon_typus.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Tatlısu levreği') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('http://www.yabanclub.com/wp-content/uploads/2012/12/Sudak.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Melek balığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://www.petburada.com/Uploads/Blog/Melek-Baligi-5dd1.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Lepomis Macrochirus') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Bluegill_%28fish%29.jpg/220px-Bluegill_%28fish%29.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Kırmızı Levrek') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://s.alicdn.com/@sc01/kf/Ub871f726000f4113b2806643a2f89d29x.jpg_300x300.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Sargan') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Sargan.jpg/800px-Sargan.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Leopar Vatoz') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://www.canlipetshop.com/image/cache/catalog/leopar-vatoz9-800x600.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Fener balığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://cdn.yemek.com/mncrop/500/333/uploads/2015/11/fener-baligi.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Mavi Yüzgeçli Atlantik Orkinosu') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://img.paratic.com/dosya/2015/05/dunyanin-en-pahali-ton-baligi.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Barramundi') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://s3.amazonaws.com/divcomplatform/seafoodsource.com/images/6047ebbc2c9663a2980442747f380a60.jpeg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Mersin Morinası') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://foto.haberler.com/haber/2017/02/23/prof-dr-serap-ustaoglu-mersin-baliginin-2-tur-2-9296369_o.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Astronot balığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://i.pinimg.com/originals/f9/fb/21/f9fb2185a66b58d3a54127ade00b10f2.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Atlantik Morinası') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://myanimals.com/tr/wp-content/uploads/2019/12/morina-470x305.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Arapaima Gigas') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Arapaima_gigas_captivity.jpg/220px-Arapaima_gigas_captivity.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Dev ağızlı köpekbalığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://img.piri.net/mnresize/840/-/resim/imagecrop/2016/04/17/10/12/resized_a6673-c4bb685f60kezgoruntulendi6887959.jpeg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Siyah Moli') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://aquaist.com/wp-content/uploads/2019/01/siyah-moli-baligi-b%C5%9Facl-molly-1024x681.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Sudak balığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://www.balikye.com/api/image/39774.jpg?w=400')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Oncorhynchus keta') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://upload.wikimedia.org/wikipedia/commons/9/91/Oncorhynchus_keta.jpeg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Dubar') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://static.educalingo.com/img/tr/800/dubar.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Karagöz istavrit') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://img.bilgihanem.com/wp-content/uploads/2017/03/istavrit-baligi-hakkinda-bilgi.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
if (fish == 'Volitan Aslan Balığı') {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches ${fish}!`)
.setThumbnail('https://foto.haberler.com/haber/2019/10/31/ayagina-dusen-aslan-baligi-olduruyordu-12569194_9119_amp.jpg')
.setColor('RANDOM')
message.channel.send(embed)
return
}
else {
let embed = new Discord.MessageEmbed()
.setTitle("Catch Fish")
.setDescription(`${message.author.username} catches nothing woah!`)
.setThumbnail('https://w7.pngwing.com/pngs/273/858/png-transparent-question-mark-computer-icons-exclamation-mark-desktop-question-mark-emoji-angle-text-logo.png')
.setColor('RANDOM')
message.channel.send(embed)
return
}

}}