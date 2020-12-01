/*
 * Chika Bot for Discord
 * Copyright (C) 2020 Kemal H.
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
    client.on("ready", () => reqEvent("ready")(client, "message"));
    client.on("message", reqEvent("message"));
}
