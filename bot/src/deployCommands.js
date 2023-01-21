import { REST } from '@discordjs/rest'
import fs from 'fs'
import { clientId, guildId, token } from '../config.js'
import { Routes } from 'discord-api-types/v9'
import path from 'path'

import Discord from 'discord.js'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const __dirname = path.dirname('deployCommands.js')
const pathToCommands = path.resolve(__dirname, '../slash/')

export const deployCommands = (client) => {
    // try {
    //     client.slashcommands = new Discord.Collection()
    //     let commands = []
    //     const slashFiles = fs.readdirSync(pathToCommands).filter((file) => file.endsWith('.js'))
    //     for (const file of slashFiles) {
    //         const slashcmd = require(`../slash/${file}`)
    //         client.slashcommands.set(slashcmd.data.name, slashcmd)
    //         commands.push(slashcmd.data.toJSON())
    //     }
    //     const rest = new REST({ version: '9' }).setToken(token)
    //     console.log('Deploying slash commands')
    //     rest.put(Routes.applicationGuildCommands(clientId, guildId), {
    //         body: commands,
    //     })
    //         .then(() => {
    //             console.log('Successfully loaded')
    //         })
    //         .catch((err) => {
    //             if (err) {
    //                 console.log(err)
    //                 process.exit(1)
    //             }
    //         })
    // } catch (err) {
    //     console.log(err)
    // }
}
