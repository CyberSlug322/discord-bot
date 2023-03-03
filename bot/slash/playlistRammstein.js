import { MessageEmbed } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders'
import { QueryType } from 'discord-player'

export const playListRammstein = {
    data: new SlashCommandBuilder().setName('playlistrammstein').setDescription('play playlist Rammstein'),
    run: async ({ client, interaction }) => {
        try {
            if (!interaction.member.voice.channel) return interaction.editReply('You need to be in a VC to use this command')
            const queue = await client.player.createQueue(interaction.guild)
            if (!queue.connection) await queue.connect(interaction.member.voice.channel)

            let embed = new MessageEmbed()
            let url = 'https://www.youtube.com/watch?v=W3q8Od5qJio&list=PLvZPl-c4r2Ka51DEyZL4ofAB0kVqzjBDb'
            const result = await client.player.search(url, {
                requestedBy: interaction.user,
                searchEngine: QueryType.YOUTUBE_PLAYLIST,
            })
            if (result.tracks.length === 0) return interaction.editReply('No results')

            const playlist = result.playlist
            await queue.addTracks(result.tracks)
            embed
                .setDescription(`**${result.tracks.length} songs from [${playlist.title}](${playlist.url})** have been added to the Queue`)
                .setThumbnail(playlist.thumbnail)
            await interaction.editReply({ embeds: [embed] })
            if (!queue.playing) await queue.play()
        } catch (err) {
            console.log(err)
        }
    },
}
