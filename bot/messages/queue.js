import { EmbedBuilder } from 'discord.js'

export const queue = async (tracksArray) => {
    if (tracksArray) {
        const res = tracksArray.map((el, id) => {
            try {
                const embed = new EmbedBuilder()
                    .setColor(0x25d470)
                    .setTitle(`${id + 1}.  ${el?.title || el?.raw?.title || '-'}`)
                    .setURL((el?.channel?.url || el?.url || el?.raw?.url) + '?' + id)
                    .setDescription(el?.durationFormatted || el?.author || el?.raw?.author || '-')
                    .setFooter({ text: String(el?.duration || el?.raw?.duration || '-') })
                return embed
            } catch (err) {
                console.log(err)
                const embed = new EmbedBuilder().setColor(0x1199ff).setTitle('undefined')
                return embed
            }
        })
        return res
    }
}
