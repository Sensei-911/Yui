const mongoose = require('mongoose')

const reqString = {
type: String,
required: true,
}

const profileSchema = mongoose.Schema({
userId: reqString,
guildId: reqString,
coins: {
type: Number,
required: true,
},
})

module.exports = mongoose.model('profiles', profileSchema)