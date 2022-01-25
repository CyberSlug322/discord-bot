const {prefix} = require('../config.json');
const names = require('../data/names.json');
const alias = require('../data/alias.json');
const points = require('../data/points.json');
const {writeUser,changeUserPoints} = require('../utils/userManager');
module.exports = (client, message) => {
    nameInputHandle(client, message);
   
    
}
function rollRarity(array) {
    const roll = Math.floor(Math.random() * 100);
    const rolledRarity = roll < 68 ? "common" : roll < 90 ? "rare" : roll < 98 ? "epic" : "legendary";
    return array[rolledRarity][Math.floor(Math.random() * array[rolledRarity].length)];
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
    if (message.content.startsWith(`${prefix}buy_name`)) {
    }
    if (message.content.startsWith(`${prefix}buy_alias`)) {
    }
    if (message.content.startsWith(`${prefix}roll_name`)) {
    }
}