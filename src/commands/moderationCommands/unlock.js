module.exports = {
  name: "unlock",
  memberPermissions: ['manageChannels'],
  permissions: ['manageChannels', 'sendMessages'],
  execute(Yui, message, args) {
    const channel = message.channel;
    if (!channel) return message.channel.createMessage(`Please specify a channel!`)

    let reason = args.slice(0).join(' ')
    if (!reason) reason = `Unlockked by ${message.author.username}#${message.author.discriminator}`;

    let previousOverwrites = channel.permissionOverwrites.has(message.channel.guild.id) ? channel.permissionOverwrites.get(message.channel.guild.id) : {
      json: {},
      allow: 0,
      deny: 0
    };
    if (previousOverwrites.json.sendMessages === true || previousOverwrites.json.sendMessages === undefined) {
      return message.channel.createMessage('this channel is already unlocked ya doofus');
    }

    channel.editPermission(message.guildID, previousOverwrites.allow | 2048n, previousOverwrites.deny, "role", reason);
    channel.createMessage(`<:greentick:829278953168044052> Unlocked **${channel.name}.**`)

  }
}