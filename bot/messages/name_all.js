const {guildId} = require('../config.json');
const roll = require('../utils/roll');
const {User} = require('../src/mongo');

module.exports = async function nameAll (client, userManager) {  
        await User.remove({});
        const list = client.guilds.cache.get(guildId);
        list.members.cache.forEach( async (member) => {
            const id = member.user.id;
            if (member.user.username === "CyberSlug") return;
            const user = await userManager.find(member.user.id);
            if ( user === null) { 
                await userManager.create(member, id);               
                return;
            } 
            const name = await roll();
            // const alias = await roll("alias");
            //await userManager.changeAlias(id, alias);
            const newUser = await userManager.changeName(id, name);
            //const fullName = userManager.getFullName(newUser);
            await member.setNickname(`${name[0]} ${name[1]}`);
        })             

}