/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
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
