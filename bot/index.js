const { Client, Intents} = require('discord.js');
const fs = require('fs');
const {token, prefix} = require('./config.json');
const messageCreate = require('./events/messageCreate');

 global.client = new Client({ intents: [
	Intents.FLAGS.GUILDS,
	Intents.FLAGS.GUILD_MEMBERS,
	Intents.FLAGS.GUILD_MESSAGES,
	Intents.FLAGS.GUILD_VOICE_STATES
] });

client.on("ready", () => {
	console.log("server started");
  });

client.on('messageCreate', async (message) => {
	messageCreate(client, message);
})


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply({ content: 'Pong!', ephemeral: true });
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	} else if (commandName === 'name_me') {
		console.log('testing')
		interaction.member.setNickname(interaction.content.replace('changeNick ', ''));
	}
});



client.login(token); 