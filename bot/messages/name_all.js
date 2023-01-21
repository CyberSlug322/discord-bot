import { guildId } from '../config.js'
import { roll } from '../utils/roll.js'
import { User } from '../src/mongo.js'
import { BlackList } from '../src/mongo.js'

export const nameAll = async (client, userManager) => {
    try {
        await User.remove({})
        await BlackList.remove({})
        const list = client.guilds.cache.get(guildId)
        list.members.cache.forEach(async (member) => {
            const id = member.user.id
            if (member.user.username === 'CyberSlug') return
            const user = await userManager.find(member.user.id)
            if (user === null) {
                await userManager.create(member, id)
                return
            }
            // const name = await roll();
            // console.log("step3")
            // await userManager.changeName(id, name);      // pal'
            // console.log("step4")
            // await member.setNickname(`${name[0]} ${name[1]}`);
            // console.log("step5")
        })
    } catch (err) {
        console.log(err)
    }
}
