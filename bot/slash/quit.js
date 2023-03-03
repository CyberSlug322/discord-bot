import { SlashCommandBuilder } from '@discordjs/builders'

export const quit = {
    data: new SlashCommandBuilder().setName('quit').setDescription('Stops the bot and clears the queue'),
    run: async ({ client, interaction }) => {
        try {
            const queue = client.player.getQueue(interaction.guildId)

            if (!queue) return await interaction.editReply('There are no songs in the queue')

            queue.destroy()
            await interaction.editReply('Bye!')
        } catch (err) {
            console.log(err)
        }
    },
}
