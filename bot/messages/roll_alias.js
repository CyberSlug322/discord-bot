const {prefix} = require('../config.json');
const roll = require('../utils/roll');

module.exports = async function rollAlias (message, userManager) {
    const id = message.author.id;
    if (message.content.startsWith(`${prefix}roll_alias`)) {
        if (message.member.user.username === "CyberSlug") {
            const newAlias = await roll("alias");
            message.reply(`Твой новый псевдоним: ${newAlias}, установи его сам`);
            return;
        }
        const userPoints = await userManager.getPoints(id);
        if (userPoints === false) {
            message.reply("Ошибка, пользователя не существует");
            return;
        }
        if ( userPoints >= 2 ) {
            await userManager.changePoints(id, -2);
            const newAlias = await roll("alias");
            const user = await userManager.changeAlias(id ,newAlias);
            const fullName = await userManager.getFullName(user);
		    await message.member.setNickname(fullName);
            message.reply(`С этого момента твоим прозвищем будет: ${newAlias}!`);
        } else {
            message.reply(`У тебя не хватает поинтов, чтобы сделать ролл. Попробуй найти их где-нибудь, текущий остаток поинтов:${userPoints}`)
        }
	 	return;
    }
}

