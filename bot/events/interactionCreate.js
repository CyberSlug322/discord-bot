
const { Player } = require("discord-player")




   

module.exports = async (client, interaction) => {

    
    client.player = new Player(client, {
    ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25
    }
})
    if (!interaction.isCommand()) return

    const slashcmd = client.slashcommands.get(interaction.commandName)
    if (!slashcmd) interaction.reply("Not a valid slash command")

    await interaction.deferReply()
    await slashcmd.run({ client, interaction })


    
}