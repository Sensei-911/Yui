const { MessageEmbed } = require("discord.js");
module.exports = {
name: "help",
cooldown: 3,
aliases: ["yardım"],
description: "Bu komut.",
execute(client, message) {
const help_category = message.content.trim().split(/ +/g);
if(!help_category[2]) {
let help_embed = new MessageEmbed()
.setTitle("Yui-Bot Command List")
.setDescription("Here is all available commands!")
.setColor('RANDOM')
.addField("🛡 Moderation","`yui help moderation`",true)
.addField("📷 Image","`yui help image`",true)
.addField("😄 Fun","`yui help fun`",true)
.addField("😏 Nsfw","`yui help nsfw`",true)
.addField("🛠 Utility","`yui help utility`",true)
.addField("🐶 Animals","`yui help animals`",true)
.addField("🎵 Music","`yui help music`",true)
.addField("🎲 Games","`yui help games`",true)
.addField("🎭 Roleplay","`yui help roleplay`",true)
.setFooter("Visit our [website](https://yuibot.icu)")
message.channel.send(help_embed);
return
}
if(help_category[2] == 'image'){
let image_embed = new MessageEmbed()
.setTitle("Image Commands")
.setDescription("`banner`,`changemymind`,`trumpsaying`")
.setColor('RANDOM')
.setFooter('use yui before each command!')
message.channel.send(image_embed);
return
}
if(help_category[2] == 'moderation'){
let moderation_embed = new MessageEmbed()
.setTitle("Moderation Commands")
.setDescription("`ban`,`clear`,`kick`,`lock`,`unlock`,`poll`,`setnick`,`slowmode`,`write`,`createcategory`,`createvoice`")
.setColor('RANDOM')
.setFooter('use yui before each command!')
message.channel.send(moderation_embed);
return
}
if(help_category[2] == 'music'){
let music_embed = new MessageEmbed()
.setTitle("Music Commands")
.setDescription("`loop`,`lyrics`,`nowplaying`,`pause`,`play`,`playlist`,`prunning`,`queue`,`remove`,`resume`,`search`,`shuffle`,`skip`,`skipto`,`stop`,`volume`")
.setColor('RANDOM')
.setFooter('use yui before each command!')
return
}
if(help_category[2] == 'nsfw'){
let nsfw_embed = new MessageEmbed()
.setTitle("Nsfw Commands")
.setDescription("`4k`,`anal`,`bdsm`,`hentai`,`yaoi`")
.setColor('RANDOM')
.setFooter('use yui before each command!')
message.channel.send(nsfw_embed);
return
}
if(help_category[2] == 'roleplay'){
let roleplay_embed = new MessageEmbed()
.setTitle("Roleplay Commands")
.setDescription("`cry`,`hug`,`kiss`,`sad`,`shoot`,`shy`,`slap`")
.setColor('RANDOM')
.setFooter('use yui before each command!')
message.channel.send(roleplay_embed);
return
}
if(help_category[2] == 'utility'){
let information_embed = new MessageEmbed()
.setTitle("Utility Commands")
.setDescription("`avatar`,`calculate`,`donate`,`invite`,`password`,`ping`,`privacy`,`server`,`support`,`user`,`vote`,`weather`,`website`")
.setColor('RANDOM')
.setFooter('use yui before each command!')
message.channel.send(information_embed);
return
}
if(help_category[2] == 'games'){
let games_embed = new MessageEmbed()
.setTitle("Game Commands")
.setDescription("`fish`,`guess`")
.setColor('RANDOM')
.setFooter('use yui before each command!')
message.channel.send(games_embed);
return
}
if(help_category[2] == 'fun'){
let fun_embed = new MessageEmbed()
.setTitle("Fun Commands")
.setDescription("`8ball`,`anime`,`choco`,`clap`,`coinflip`,`greentext`,`joke`,`lenny`,`love`,`meme`,`owo`,`penis`,`roll`,`spoiler`")
.setColor('RANDOM')
.setFooter('use yui before each command!')
message.channel.send(fun_embed);
return
}
if(help_category[2] == 'animals'){
let animals_embed = new MessageEmbed()
.setTitle("Animal Commands")
.setDescription("`cat`")
.setColor('RANDOM')
.setFooter('use yui before each command!')
message.channel.send(animals_embed);
return
}
else{
let help_embed = new MessageEmbed()
.setTitle("Yui-Bot Command List")
.setDescription("Here is all available commands!")
.setColor('RANDOM')
.addField("🛡 Moderation","`yui help moderation`",true)
.addField("📷 Image","`yui help image`",true)
.addField("😄 Fun","`yui help fun`",true)
.addField("😏 Nsfw","`yui help nsfw`",true)
.addField("🛠 Utility","`yui help utility`",true)
.addField("🐶 Animals","`yui help animals`",true)
.addField("🎵 Music","`yui help music`",true)
.addField("🎲 Games","`yui help games`",true)
.addField("🎭 Roleplay","`yui help roleplay`",true)
.setFooter("Visit our [website](https://yuibot.icu)")
message.channel.send(help_embed);
return
}

}}

