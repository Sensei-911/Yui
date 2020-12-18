const Discord = require("discord.js");
const weather = require("weather-js");

module.exports = {
name: 'weather',
description: 'Gives the weather information about the specified place.',
execute(client, message, args) {
weather.find({ search: args.join(" "), degreeType: "C" }, function(
err,
result) {
if (err) message.channel.send(err);
if (result === undefined || result.length === 0) {
message.channel.send(
new Discord.MessageEmbed()
.setDescription("Please enter a place.")
.setColor("RANDOM")
);
return;
}
var current = result[0].current;
var tahminler = result[0].forecast;
var location = result[0].location;
const embed = new Discord.MessageEmbed()
.setDescription(`**${current.skytext}**`)
.setTitle(current.skytext)
.setAuthor(`Weather for ${current.observationpoint}`)
.setThumbnail(current.imageUrl)
.setColor(0x00ae86)
.addField("Time Period", `UTC${location.timezone}`, true)
.addField("Degree Type", location.degreetype, true)
.addField("Temperature", `${current.temperature} Degree`, true)
.addField("Air", `${current.feelslike}`, true)
.addField("Wind", current.winddisplay)
.addField("Moisture", `${current.humidity}%`, true)
.addField("Highest°", tahminler[0].high, true)
.addField("Lowest°", tahminler[0].low, true)
.addField("Moisture", `${current.humidity}%`, true)
.setTimestamp()
message.channel.send({ embed });
  
})}}