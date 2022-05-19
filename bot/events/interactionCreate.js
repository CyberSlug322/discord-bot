module.exports = async (client, interaction) => {
   
    if (!interaction.isCommand()) return

    const slashcmd = client.slashcommands.get(interaction.commandName)
    if (!slashcmd) interaction.reply("Not a valid slash command")

    await interaction.deferReply()
    await slashcmd.run({ client, interaction })
}