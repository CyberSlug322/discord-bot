import { guildMembersAdd } from './guildMemberAdd.js'
import { guildMemberRemove } from './guildMemberRemove.js'
import { interactionCreate } from './interactionCreate.js'
import { messageCreate } from './messageCreate.js'
import { ready } from './ready.js'

export const events = [guildMembersAdd, guildMemberRemove, interactionCreate, messageCreate, ready]
