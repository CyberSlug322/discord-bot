const fetch = (...args) => import("node-fetch").then(({default: fetch}) => fetch(...args))
const { SlashCommandBuilder } = require("@discordjs/builders")
module.exports = {
	data: new SlashCommandBuilder().setName("dog").setDescription("Send random image dog"),
	run: async ({ client, interaction }) => {
		try{
            const a = await fetch("https://dog.ceo/api/breeds/image/random")
            const data = await a.json()
            await interaction.editReply(data.message)
        }
        catch(err){
            console.log(err)
        } 
    }
}
