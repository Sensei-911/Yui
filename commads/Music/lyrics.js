const { MessageEmbed } = require("discord.js");
const lyricsFinder = require("lyrics-finder");

module.exports = {
  name: "lyrics",
  aliases: ["sözler"],
  description: "Şarkının sözlerini gösterir.",
  async execute(client, message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("Şu an bir şarkı oynamıyor.").catch(console.error);

    let lyrics = null;

    try {
      lyrics = await lyricsFinder(queue.songs[0].title, "");
      if (!lyrics) lyrics = `${queue.songs[0].title} için her hangi bir şarkı sözü bulunamadı`;
    } catch (error) {
      lyrics = `${queue.songs[0].title} için her hangi bir şarkı sözü bulunamadı .`;
    }

    let lyricsEmbed = new MessageEmbed()
      .setTitle("Şarkı sözü")
      .setColor("#F8AA2A")
      .setTimestamp();

    if (lyricsEmbed.description.length >= 2048)
      lyricsEmbed.description = `${lyricsEmbed.description.substr(0, 2045)}...`;
    return message.channel.send(lyricsEmbed).catch(console.error);
  }};
