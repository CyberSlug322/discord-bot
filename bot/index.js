const { Client, Intents} = require('discord.js');
const { token, guildId } = require('./config.js');
const loader = require('./src/loader');
const deployCommands = require('./src/deployCommands');
const { Player } = require("discord-player");
const {UserManager} = require('./utils/userManager');
const checkName = require('./utils/checkName');
const userManager = new UserManager;

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

async function checkerNicks() {
	await new Promise(r => setTimeout(() => r(console.log("raboci")),11000));
	const list = await client.guilds.cache.get(guildId);
	setInterval(await checkName(list, client), 19000);
}

async function checkerNicks2() {
	setTimeout(await checkName(await userManager.getBlackList(), client),100);
}


checkerNicks();
setInterval(checkerNicks2, 6000);


loader(client);
deployCommands(client);
client.login(token);
