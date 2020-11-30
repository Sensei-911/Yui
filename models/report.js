const mongoose = require('mongoose')
const reportSchema = mangoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    userID: String,
    reason: String,
    reportedBy: String,
    reportedByID: String,
    time: String
})

module.exports = mangoose.model("Report", reportSchema, "reports")