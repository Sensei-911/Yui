const { Master: Sharder } = require('eris-sharder')
const config = require('./secrets/config.json')
const Master = new Sharder(`Bot ${config.token}`, '\\src\\mainClass.js', { 
name: "Yui",
stats: true,
clusters: 1,
shards: 5,
debug: true
});