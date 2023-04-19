import { Configuration, OpenAIApi } from 'openai'
import { API_KEY } from '../config.js'
import { MessagePayload } from 'discord.js'

const configuration = new Configuration({ apiKey: API_KEY })
const openai = new OpenAIApi(configuration)
const attachment = new MessagePayload('./bot/data/mops.jpeg')

export const iiBotImage = async (text) => {

    const response = await openai.createImage({
        prompt: text,
        n: 2,
        size: '1024x1024',
    })
    return response?.data?.data?.[0]?.url ?? { files: [attachment] }
}
