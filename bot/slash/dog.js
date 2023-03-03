import { SlashCommandBuilder } from '@discordjs/builders'

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))

export const dog = {
    data: new SlashCommandBuilder().setName('dog').setDescription('Send random image dog'),
    run: async ({ client, interaction }) => {
        try {
            const a = await fetch('https://dog.ceo/api/breeds/image/random')
            const data = await a.json()
            await interaction.editReply(data.message)
        } catch (err) {
            console.log(err)
        }
    },
}
