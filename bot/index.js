const { Client, Intents} = require('discord.js');
const { token, guildId } = require('./config.js');
const loader = require('./src/loader');
const timerCheckNames = require('./src/timerCheckNames')
const deployCommands = require('./src/deployCommands');
const { Player } = require("discord-player");


const client = new Client({ intents: [
	Intents.FLAGS.GUILDS,
	Intents.FLAGS.GUILD_MEMBERS,
	Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_VOICE_STATES,
	Intents.FLAGS.GUILD_PRESENCES
] });
         
client.player = new Player(client, {
    ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25
    }
})



loader(client);
deployCommands(client);
client.login(token);
timerCheckNames(client);