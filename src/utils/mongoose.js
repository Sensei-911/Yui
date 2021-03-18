const mongoose = require('mongoose')
const { MONGOOSE_PASS } = require('../secrets/secrets.json')

module.exports = async () => {
await mongoose.connect(MONGOOSE_PASS, {
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify:false
})
return mongoose

}