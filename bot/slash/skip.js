import { SlashCommandBuilder } from '@discordjs/builders'
import { MessageEmbed } from 'discord.js'

export const skip = {
    data: new SlashCommandBuilder().setName('skip').setDescription('Skips the current song'),
    run: async ({ client, interaction }) => {
        try {
            const queue = client.player.getQueue(interaction.guildId)

            if (!queue) return await interaction.editReply('There are no songs in the queue')

            const currentSong = queue.current

            queue.skip()
            await interaction.editReply({
                embeds: [new MessageEmbed().setDescription(`${currentSong.title} has been skipped!`).setThumbnail(currentSong.thumbnail)],
            })
        } catch (err) {
            console.log(err)
        }
    },
}
