/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
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
