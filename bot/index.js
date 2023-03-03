import { Client, Intents } from 'discord.js'
import { token, guildId } from './config.js'
import { loadEvents } from './src/loader.js'
import { deployCommands } from './src/deployCommands.js'
import { Player } from 'discord-player'

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_PRESENCES,
    ],
})

client.player = new Player(client, {
    ytdlOptions: {
        quality: 'highestaudio',
        highWaterMark: 1 << 25,
    },
})

loadEvents(client)
deployCommands(client)
client.login(token)
// timerCheckNames(client);
