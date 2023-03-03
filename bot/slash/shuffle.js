import { SlashCommandBuilder } from '@discordjs/builders'

export const shuffle = {
    data: new SlashCommandBuilder().setName('shuffle').setDescription('Shuffles the queue'),
    run: async ({ client, interaction }) => {
        try {
            const queue = client.player.getQueue(interaction.guildId)

            if (!queue) return await interaction.editReply('There are no songs in the queue')

            queue.shuffle()
            await interaction.editReply(`The queue of ${queue.tracks.length} songs have been shuffled!`)
        } catch (err) {
            console.log(err)
        }
    },
}
