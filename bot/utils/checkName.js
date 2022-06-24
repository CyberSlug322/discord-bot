const {BlackList} = require('../src/mongo');
const {guildId} = require('../config');
const {UserManager} = require('./userManager');
const userManager = new UserManager;



module.exports = async  (list, client) => async () => { 
    try {
        if (list?.members) {
            list?.members?.cache?.forEach( async (member) => {
                if(member.user.username === "CyberSlug") return;
                if(member.user.username === "VITOVT") return;
                const id = member.user.id;
                const user = await userManager.find(id);
                const nickDB = await userManager.getFullName(user);
                const nickDS = member.displayName;              
                if (nickDB !== nickDS) {
                    await member.setNickname(nickDB);
                    const arr = new BlackList({userId: id});
                    console.log("Black list update -_-");  
                    arr.save();               
                }
            })
            console.log("allList is checked");
        }
        else {
            list.forEach( async (array) => {
                const id = array.userId;
                const user = await userManager.find(id);
                const nickDB1 = await userManager.getFullName(user);
                const objGuild = await client.guilds.cache.get(guildId);
                await objGuild.members.cache.forEach( async (person) => {
                    if(person.user.username === "CyberSlug") return;
                    if(person.user.username === "VITOVT") return;
                    if(person.user.id === id) {
                        const blackUser = person;
                        const nickDS1 = blackUser.displayName;
                        if(nickDB1 !== nickDS1) {  
                        await blackUser.setNickname(nickDB1); 
                        console.log("Nick chenged");              
                        }
                    }
                })
            })
            console.log("blackList is checked");
        }
    }
    catch (err) {
        console.log("ERROR Cheker",err);
    }
}