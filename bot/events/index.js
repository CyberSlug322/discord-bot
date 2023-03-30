import { interactionCreate } from './interactionCreate.js'
import { messageCreate } from './messageCreate.js'
import { ready } from './ready.js'

export const events = [interactionCreate, messageCreate, ready]
