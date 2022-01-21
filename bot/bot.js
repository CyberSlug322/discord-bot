const { Client, Intents} = require('discord.js');
const comms = require("./comms.js"); 
const fs = require('fs');
let config = require('./config.json');
let token = config.token; 
let prefix = config.prefix; 

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on("ready", function() {
  console.log(client.user.username + " ready!!");
});


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});


client.login(token); 