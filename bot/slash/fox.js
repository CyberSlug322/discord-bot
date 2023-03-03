import { SlashCommandBuilder } from '@discordjs/builders'

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

export const fox = {
    data: new SlashCommandBuilder().setName('fox').setDescription('Send random image fox'),
    run: async ({ client, interaction }) => {
        try {
            const a = await fetch('https://randomfox.ca/floof')
            const data = await a.json()
            await interaction.editReply(data.image)
        } catch (err) {
            console.log(err)
        }
    },
}
