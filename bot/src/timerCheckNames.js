import { guildId } from '../config.js'
import { UserManager } from '../utils/userManager.js'
import { id } from '../events/messageCreate.js'
import checkName from '../utils/checkName.js'

const userManager = new UserManager()

export const check = (client) => {
    // async function checkerNicks() {
    //     let {isWorking} = require('../events/messageCreate')
    //     console.log(isWorking)
    //     if(isWorking) console.log(isWorking)
    //     setTimeout(await checkName(client.guilds.cache.get(guildId), client), 100);
    // }
    // async function checkerNicks2() {
    //     console.log(id)
    //     setTimeout(await checkName(await userManager.getBlackList(), client),100);
    // }
    // setInterval(checkerNicks, 16000);
    // setInterval(checkerNicks2, 6000);
}
