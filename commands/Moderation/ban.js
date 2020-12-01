/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const Discord = require('discord.js');
       
          module.exports = {
            name: "ban",
            description: "Etiketlenen kişiyi banlayan komut",
            execute(client, message, args) {
              let neden = args.slice(0).join(" ")
          
          if(!neden) reason = `${message.author.username} tarafından banlandı.`
          if(!message.member.hasPermission("BAN_MEMBERS")) return
          if(!args[0]) return message.channel.send('Lütfen bir kullanıcı belirtin.');
          var user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            
          if (user) {
              const member = message.guild.member(user);
          if(member.id === message.author.id) return message.channel.send('Kendini banlayamazsın!');
          if (member) {
            if(member.hasPermission('ADMINISTRATOR')) return message.reply('Yetkilileri banlayamam.');
                member.ban({
                    reason: neden}).then(() => {
              message.channel.send(`**${user.tag}** Başarıyla banlandı`)})
                    .catch(err => {
              message.channel.send('Kullanıcıyı banlayamadım.');
                    console.error(err);
                  });
              } else {
              message.channel.send("Kullanıcı bu sunucuda değil!");
              }
    
}}}
