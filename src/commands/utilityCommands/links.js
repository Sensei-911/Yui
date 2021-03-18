module.exports = {
name: 'links',
description: 'Get an invite for the bot or to the support server. Also some extra links to use.',
cooldown: 1,
aliases: ['invite','support','server'],
execute(yui, message, args) {
message.channel.send({embed: { color: '#00FFFF', fields: {name:'Links',value:'[Invıte](https://discord.com/oauth2/authorize?client_id=760244924188327977&scope=bot&permissions=2146954743) | [Support Server](https://discord.com/invite/pVAQPq79uQ) | [Website](https://yuibot.icu)'}
}})
}}