module.exports = {
name: "commands",
cooldown: 3,
aliases: ['helpme','command','cmd','cmds'],
description: "See a list of commands available, all on discord. If you run yui help <name of a command> It will also give you more info such as a description",
execute(yui, message,args) {
if(!args[0]) {
message.channel.send({embed: {author: { name: "Yui's commands.", icon_url: yui.user.displayAvatarURL()}, description: `\`\`\`\nyui commands <group>\n\`\`\``, color: '#00FFFF', fields:[{name: '🛡 Moderation', value:'7 commands', inline:true},{name:'💰 Economy', value: '2 commands', inline:true},{ name: '🔧 Utility', value: '11 commands', inline:true},{name: '🙂 Roleplay', value: '13 commands', inline:true},{name: '🔞 Nsfw', value: '16 commands', inline:true},{name: '🎵 Music', value: '14 commands', inline:true},{name: '📹 Image', value: '3 commands', inline:true},{name: '😅 Fun', value: '8 commands', inline:true},{name: '🐣 Animal', value: '4 commands', inline:true}]}});
}
else if(args[0].toLowerCase() == 'moderation') {
message.channel.send({ embed: {  color: '#00FFFF', title: 'Moderation Commands', description: "clear, kick, lock, poll, setnick, slowmode, unlock"}});
}
else if(args[0].toLowerCase() == 'music') {
message.channel.send({ embed: { color: '#00FFFF', title: 'Music Commands', description: "clearqueue, filter, loop, nowplaying, pause, play, queue, resume, search, shuffle, skip, stop, volume, w-filters"}})
}
else if(args[0].toLowerCase() == 'image') {
message.channel.send({ embed: { color: '#00FFFF', title: 'Image Commands', description:'banner, changemymind, trumpsaying'}})
}
else if(args[0].toLowerCase() == 'nsfw'){
if(message.channel.nsfw === true) { message.channel.send({ embed: { color: '#00FFFF', title: 'Nsfw Commands', description: 'anal, blowjob, boobs, cumsluts, ero, feet, femdom, hentai, kitsune, lesbian, neko, pussy, spank, tits, trap, yuri'}})}
if(message.channel.nsfw === false) { message.channel.send({ embed: { description:'Nsfw not allowed here', color: '#00FFFF'}})}
}
else if(args[0].toLowerCase() == 'roleplay'){
message.channel.send({ embed: { title: 'Roleplay Commands', description: "cry, cuddle, happy, hug, kiss, lick, pat, sad, shoot, shy, slap, smug, tickle", color: '#00FFFF'}});
}
else if(args[0].toLowerCase() == 'utility'){
message.channel.send({ embed: { title: 'Utility Commands', description: "avatar, command, emoji, password, ping, privacy, uptime, urban, vote", color: '#00FFFF'}});
}
else if(args[0].toLowerCase() == 'fun'){ 
message.channel.send({ embed: { title: 'Fun Commands', description: "8b, anime, choco, guess, meme, ship, spoiler, write", color: '#00FFFF'}});
}
else if(args[0].toLowerCase() == 'animal'){
message.channel.send({ embed: { title: 'Animal Commands', description: "aww, cat, dog, fox", color: '#00FFFF'}});
}
else if(args[0].toLowerCase() == 'economy'){
message.channel.send({ embed: { title: 'Economy Commands', description: "balance, getmoney", color: '#00FFFF'}});
}

}}