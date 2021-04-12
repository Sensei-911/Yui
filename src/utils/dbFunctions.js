const mongo = require('./mongoose.js')
const profileSchema = require('../schemas/profile-schema')
const guildSchema = require('../schemas/guild-schema')
const coinsCache = {} 

module.exports.getCoins = async (id) => {
const cachedValue = coinsCache[`${id}`]
if (cachedValue) return cachedValue

return await mongo().then(async (mongoose) => {
try {
const result = await profileSchema.findOne({ id })
let coins = 0
if (result) coins = result.coins
else {
await new profileSchema({ id, coins }).save()
}
coinsCache[`${id}`] = coins
return coins
} finally {
mongoose.connection.close()
}

})}

module.exports.addCoins = async (id, coins) => {
return await mongo().then(async (mongoose) => {
try {
const result = await profileSchema.findOneAndUpdate({ id }, { id, $inc: { coins } }, { upsert: true, new: true })
coinsCache[`${id}`] = result.coins
return result.coins
} finally {
mongoose.connection.close()
}
    
})}

module.exports.removeCoins = async (id, coins) => {
return await mongo().then(async (mongoose) => {
try {
const result = await profileSchema.findOneAndUpdate({ id }, { id, $inc: { coins: -coins } }, { upsert: true, new: true })
coinsCache[`${id}`] = result.coins
return result.coins
} finally {
mongoose.connection.close()
}
    
})}

module.exports.getPrefix = async (id) => {
const cachedValue = coinsCache[`${id}`]
if (cachedValue) return cachedValue

return await mongo().then(async (mongoose) => {
try {
const result = await guildSchema.findOne({ id })
let prefix = require('../config.json').prefix
if (result) prefix = result.prefix
else {
let prefix = require('../config.json').prefix
}
coinsCache[`${id}`] = prefix
return prefix
} finally {

}

})}

module.exports.updatePrefix = async (id, prefix) => {
return await mongo().then(async (mongoose) => {
try {
const result = await guildSchema.findOneAndUpdate({ id }, { id, prefix }, { upsert: true, new: true })
coinsCache[`${id}`] = result.prefix
return result.prefix
} finally {
mongoose.connection.close()
}
    

})}