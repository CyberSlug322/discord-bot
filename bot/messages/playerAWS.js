import { joinVoiceChannel, createAudioPlayer, createAudioResource } from '@discordjs/voice'
import Fs from 'fs'

const queue = []
let connection
const player = createAudioPlayer()
player.on('stateChange', (oldState, newState) => {
    if (newState.status === 'idle') {
        if (!queue.length) {
            const directory = `./bot/data/mp3`
            Fs.readdir(directory, (err, files) => {
                if (err) {
                    console.error(err)
                } else {
                    for (const file of files) {
                        Fs.unlink(`${directory}/${file}`, (err) => {
                            if (err) {
                                console.error(err)
                            } else {
                            }
                        })
                    }
                }
            })
            return
        }
        player.play(queue.shift())
        connection.subscribe(player)
    }
})

export const playerText = async (message, url) => {
    connection = joinVoiceChannel({
        channelId: message.member.voice.channel.id,
        guildId: message.member.voice.channel.guildId,
        adapterCreator: message.guild.voiceAdapterCreator,
    })

    const resource = createAudioResource(url)

    if (!queue.length && player.state.status === 'idle') {
        player.play(resource)
        connection.subscribe(player)
    } else {
        queue.push(resource)
    }
}
