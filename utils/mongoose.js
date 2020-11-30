const mongoose = require('mongoose');
module.exports = {
    init: () => {
        const dbOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        };

        mongoose.connect('Your connection url goes here', dbOptions);
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('Mongoose bağlantısı başarılı!');
        });

        mongoose.connection.on('err', err => {
            console.error(`Mongoose bağlantı hatası: \n${err.stack}`);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('Mongoose bağlantısı kayboldu');
        });
}}
