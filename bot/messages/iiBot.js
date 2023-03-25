import { Configuration, OpenAIApi } from 'openai'
import { API_KEY } from '../config.js'

const configuration = new Configuration({ apiKey: API_KEY })
const openai = new OpenAIApi(configuration)

export const iiBotMessage = async (text) => {
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: text }],
    })
    return response?.data?.choices?.[0]?.message?.content ?? 'error iiBot'
}
