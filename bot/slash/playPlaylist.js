const { MessageEmbed } = require("discord.js")
const { SlashCommandBuilder } = require("@discordjs/builders")
const { QueryType } = require("discord-player")

module.exports = {
    data: new SlashCommandBuilder().setName("playplaylist").setDescription("play playlist YOUTUBE").addStringOption((option) => option.setName("url").setDescription("the youtube url").setRequired(true)),
	run: async ({ client, interaction }) => {
        if (!interaction.member.voice.channel) return interaction.editReply("You need to be in a VC to use this command")
		const queue = await client.player.createQueue(interaction.guild)
		if (!queue.connection) await queue.connect(interaction.member.voice.channel)

		let embed = new MessageEmbed()
        let url = interaction.options.getString("url")
                    const result = await client.player.search(url, {
                        requestedBy: interaction.user,
                        searchEngine: QueryType.YOUTUBE_PLAYLIST
                    })
                    if (result.tracks.length === 0)
                    return interaction.editReply("No results")
                
                const playlist = result.playlist
                await queue.addTracks(result.tracks)
                embed
                    .setDescription(`**${result.tracks.length} songs from [${playlist.title}](${playlist.url})** have been added to the Queue`)
                    .setThumbnail(playlist.thumbnail)
                await interaction.editReply({embeds: [embed] })
},
}