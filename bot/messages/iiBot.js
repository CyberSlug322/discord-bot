import { Configuration, OpenAIApi } from 'openai'
import { API_KEY } from '../config.js'
const configuration = new Configuration({ apiKey: API_KEY })
const openai = new OpenAIApi(configuration)
const contextObject = {}

export const iiBotMessage = async (message, id, clearContext = true) => {
    if (!contextObject[id] || clearContext) {
        contextObject[id] = []
    }
    if (contextObject[id].length > 15) {
        contextObject[id] = contextObject[id][contextObject[id].length - 1]
    }
    contextObject[id].push({ role: 'user', content: message })
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: contextObject[id],
    })
    contextObject[id].push({ role: 'assistant', content: response?.data?.choices?.[0]?.message?.content })

    return response?.data?.choices?.[0]?.message?.content ?? 'error iiBot'
}
