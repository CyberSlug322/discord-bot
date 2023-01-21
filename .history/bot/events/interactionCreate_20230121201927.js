export const interactionCreate = async (client, interaction) => {
    try {
        console.log(in)
        if (!interaction?.isCommand()) return

        const slashcmd = client.slashcommands.get(interaction.commandName)
        if (!slashcmd) interaction.reply('Not a valid slash command')

        await interaction.deferReply()
        await slashcmd.run({ client, interaction })
    } catch (err) {
        console.log(err)
    }
}
