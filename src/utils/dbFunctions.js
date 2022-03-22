const mongo = require('./mongoose.js')
const schemas = require("../../schemas.js");
const cache = {}

module.exports = Yui => ({
    getCoins: async function getCoins(id) {
        const cachedValue = cache[`${id}`]
        if (cachedValue) return cachedValue

        return await mongo().then(async (mongoose) => {
            try {
                const result = await schemas.profile.findOne({
                    id
                })
                let coins = 0
                if (result) coins = result.coins
                else {
                    await new profileSchema({
                        id,
                        coins
                    }).save()
                }
                cache[`${id}`] = coins
                return coins
            } finally {
                mongoose.connection.close()
            }
        })
    },
    addCoins: async function addCoins(id, coins) {
        return await mongo().then(async (mongoose) => {
            try {
                const result = await schemas.profile.findOneAndUpdate({
                    id
                }, {
                    id,
                    $inc: {
                        coins
                    }
                }, {
                    upsert: true,
                    new: true
                })
                cache[`${id}`] = result.coins
                return result.coins
            } finally {
                mongoose.connection.close()
            }
        })
    },
    getDaily: async function getDaily(id) {
        return await mongo().then(async (mongoose) => {
            try {
                const result = await schemas.daily.findOne({
                    id
                })
                let lastCollected = 0
                if (result) lastCollected = result.lastCollected
                else {
                    await new dailySchema({
                        id,
                        lastCollected
                    }).save()
                }
                return lastCollected
            } finally {
                mongoose.connection.close()
            }
        })
    },
    claimDaily: async function claimDaily(id) {
        return await mongo().then(async (mongoose) => {
            try {
                const currentDate = Date.now()
                const result = await schemas.daily.findOneAndUpdate({
                    id
                }, {
                    id,
                    $set: {
                        lastCollected: currentDate
                    }
                }, {
                    upsert: true,
                    new: true
                })
                return result.lastCollected
            } finally {
                mongoose.connection.close()
            }
        })
    },
    removeCoins: async function removeCoins(id, coins) {
        return await mongo().then(async (mongoose) => {
            try {
                const result = await schemas.profile.findOneAndUpdate({
                    id
                }, {
                    id,
                    $inc: {
                        coins: -coins
                    }
                }, {
                    upsert: true,
                    new: true
                })
                cache[`${id}`] = result.coins
                return result.coins
            } finally {
                mongoose.connection.close()
            }
        })
    },
    getPrefix: async function getPrefix(id) {
        const cachedValue = cache[`${id}`]
        if (cachedValue) return cachedValue

        return await mongo().then(async (mongoose) => {
            try {
                const result = await schemas.guild.findOne({
                    id
                })
                let prefix = require('../../config.json').prefix
                if (result) prefix = result.prefix
                else {
                    let prefix = require('../../config.json').prefix
                }
                cache[`${id}`] = prefix
                return prefix
            } finally {

            }
        })
    },
    updatePrefix: async function updatePrefix(id, prefix) {
        return await mongo().then(async (mongoose) => {
            try {
                const result = await schemas.guild.findOneAndUpdate({
                    id
                }, {
                    id,
                    prefix
                }, {
                    upsert: true,
                    new: true
                })
                cache[`${id}`] = result.prefix
                return result.prefix
            } finally {
                mongoose.connection.close()
            }
        })
    }
})