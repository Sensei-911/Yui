module.exports.random = async (min, max) => {
max = max + 1;
max -= min;
const random = Math.floor(Math.random() * max) + min;
return random;
}

module.exports.react = async (react1, react2, msg) => { 
msg.addReaction(react1)
msg.addReaction(react2)
}

module.exports.isOdd = async (num) => { 
if ((num % 2) == 0) return false;
else if ((num % 2) == 1) return true;
}

module.exports.jsonData = async (path, data) => { 
const json = require(path)
const filter = json[data]
const image = filter[Math.floor(Math.random() * filter.length)]
return image
};