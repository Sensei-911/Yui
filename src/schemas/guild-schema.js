const mongoose = require('mongoose')

const reqString = {
type: String,
required: true,
}

const guildSchema = mongoose.Schema({
id: reqString,
prefix: reqString
})

module.exports = mongoose.model('guilds', guildSchema)