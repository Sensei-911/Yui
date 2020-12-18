const chalk = require('chalk');
const { ShardingManager } = require('discord.js');
const bumbe = new ShardingManager('./index.js', { 
totalShards: 3,
});
bumbe.spawn();
bumbe.on('shardCreate', shard => {
console.log(chalk.bold.redBright(`[SHARD ID :]   ${shard.id}`));
});
