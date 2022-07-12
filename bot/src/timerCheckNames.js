const {guildId} = require('../config.js')
const {UserManager} = require('../utils/userManager');
const userManager = new UserManager;
const {id} = require('../events/messageCreate')
const checkName = require('../utils/checkName');


module.exports = (client) => {
    async function checkerNicks() {
        let {isWorking} = require('../events/messageCreate')
        console.log(isWorking)
        if(isWorking) console.log(isWorking)
        setTimeout(await checkName(client.guilds.cache.get(guildId), client), 100);
    }
    async function checkerNicks2() {
        console.log(id)

        setTimeout(await checkName(await userManager.getBlackList(), client),100);
    }
    setInterval(checkerNicks, 16000);
    setInterval(checkerNicks2, 6000);
    
}
