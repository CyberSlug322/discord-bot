import path from 'path'
import fs from 'fs'
import { events } from '../events/index.js'

export const loadEvents = (client) => {
    console.log(`Loading events...`)

    for (const event of events) {
        client.on(event.name, bind)
    }
}
