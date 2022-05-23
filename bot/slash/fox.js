const fetch = (...args) => import("node-fetch").then(({default: fetch}) => fetch(...args))
const { SlashCommandBuilder } = require("@discordjs/builders")
module.exports = {
	data: new SlashCommandBuilder().setName("fox").setDescription("Send random image fox"),
	run: async ({ client, interaction }) => {
            const a = await fetch("https://randomfox.ca/floof")
            const data = await a.json()
            await interaction.editReply(data.image)
        }
}
