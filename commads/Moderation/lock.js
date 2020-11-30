const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    name: "lock",
    description: "Etiketlenen kişinin ismini değiştirir",
    execute(client, message, args) {
      const Discord = require('discord.js');
      if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
      
      let channel = message.mentions.channels.first() || message.channel;
      
      let reason;
      if(!message.mentions.channels.first()) {
      if(args[0]) reason = args.slice(0).join(' ');
      };
      if(message.mentions.channels.first()) {
      if(args[1]) reason = args.slice(1).join(' ');
      };
      
      let reasonn;
      if(!reason) reasonn = '. No reason given.';
      if(reason) reasonn = ` for ${reason} reason.`;
      message.channel.send(`Channel ${channel} has been locked.`).then(m => m.delete({timeout: 7000}));
      
      let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
      channel.updateOverwrite(everyone, { 'SEND_MESSAGES': false }, 'Locked by '+message.author.tag);
      channel.send(new Discord.MessageEmbed()
      .setColor('RED')
      .setTitle(channel.name+' has been Locked.')
      .setDescription(`Unfortunately, mods had to lock this channel${reasonn} Please respect this decision and it MAY be reopened in the future.`));
      
      }}