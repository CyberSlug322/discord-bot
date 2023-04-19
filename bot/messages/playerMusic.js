import { getPlayer } from '../index.js'

export const playerMusic = async (channel, url) => {
    // !play ""
    const player = getPlayer()

    await player.play(channel, url)
}

export const playerInfo = async (message) => {
    //  !tracks
    try {
        const player = getPlayer()
        const queue = player.nodes.get(message.guild)
        const result = player.queues.cache.find((e) => e)?.tracks?.data ?? []
        result.unshift(queue.currentTrack.raw)
        return result
    } catch (err) {
        console.log(err)
        message.reply('Sorry, queue not found!')
    }
}

export const playerSkip = (message) => {
    // !skip
    const player = getPlayer()
    const queue = player?.nodes?.get(message.guild)
    queue?.node?.skip()
}
