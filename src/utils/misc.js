const Eris = require('eris')
const cooldowns = new Eris.Collection();
const logger = require("./logger.js");

module.exports.random = (min, max) => {
    max = max + 1
    max -= min
    const random = Math.floor(Math.random() * max) + min
    return random
}

module.exports.react = async (react1, react2, msg) => {
    await msg.addReaction(react1)
    await msg.addReaction(react2)
}

module.exports.isOdd = async (num) => {
    if ((num % 2) == 0) return false
    else if ((num % 2) == 1) return true
}

module.exports.jsonData = async (path, data) => {
    const json = require(path)
    const filter = json[data]
    const image = filter[Math.floor(Math.random() * filter.length)]
    return image
}

module.exports.getColor = (color, method) => {
    const Color = require('color')
    const colors = {
        red: 16711680,
        green: 5025616,
        yellow: 16776960,
        cyan: 65535
    }
    let executedColor

    if (method.toLowerCase() == 'default' || !method || !color) { // default
        executedColor = 7506394
    }
    if (method.toLowerCase() == 'hex') { // byHex
        var executeHexColor = Color(color)
        executedColor = executeHexColor.rgbNumber()
    }
    if (method.toLowerCase() == 'situation') {
        if (color.toLowerCase() == 'positive') executedColor = colors.green
        if (color.toLowerCase() == 'neutral') executedColor = colors.yellow
        if (color.toLowerCase() == 'negative') executedColor = colors.red
    }

    return executedColor
}

module.exports.checkCurrency = async (argPosition, argPosition2, balance, args, argMessage) => {
    var currencyBoolean = true
    var message

    if (!args[argPosition]) {
        message = argMessage ? argMessage : 'Specify an amount.';
        currencyBoolean = false
    }

    if (isNaN(args[argPosition2]) === false) {
        var amount = parseInt(args[argPosition2])
    } else {
        message = 'Amount is not a number.'
        currencyBoolean = false
    }

    if (amount < 0 || amount < 100 || amount > 250000) {
        message = 'You must bet between 100 and 250,000.';
        currencyBoolean = false
    } else if (amount > balance) {
        message = 'You are betting more than you have.';
        currencyBoolean = false
    }

    return {
        boolean: currencyBoolean,
        message: message,
        amount: amount
    }
}

module.exports.checkCooldown = (name, cooldownAmount, id) => {
    if (!name || !cooldownAmount || !id) {
        logger.error("misc", '"checkCooldown" fonksiyonuna bazı veriler tanımlanmadı.');
        process.exit(1);
    }

    if (!cooldowns.has(name)) {
        cooldowns.set(name, new Eris.Collection())
    }

    const now = Date.now()
    const timestamps = cooldowns.get(name);
    if (timestamps.has(id)) {
        const expirationTime = timestamps.get(id) + cooldownAmount;
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return timeLeft;
        }
    } else if (!timestamps.has(id)) {
        timestamps.set(id, now);
        setTimeout(() => timestamps.delete(id), cooldownAmount);
        return 0;
    }
}
