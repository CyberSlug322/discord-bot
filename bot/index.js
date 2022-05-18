const { Client, Intents} = require('discord.js');
const fs = require('fs');
const { clientId, guildId, token, prefix } = require('./config.json')
const loader = require('./src/loader');
const { REST } = require("@discordjs/rest")
const Discord = require("discord.js")
const { Routes } = require("discord-api-types/v9")
const path = require('path');

const pathToCommands = path.resolve(__dirname, './slash/');

 const client = new Client({ intents: [
	Intents.FLAGS.GUILDS,
	Intents.FLAGS.GUILD_MEMBERS,
	Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_VOICE_STATES,
	Intents.FLAGS.GUILD_PRESENCES
] });

client.slashcommands = new Discord.Collection()

let commands = []

const slashFiles = fs.readdirSync(pathToCommands).filter(file => file.endsWith(".js"))

for (const file of slashFiles){
    const slashcmd = require(`./slash/${file}`)
    client.slashcommands.set(slashcmd.data.name, slashcmd)
    commands.push(slashcmd.data.toJSON())
}


    // const rest = new REST({ version: "9" }).setToken(token)
    // console.log("Deploying slash commands")
    // rest.put(Routes.applicationGuildCommands(clientId, guildId), {body: commands})
    // .then(() => {
    //     console.log("Successfully loaded")
    //     process.exit(0)
    // })
    // .catch((err) => {
    //     if (err){
    //         console.log(err)
    //         process.exit(1)
    //     }
    // })
         

loader(client);

client.login(token); 