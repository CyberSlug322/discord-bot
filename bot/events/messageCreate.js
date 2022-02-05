const {prefix} = require('../config.json');
const names = require('../data/names.json');
const alias = require('../data/alias.json');
const {writeUser,changeUserPoints, userFind, getUsers} = require('../utils/userManager');
const {rollRarity} = require('../utils/roll');
module.exports = (client, message) => {
    nameInputHandle(client, message);
   
}

function nameInputHandle(client, message) {
    if (message.author.bot || message.channel.type === 'dm') return;
    if (!message.content.startsWith(prefix)) return;
    if (message.content.startsWith(`${prefix}roll_name`)) {
        const [status, currentAmount] = changeUserPoints(message.author.id,-2);
        if ( status ) {
            const newName = rollRarity(names);
		    message.member.setNickname(writeUser(message.author.id, newName));
            message.reply(`Я, бот пес(БОТ ПЕС), отныне нарекаю тебя: ${newName}`);
        } else {
            message.reply(`У тебя не хватает поинтов, чтобы сделать ролл. Попробуй найти их где-нибудь, текущий остаток поинтов:${currentAmount}`)
        }
	 	return;
	}
    if (message.content.startsWith(`${prefix}roll_alias`)) {
        const newAlias = rollRarity(alias);
        message.member.setNickname(writeUser(message.author.id, false, newAlias)); 
	 	return;
    }
    if (message.content.startsWith(`${prefix}name_all7788`)) {
        const list = client.guilds.cache.get("198556391114276864"); 
        
        list.members.cache.forEach(member => {
            if (member.user.username === "CyberSlug") return;
        
            console.log(userFind(member.user.id))
            if (userFind(member.user.id) === null) {
                
                changeUserPoints(member.user.id, 0);
                const newName = rollRarity(names);
                const newAlias = rollRarity(alias);
                member.setNickname(writeUser(message.author.id, newName, newAlias));
            } else if (!getUsers()[userFind(member.user.id)].name || !getUsers()[userFind(member.user.id)].alias) {
                const newName = rollRarity(names);
                const newAlias = rollRarity(alias);
                member.setNickname(writeUser(message.author.id, newName, newAlias));
            }

        }); 

    }
    if (message.content.startsWith(`${prefix}buy_alias`)) {
    }
    if (message.content.startsWith(`${prefix}roll_name`)) {
    }
}