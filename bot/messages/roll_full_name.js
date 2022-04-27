const {prefix} = require('../config.json');
const {roll} = require('../utils/roll');

module.exports = async function rollName(message, userManager) {
    const id = message.author.id;
    if (message.content.startsWith(`${prefix}roll_name`)) {
        if (message.member.user.username === "CyberSlug") {
            const newName = await roll();
            const fullName = `${newName[0]} ${newName[1]}`;
            message.reply(`Твое новое имя: ${fullName}, установи его сам`);
            return;
        }
        const userPoints = await userManager.getPoints(id);
        if (userPoints === false) {
            message.reply("Ошибка, пользователя не существует");
            return;
        }
        if ( userPoints >= 2 ) {
            await userManager.changePoints(id, -2);
            const newName = await roll();   
            const fullName = `${newName[0]} ${newName[1]}`;
            const user = await userManager.changeName(id ,newName);  
		    await message.member.setNickname(fullName);
            message.reply(`Я, бот пес(БОТ ПЕС), отныне нарекаю тебя: ${fullName}`);
        } else {
            message.reply(`У тебя не хватает поинтов, чтобы сделать ролл. Попробуй найти их где-нибудь, текущий остаток поинтов:${userPoints}`)
        }
	 	return;
	}
}