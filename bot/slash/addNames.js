const {AddNames} = require('../src/mongo');
const { SlashCommandBuilder } = require("@discordjs/builders")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("add")
    .setDescription("add names")
    .addStringOption((option) => option.setName("name").setDescription("newname").setRequired(true)),
	run: async ({ client, interaction }) => {
        try {    
            const res = interaction.options.getString("name");
            const added = new AddNames({newname: res})
            await added.save();
            await interaction.editReply(`Thanks, name **${res}** added.`)
        }
        catch(err) {
            console.log(err)
        }
    }    
}
