module.exports = {
name: 'links',
cooldown: 2,
permissions: ["sendMessages", "embedLinks"],
aliases: ['invite','support','server'],
execute(Yui, message, args) {
message.channel.createMessage({ embed: { color: 0x0ffff, description:'[Invıte](https://discord.com/oauth2/authorize?client_id=760244924188327977&scope=bot&permissions=2146954743) | [Support Server](https://discord.com/invite/pVAQPq79uQ) | [Website](https://yuibot.icu)'} })
}}