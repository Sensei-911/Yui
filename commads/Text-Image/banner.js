const Discord = require('discord.js');

module.exports = {
    name: 'banner',
    description: 'Etiketlenen kişinin avatarını veren komut',
    execute(client, message, args) {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)
  const linqo = `https://dummyimage.com/2000x500/33363c/ffffff&text=${yazi}`
  .replace(' ', '+')

  let banner_embed = new Discord.MessageEmbed()
  .setTitle("Banner!")
  .setColor("#2ECC71")
  .setImage(linqo)
  .setFooter(`${message.author.username} tarafından istendi`)
  message.channel.send(banner_embed)

}}