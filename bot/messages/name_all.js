const {prefix} = require('../config.json');
const roll = require('../utils/roll');

module.exports = async function nameAll (client, userManager) {     
        const list = client.guilds.cache.get("198556391114276864");
        list.members.cache.forEach(async (member) => {
            const id = member.user.id;
            if (member.user.username === "CyberSlug") return;
            const user = await userManager.find(member.user.id);
            if ( user === null) { 
                await userManager.create(member, id);               
                return;
            } 
            const name = await roll("name");
            const alias = await roll("alias");
            await userManager.changeAlias(id, alias);
            const newUser = await userManager.changeName(id, name);
            const fullName = userManager.getFullName(newUser);
            await member.setNickname(fullName);
        })             
    
}