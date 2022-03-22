const mongoose = require("mongoose");

const required = {
    string: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    boolean: {
        type: Boolean,
        required: true
    }
}

const schemas = {
    daily: mongoose.Schema({
        id: required.string,
        lastCollected: required.number
    }),
    guild: mongoose.Schema({
        id: required.string,
        prefix: required.string
    }),
    profile: mongoose.Schema({
        id: required.string,
        coins: required.number
    })
}

module.exports = {
    daily: mongoose.model('dailies', schemas.daily),
    profile: mongoose.model('profiles', schemas.profile),
    guild: mongoose.model('guilds', schemas.guild)
}