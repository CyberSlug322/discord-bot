import Discord from 'discord.js'
import { token, guildId } from './config.js'
import { loadEvents } from './src/loader.js'
import { deployCommands } from './src/deployCommands.js'
import { Player } from 'discord-player'

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.GuildVoiceStates,
        Discord.GatewayIntentBits.GuildPresences,
        Discord.GatewayIntentBits.MessageContent,
    ],
})

const player = new Player(client)
player.createPlaylist
export const getPlayer = () => {
    return player
}

loadEvents(client)
deployCommands(client)
client.login(token)
