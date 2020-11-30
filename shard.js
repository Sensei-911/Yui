const chalk = require('chalk');
const { ShardingManager } = require('discord.js');

const bumbe = new ShardingManager('./chika.js', { 
	totalShards: 4, //Auto yazılabilir veya farklı bir sayı yazabilirsiniz.
    token: "NzYwMjQ0OTI0MTg4MzI3OTc3.X3JPQg.kvo4nwgQTsfFdVLtPCt0ClSlfVw" 
});
bumbe.spawn();

bumbe.on('shardCreate', shard => {
    console.log(chalk.bold.redBright("[SHARD ID :]   "+shard.id));
});
