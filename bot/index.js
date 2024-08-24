import Discord, { Message, VoiceChannel } from 'discord.js'
import { token, guildId } from './config.js'
import { loadEvents } from './src/loader.js'
import { deployCommands } from './src/deployCommands.js'
import { Player, GuildQueue } from 'discord-player'
// import { djarvis } from './utils/djarvis.js'
import dotenv from 'dotenv'
import { VoiceConnectionStatus } from '@discordjs/voice'
dotenv.config()

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.GuildVoiceStates,
        Discord.GatewayIntentBits.GuildPresences,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildModeration,
        Discord.GatewayIntentBits.AutoModerationConfiguration,
        Discord.GatewayIntentBits.AutoModerationExecution,
        Discord.GatewayIntentBits.GuildScheduledEvents,
        Discord.GatewayIntentBits.GuildInvites,
        Discord.GatewayIntentBits.GuildIntegrations,
    ],
})

const player = new Player(client)
let initialized = false
export const getPlayer = async () => {
    if (!initialized) {
        await player.extractors.loadDefault() //(ext) => ext !== 'YouTubeExtractor'
        initialized = true
    }
    return player
}
loadEvents(client)
// djarvis(client)
deployCommands(client)
client.login(token)
