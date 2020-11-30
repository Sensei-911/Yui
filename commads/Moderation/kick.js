const Discord = require('discord.js');
       
module.exports = {
      name: "kick",
      description: "Etiketlenen kişiyi atan komut",
      execute(client, message, args) {
              let neden = args.slice(1).join(" ")
          if(!neden) reason = `${message.author.username} tarafından atıldı.`
          if(!message.member.hasPermission("KICK_MEMBERS")) return
          if(!args[0]) return message.channel.send('Lütfen bir kullanıcı belirtin.');
          var user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            
          if (user) {
              const member = message.guild.member(user);
          if(member.id === message.author.id) return message.channel.send('Kendini atamazsın!');
          if (member) {
            if(member.hasPermission('ADMINISTRATOR')) return message.reply('Yetkilileri atamam.');
                member.kick({
                    reason: neden}).then(() => {
              message.channel.send(`**${user.tag}** Başarıyla banlandı`)})
                    .catch(err => {
              message.channel.send('Kullanıcıyı atamadım.');
                    console.error(err);
                  });
              } else {
              message.channel.send("Kullanıcı bu sunucuda değil!");
              }
    
            }}}
            
            