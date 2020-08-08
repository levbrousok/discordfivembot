const { Client } = require("discord.js")
const client = new Client
global.config = require("./config/json")
const {} = require("./ultils/")
const { updatePlayerCount } = require("./utils")
client.on("ready", () => {
    console.log(`Discord Bot Logged in as ${client.user.tag}`)
    updatePlayerCount(client, 5)
})

client.login(config.token)