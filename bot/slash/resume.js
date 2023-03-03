import { SlashCommandBuilder } from '@discordjs/builders'

export const resume = {
    data: new SlashCommandBuilder().setName('resume').setDescription('Resumes the music'),
    run: async ({ client, interaction }) => {
        try {
            const queue = client.player.getQueue(interaction.guildId)

            if (!queue) return await interaction.editReply('There are no songs in the queue')

            queue.setPaused(false)
            await interaction.editReply('Music has been paused! Use `/pause` to resume the music')
        } catch (err) {
            console.log(err)
        }
    },
}
