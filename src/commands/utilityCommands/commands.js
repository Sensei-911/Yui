module.exports = {
name: "commands",
cooldown: 2,
permissions: ["sendMessages", "embedLinks"],
execute(Yui, message, args) {
if(!args[0]) {
message.channel.createMessage({ embed: { 
author: 
{ 
name: "Yui's commands.", 
icon_url: Yui.user.avatarURL
}, 
description: `\`\`\`\nyui commands <group>\n\`\`\``, 
color: 0x0ffff, 
fields :[
{ name: '🛡 Moderation', value: '5 commands', inline:true }, 
{ name: '💰 Currency', value: '9 commands',  inline:true  }, 
{ name: '🔧 Utility', value: '13 commands', inline:true }, 
{ name: '🙂 Roleplay', value: '13 commands', inline:true }, 
{ name: '🔞 Nsfw', value: '16 commands', inline:true }, 
{ name: '😅 Fun', value: '6 commands', inline:true }, 
{ name: '🐣 Animals', value: '6 commands', inline:true }
]

}});
}

else if(args[0].toLowerCase() == 'animals') {
message.channel.createMessage({ embed: { color: 0x0ffff, title: 'Animal Commands', description: "aww, birb, cat, dog, fox, redpanda"}})
}

else if(args[0].toLowerCase() == 'currency') { 
message.channel.createMessage({ embed: { color: 0x0ffff, title: 'Economy Commands', description: "balance, flip, gamble, getmoney, give, highlow, roulette, slots, snakeeyes"}})
}

else if(args[0].toLowerCase() == 'fun') { 
message.channel.createMessage({ embed: { color: 0x0ffff, title: 'Fun Commands', description: "8ball, gif, guess, meme, say, ship"}})
}

else if(args[0].toLowerCase() == 'moderation') { 
message.channel.createMessage({ embed: { color: 0x0ffff, title: 'Moderation Commands', description: "clear, kick, poll, slowmode, unban"}})
}

else if(args[0].toLowerCase() == 'nsfw') { 
if(message.channel.nsfw === true) { message.channel.createMessage({ embed: { color: 0x0ffff, title: 'Nsfw Commands', description: 'anal, blowjob, boobs, cumsluts, ero, feet, femdom, hentai, kitsune, lesbian, neko, pussy, spank, tits, trap, yuri' }})}
if(message.channel.nsfw === false) { message.channel.createMessage({ embed: { color: 0xFF0000, title:'NSFW not allowed here', description:'You must switch to an NSFW channel to view commands!'}})}}

else if(args[0].toLowerCase() == 'roleplay') { 
message.channel.createMessage({ embed: { color: 0x0ffff, title: 'Roleplay Commands', description: "cry, cuddle, happy, hug, kiss, lick, pat, sad, shoot, shy, slap, smug, tickle"}})
}

else if(args[0].toLowerCase() == 'utility') { 
message.channel.createMessage({ embed: { color: 0x0ffff, title: 'Utility Commands', description: "8ball, avatar, emoji, links, password, ping, prefix, server, stats, uptime, vote"}})
}

}}