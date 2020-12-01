/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const Discord = require('discord.js');
var images = [
    //ELİ
        "https://cdn.discordapp.com/attachments/708671674534330420/708672195035005008/GyRwi3fonEp.gif",
        "https://cdn.discordapp.com/attachments/708671674534330420/708672199757922404/mBrnHvhwv67.gif", 
        "https://cdn.discordapp.com/attachments/708671674534330420/708672206455963718/oVZjoi1WMi_.gif", 
        "https://cdn.discordapp.com/attachments/708671674534330420/708672219282145331/TKnSC7HK_wd.gif", 
        "https://cdn.discordapp.com/attachments/708671674534330420/708672167503462470/BPFNrvaOKv0.gif",
        "https://cdn.discordapp.com/attachments/708671696386654268/734205615060156436/tenor_6.gif",
        "https://cdn.discordapp.com/attachments/708671674534330420/708672190404624436/-egcN4ZQDV3.gif",
        "https://cdn.discordapp.com/attachments/708671674534330420/708672210575032370/Ss4NYrRGC0P.gif",
        "https://cdn.discordapp.com/attachments/708671674534330420/708672188718252142/EeujDLyjfSZ.gif",
        "https://cdn.discordapp.com/attachments/708671674534330420/708672201351757834/N4DsirFntJO.gif",
        "https://cdn.discordapp.com/attachments/708671674534330420/708672159421300736/ADpdMCeTpEz.gif",
        "https://cdn.discordapp.com/attachments/708671674534330420/708672191918637086/CVVSUrcwQtH.gif",
        "https://cdn.discordapp.com/attachments/708671674534330420/708672155285716992/71hjXG85aYe.gif",
        "https://cdn.discordapp.com/attachments/708671674534330420/708672249380470884/WPLZxjm8Ou9.gif",
        "https://cdn.discordapp.com/attachments/708671674534330420/708672206455963718/oVZjoi1WMi_.gif",
    //OWO
        "https://cdn.weeb.sh/images/S1E1npuvb.gif",
        "https://cdn.weeb.sh/images/SJJUhpOD-.gif", 
        "https://cdn.weeb.sh/images/Skc42pdv-.gif", 
        "https://cdn.weeb.sh/images/Hy-oQl91z.gif",
        "https://cdn.weeb.sh/images/BJMX2TuPb.gif",
        "https://cdn.weeb.sh/images/BJv0o6uDZ.gif",
        "https://cdn.weeb.sh/images/S1PCJWASf.gif",
        "https://cdn.weeb.sh/images/Sksk4l51z.gif",
        "https://cdn.weeb.sh/images/B1NwJg9Jz.gif",
        "https://cdn.weeb.sh/images/BkUJNec1M.gif",
        "https://cdn.weeb.sh/images/S1qZksSXG.gif",
        "https://cdn.weeb.sh/images/SJ3dXCKtW.gif",
        "https://cdn.weeb.sh/images/ry-r3TuD-.gif",
        "https://cdn.weeb.sh/images/SJ--2auDZ.gif",
        "https://cdn.weeb.sh/images/rymvn6_wW.gif",
        "https://cdn.weeb.sh/images/HJ8dQRYK-.gif",
        "https://cdn.weeb.sh/images/S1VEna_v-.gif",
        "https://cdn.weeb.sh/images/ryoW3T_vW.gif",
        "https://cdn.weeb.sh/images/SybPhp_wZ.gif",
        "https://cdn.weeb.sh/images/H1e7nadP-.gif",
        "https://cdn.weeb.sh/images/rJ6PWohA-.gif",
        "https://cdn.weeb.sh/images/BJLP3a_Pb.gif",
        "https://cdn.weeb.sh/images/r10UnpOPZ.gif",
        "https://cdn.weeb.sh/images/BJSdQRtFZ.gif",
        "https://cdn.weeb.sh/images/rkM4nTOPb.gif",
        "https://cdn.weeb.sh/images/ByiMna_vb.gif",
        "https://cdn.weeb.sh/images/HJce2pdv-.gif",
        "https://cdn.weeb.sh/images/rJoL2pdvb.gif",
        "https://cdn.weeb.sh/images/Sk5P2adDb.gif",
        "https://cdn.weeb.sh/images/SJn43adDb.gif",
        "https://cdn.weeb.sh/images/SkKL3adPb.gif",
        "https://cdn.weeb.sh/images/r1cB3aOwW.gif",
        "https://cdn.weeb.sh/images/Sy6Ai6ODb.gif",
        "https://cdn.weeb.sh/images/rkFSiEedf.gif",
        "https://cdn.weeb.sh/images/ryEvhTOwW.gif",
        "https://cdn.weeb.sh/images/ByurnpODW.gif",
        "https://cdn.weeb.sh/images/Sk1k3TdPW.gif",
    //ZeroTwo
        "https://cdn.zerotwo.dev/KISS/dd2bacdb-aece-4c7a-8a6c-4c39af195411.gif",
        "https://cdn.zerotwo.dev/KISS/1a43ff80-a5ca-4e78-929b-09714a51b557.gif",
        "https://cdn.zerotwo.dev/KISS/9e63b038-9fe7-4447-9ce1-499e9138e281.gif",
        "https://cdn.zerotwo.dev/KISS/81f28203-5ac6-4264-aa25-864e5f64b807.gif",
        "https://cdn.zerotwo.dev/KISS/c00a93c6-39ed-4ef1-af7d-1c4a5642e9f5.gif",
        "https://cdn.zerotwo.dev/KISS/188235a4-285e-426d-805e-9adbfdca160f.gif",
        "https://cdn.zerotwo.dev/KISS/a554b74b-cc34-49ed-9894-1df79238bb4a.gif",
        "https://cdn.zerotwo.dev/KISS/b9ce0093-781e-4206-b3f3-5275bde65d51.gif",
        "https://cdn.zerotwo.dev/KISS/98c5eaec-fc74-4750-80a9-4c5171102270.gif",
        "https://cdn.zerotwo.dev/KISS/d9cad2de-73fe-471f-8ef7-ab3602c7086e.gif",
        "https://cdn.zerotwo.dev/KISS/7ea2db51-67ef-4b30-8156-b3d448b11042.gif",
        "https://cdn.zerotwo.dev/KISS/8b7dbe1a-ad13-48bf-9142-a9db21748f12.gif",
        "https://cdn.zerotwo.dev/KISS/cec73ce9-c133-4a8a-8e40-045c878ee72c.gif",
        "https://cdn.zerotwo.dev/KISS/25ba70df-7674-406d-9978-5a22da6b2c8f.gif",
        "https://cdn.zerotwo.dev/KISS/fafacc9c-1150-4012-acf9-835a316928d6.gif",
        "https://cdn.zerotwo.dev/KISS/840f569a-10e9-4ed2-ab73-1066fa580302.gif",
        "https://cdn.zerotwo.dev/KISS/2e13b404-07b2-475d-9328-7ca95fe57bfc.gif",
        "https://cdn.zerotwo.dev/KISS/ecba70af-7f81-4541-ab00-f44b5c05c14f.gif",
        "https://cdn.zerotwo.dev/KISS/c769d606-869d-48c7-8fc7-a531010bcb27.gif",
        "https://cdn.zerotwo.dev/KISS/79a69988-60a5-443e-ac37-f80cfade643b.gif"
       ]

module.exports = {
    name: 'kiss',
    description: 'Birini öpersiniz',
    execute(client, message, args) {
        const kullanıcı = message.mentions.users.first()|| message.author   
        var image = Math.floor(Math.random() * images.length);
        
        let kiss_embed = new Discord.MessageEmbed()
            
            .setDescription(`**${message.author.username}** kullanıcısı **${kullanıcı.username}** kişisini öptü !`)
            .setColor('RED')
            .setImage(String([images[image]]))

        message.channel.send(kiss_embed);
        }};








