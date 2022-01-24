const {prefix} = require('../config.json');
const names = require('../data/names.json');
const points = require('../data/points.json');
const {getUsers,userFind,writeUser} = require('../utils/userManager');
module.exports = (client, message) => {
    nameInputHandle(client, message);
   
    
}
function rollRarity(array) {
    writeUser("9999999999991");
    const roll = Math.floor(Math.random() * 100);
    const rolledRarity = roll < 68 ? "common" : roll < 90 ? "rare" : roll < 98 ? "epic" : "legendary";
    return array[rolledRarity][Math.floor(Math.random() * array[rolledRarity].length)];
}

function nameInputHandle(client, message) {
    if (message.author.bot || message.channel.type === 'dm') return;
    if (!message.content.startsWith(prefix)) return;
    if (message.content.startsWith(`${prefix}roll_name`)) {
		message.member.setNickname(rollRarity(names));
	 	return;
	}
    if (message.content.startsWith(`${prefix}roll_alias`)) {
        message.member.setNickname(rollRarity(names));
	 	return;
    }
    if (message.content.startsWith(`${prefix}buy_name`)) {
    }
    if (message.content.startsWith(`${prefix}buy_alias`)) {
    }
    if (message.content.startsWith(`${prefix}roll_name`)) {
    }
}