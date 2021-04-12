const mongoose = require('mongoose')

const reqString = {
type: String,
required: true,
}

const profileSchema = mongoose.Schema({
id: reqString,
coins: {
type: Number,
required: true,
},
})

module.exports = mongoose.model('profiles', profileSchema)