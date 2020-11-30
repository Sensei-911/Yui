const fs = require("fs");
const config = require("../../config.json");

module.exports = {
  name: "pruning",
  description: "Toggle pruning of bot messages",
  execute(client, message) {
    config.PRUNING = !config.PRUNING;

    fs.writeFile("../../config.json", JSON.stringify(config, null, 2), (err) => {
      if (err) {
        console.log(err);
        return message.channel.send("There was an error writing to the file.").catch(console.error);
      }

      return message.channel
        .send(`Mesaj kısaltma ${config.PRUNING ? "**açık**" : "**kapalı**"}`)
        .catch(console.error);
    });
  }};
