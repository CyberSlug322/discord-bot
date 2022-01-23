const {prefix} = require('../config.json');
const names = require('../data/names.json');
module.exports = (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;
    if (!message.content.startsWith(prefix)) return;
    if (message.content.startsWith(`${prefix}name_me`)) {
		//if (!client.application?.owner) return;
			message.member.setNickname(rollRarity(names));
	 	return;
	}
}
function rollRarity(names) {
    
    const roll = Math.floor(Math.random() * 100);
    const rolledRarity = roll < 68 ? "common" : roll < 90 ? "rare" : roll < 98 ? "epic" : "legendary";
    return names[rolledRarity][Math.floor(Math.random() * names[rolledRarity].length)];
}

