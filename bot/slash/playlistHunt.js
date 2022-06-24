const { MessageEmbed } = require("discord.js")
const { SlashCommandBuilder } = require("@discordjs/builders")
const { QueryType } = require("discord-player")

module.exports = {
    data: new SlashCommandBuilder().setName("playlisthunt").setDescription("play playlist Hunt"),
	run: async ({ client, interaction }) => {
        try{
            if (!interaction.member.voice.channel) return interaction.editReply("You need to be in a VC to use this command")
            const queue = await client.player.createQueue(interaction.guild)
            if (!queue.connection) await queue.connect(interaction.member.voice.channel)

            let embed = new MessageEmbed()
            let url = "https://www.youtube.com/watch?v=ived-2qklPk&list=PLvZPl-c4r2KaoP4fKaVMFDA_oQmxHCqlU"
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
                    if (!queue.playing) await queue.play()
        }
        catch(err){
            console.log(err)
        }                    
    },
}