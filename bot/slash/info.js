import { SlashCommandBuilder } from '@discordjs/builders'
import { MessageEmbed } from 'discord.js'

export const info = {
    data: new SlashCommandBuilder().setName('info').setDescription('Displays info about the currently playing song'),
    run: async ({ client, interaction }) => {
        try {
            const queue = client.player.getQueue(interaction.guildId)
            if (!queue) return await interaction.editReply('There are no songs in the queue')

            let bar = queue.createProgressBar({
                queue: false,
                length: 19,
            })

            const song = queue.current

            await interaction.editReply({
                embeds: [
                    new MessageEmbed()
                        .setThumbnail(song.thumbnail)
                        .setDescription(`Currently Playing [${song.title}](${song.url})\n\n` + bar),
                ],
            })
        } catch (err) {
            console.log(err)
        }
    },
}
