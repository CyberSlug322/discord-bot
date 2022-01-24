const { Client, Intents} = require('discord.js');
const fs = require('fs');
const {token, prefix} = require('./config.json');
const loader = require('./src/loader');
//const messageCreate = require('./events/messageCreate');
//const interactionCreate = require('./events/interactionCreate');
//const ready = require('./events/ready');

 const client = new Client({ intents: [
	Intents.FLAGS.GUILDS,
	Intents.FLAGS.GUILD_MEMBERS,
	Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_VOICE_STATES
] });
loader(client);





client.login(token); 