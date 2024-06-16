import { playerMusic } from '../messages/playerMusic.js'
const MembersTimer = {}
export const djarvis = async (client) => {
    try {
        await client.on('voiceStateUpdate', (s, n) => {
            let id = n.id
            console.log(id)

            if (Date.now() - MembersTimer[id] < 1000 * 60 * 60 * 48) {
                return
            }

            MembersTimer[id] = Date.now()

            console.log('play', MembersTimer)
            if (n.channelId) {
                let roll = Math.random()
                if (id == '972207964771479553') return
                if (roll >= 0.5) {
                    playerMusic(n.channelId, 'https://www.youtube.com/watch?v=KpTHh_8nj9g&ab_channel=Crazy_nick')

                    return
                }

                playerMusic(n.channelId, 'https://www.youtube.com/watch?v=8Bx647FZlYQ&ab_channel=SoundeffectsPro')
            }
        })
    } catch (err) {
        console.log(err)
    }
}
