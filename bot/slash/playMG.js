import { MessageEmbed } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders'
import { QueryType } from 'discord-player'

export const playMG = {
    data: new SlashCommandBuilder().setName('playmg').setDescription('play MG'),
    run: async ({ client, interaction }) => {
        try {
            if (!interaction.member.voice.channel) return interaction.editReply('You need to be in a VC to use this command')
            const queue = await client.player.createQueue(interaction.guild)
            if (!queue.connection) await queue.connect(interaction.member.voice.channel)

            let embed = new MessageEmbed()
            let url = 'https://www.youtube.com/watch?v=ZYAPgPH9hsI'
            const result = await client.player.search(url, {
                requestedBy: interaction.user,
                searchEngine: QueryType.YOUTUBE_VIDEO,
            })
            if (result.tracks.length === 0) return interaction.editReply('No results')

            const song = result.tracks[0]
            queue.addTrack(song)
            embed
                .setDescription(`**[${song.title}](${song.url})** has been added to the Queue`)
                .setThumbnail(song.thumbnail)
                .setFooter({ text: `Duration: ${song.duration}` })
            if (!queue.playing) await queue.play()
            await interaction.editReply({ embeds: [embed] })
        } catch (err) {
            console.log(err)
        }
    },
}
