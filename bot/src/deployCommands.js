const { REST } = require("@discordjs/rest")
const fs = require('fs');
const { clientId, guildId, token } = require('../config')
const { Routes } = require("discord-api-types/v9")
const path = require('path');
const pathToCommands = path.resolve(__dirname, '../slash/');
const Discord = require("discord.js")

module.exports = (client) => {

client.slashcommands = new Discord.Collection()

let commands = []

const slashFiles = fs.readdirSync(pathToCommands).filter(file => file.endsWith(".js"))

for (const file of slashFiles){
    const slashcmd = require(`../slash/${file}`)
    client.slashcommands.set(slashcmd.data.name, slashcmd)
    commands.push(slashcmd.data.toJSON())
}

const rest = new REST({ version: "9" }).setToken(token)
console.log("Deploying slash commands")
rest.put(Routes.applicationGuildCommands(clientId, guildId), {body: commands})
    .then(() => {
        console.log("Successfully loaded")
    })
    .catch((err) => {
        if (err){
            console.log(err)
            process.exit(1)
        }
    })
}
