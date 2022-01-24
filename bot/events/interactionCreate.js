module.exports = async (client, interaction) => {
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
}