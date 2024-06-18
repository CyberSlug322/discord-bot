import { getPlayer } from '../index.js'

export const playerMusic = async (channel, url) => {
    // !play ""
    try {
        const player = await getPlayer()
        await player.play(channel, url)
    } catch (err) {
        console.log(err)
    }
}

export const playerInfo = async (message) => {
    //  !tracks
    try {
        const player = await getPlayer()
        const queue = player.nodes.get(message.guild)
        const result = player.queues.cache.find((e) => e)?.tracks?.data ?? []
        result.unshift(queue.currentTrack.raw)
        return result
    } catch (err) {
        console.log(err)
        message.reply('Sorry, queue not found!')
    }
}

export const playerSkip = async (message) => {
    // !skip
    const player = await getPlayer()
    const queue = player?.nodes?.get(message.guild)
    queue?.node?.skip()
}
