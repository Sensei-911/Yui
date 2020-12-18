const mongoose = require('mongoose');
const { mongoosepassword } = require("../config.json");
const chalk = require('chalk')
module.exports = {
    init: () => {
        const dbOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        };

        mongoose.connect(mongoosepassword, dbOptions);
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log(chalk.bold.yellow('Mongoose connection success!'))
        });

        mongoose.connection.on('err', err => {
            console.log(chalk.bold.yellow(`Mongoose connection error: \n${err.stack}`))
        });

        mongoose.connection.on('disconnected', () => {
            console.log(chalk.bold.yellow('Mongoose connection lost'))
        });
}}
