const {guildId} = require('../config.js');
const roll = require('../utils/roll');
const {User} = require('../src/mongo');
const {BlackList} = require('../src/mongo');

module.exports = async function nameAll (client, userManager) { 
    try{ 
        await User.remove({});
        await BlackList.remove({});
        const list = client.guilds.cache.get(guildId);
        list.members.cache.forEach( async (member) => {
            const id = member.user.id;
            if (member.user.username === "CyberSlug") return;
            const user = await userManager.find(member.user.id);
            if ( user === null) { 
                await userManager.create(member, id);               
                return;
            } 
            // const name = await roll();
            // console.log("step3")
            // await userManager.changeName(id, name);      // pal'
            // console.log("step4")
            // await member.setNickname(`${name[0]} ${name[1]}`);
            // console.log("step5")
            
        })
        

    }
    catch(err){
        console.log(err)
    }        
}