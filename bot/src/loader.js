import { events } from '../events/index.js'

export const loadEvents = (client) => {
    console.log(`Loading events...`)

    for (const event of events) {
        console.log('test', event.name)
        client.on(event.name, event.bind(null, client))
    }
}
