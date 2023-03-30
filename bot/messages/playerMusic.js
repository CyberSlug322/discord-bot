import { getPlayer } from '../index.js'

export const playerMusic = async (channel, url) => {
    return await getPlayer().play(channel, url)
}
