module.exports = {
    name: 'slowmode',
    cooldown: 5,
    execute(client, message, args) {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return
    let slow = args[0]
    //if (slow === 'off') {duration = 0}
    if (!slow) return message.channel.send("Miktar belirtmediniz!")
    if (slow > 21600) return message.channel.send("En fazla 6 saat yavaş mod koyabilirsiniz!")
    if(isNaN(slow)) return message.channel.send(`Bu bir sayı değil!`)
    
    message.channel.setRateLimitPerUser(slow).then(message.channel.send(`Yavaş mod ${slow} saniyeye ayarlandı!`))
  }}
