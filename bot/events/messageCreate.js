const {prefix} = require('../config.json');
const {UserManager} = require('../utils/userManager');
const rollName = require('../messages/roll_name');
const roll_alias = require('../messages/roll_alias');
const rollRarity = require('../utils/roll');
const submit = require('../messages/submit');

const userManager = new UserManager;

module.exports = (client, message) => {
    nameInputHandle(client, message);
   
}

async function nameInputHandle(client, message) {
    const id = message.author.id;
    message.react('🤔')
    if (message.author.bot || message.channel.type === 'dm') return;
    if (!message.content.startsWith(prefix)) return;
    rollName(message, userManager);
    roll_alias(message, userManager);
    submit(message);
    
    if (message.content.startsWith(`${prefix}name_all`)) {
        if (!message.member.user.username === "CyberSlug") {
            message.reply(`Эта команда не доступна `);
            return;
        }
        const list = client.guilds.cache.get("198556391114276864"); 
        list.members.cache.forEach(async (member) => {
            const id = member.user.id;
            if (member.user.username === "CyberSlug") return;
            const user = await userManager.find(member.user.id)
            if ( user === null) { 
                await userManager.create(member, id);               
                return;
            } 
        })
    }
    if (message.content.startsWith(`${prefix}бот, ты`)) {
        message.reply(`⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠟⠛⠛⠛⠛⠛⠛⠛⡛⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠛⠉⠁⠀⠀⠀⠀⠀⠀⠈⠒⠀⠀⠀⠈⠑⠂⠈⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠷⠤⣄⠈⠛⠦⣀⠀⠑⠂⠀⠀⠀⠀⠀⠐⠂⠀⠀⠀⠀⠀⠀⠙⠒⠤⣘⣯⡻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⡿⠓⠢⢤⣀⠀⠀⠙⢦⡀⠈⠓⢤⡀⠀⠀⠉⠐⠠⢀⠀⠀⠈⠐⠄⡀⠈⠢⡀⠀⠀⠹⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⡷⡶⠤⣄⡈⠳⣤⡀⠀⠙⠲⣄⡀⠈⠓⠤⣀⡀⠀⠀⠑⠂⠀⠀⠀⢀⡐⠀⣈⣁⣠⡀⡻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⡿⠉⠻⣷⣤⡙⢦⣤⣍⣓⣦⣰⣶⡽⣷⣶⡟⠛⠿⠿⠶⠟⠛⠛⠛⠛⠋⠉⠉⠋⠈⠉⠙⠉⠉⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⠃⠀⠀⠀⠉⠛⢦⣙⡄⠀⠉⠉⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⠏⠀⢀⡀⠀⣀⣀⠀⠈⠏⠀⠀⠀⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⢹⡄⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⡀⣦⣀⣤⣶⣒⣶⣤⣀⠀⠀⠀⠀⠀⠀⢿⠀⢀⣠⡶⠛⠉⠻⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⠙⠚⠛⣦⠤⡤⠬⡙⠓⠦⠀⠀⠀⠀⢸⡇⢿⡉⠀⠒⠢⡄⢹⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⠇⠀⠆⠀⣻⣛⣂⣤⠜⠀⠀⠀⠀⠀⠀⠘⣏⠳⣽⣤⡴⠦⡌⡄⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿
        ⣿⣿⠏⠀⡌⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡏⠳⡄⢸⡇⠀⢀⠇⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿
        ⣿⡟⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣴⡋⠹⣗⡙⠻⡇⠀⠈⣰⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⠁⠀⠀⠀⠀⠤⢄⠀⠀⠀⠀⠀⠀⠀⡜⢿⠀⠹⢦⡀⢨⡁⣇⢀⣼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣦⣤⣤⣶⣤⣤⡨⠀⢰⠖⠒⢤⡀⡼⡇⠈⠳⡀⠀⠀⠀⠙⣿⡏⠘⠦⠤⠤⠤⠴⠶⠦⠴⠖⠒⠋⢙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⡇⢠⡀⢨⡙⠦⢤⣸⠟⡆⢠⢻⠃⢷⠀⠀⠘⠦⠀⠀⠁⠈⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣷⣦⣵⣄⠉⡀⠀⠈⢿⠁⢴⡾⠀⠈⢧⡀⠀⠀⠀⠀⠀⠈⢹⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣷⣿⣿⣿⣿⡟⠚⣿⠿⠶⠶⠶⣦⠃⡴⠶⠶⠶⠶⣶⠾⠷⠶⠶⠶⠶⠶⠶⣦⠀⣠⡴⠶⠛⠛⠛⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⡟⠉⠁⠀⣿⠉⠄⢻⡀⠀⠀⠀⢸⣿⡇⠀⠀⠀⢀⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣼⠋⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⢯⠇⠀⠀⠀⣼⠀⠈⢸⣧⠀⠀⠀⠈⣿⠀⠀⠀⠀⣼⣿⠀⠀⠀⠀⠀⣀⣀⣀⣿⡏⠀⠀⠀⠀⣴⣆⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿
        ⣿⣿⣿⡾⢀⠀⠀⢠⠏⠀⠀⢀⣿⡄⠀⠀⠀⠟⠀⠀⠀⢰⣏⣽⠀⠀⠀⠀⠀⣿⠀⠀⠸⡇⠀⠀⠀⠀⠻⣿⣀⣀⣀⣀⣼⣿⣿⣿⣿⣿
        ⣿⣿⣿⣄⣸⣤⣴⠋⠄⠀⡄⠈⡻⣧⠀⠀⠀⠀⠀⠀⠀⣾⠁⢸⠀⠀⠀⠀⠀⠛⠛⠛⣷⣷⡀⠀⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⡇⠙⠋⠈⣷⠀⠀⠀⠈⠀⠁⢹⡄⠀⠀⠀⠀⠀⢸⠇⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣷⣄⡀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⡀⡀⠄⠀⠀⠆⠀⠀⡀⢀⣬⣷⠀⠀⠀⠀⢀⡟⠀⠀⢸⠀⠀⠀⠀⠀⣴⣶⣶⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣄⣠⣄⣀⣀⣠⣿⣿⣿⣿⠀⠀⠀⠀⢸⡇⣀⣠⣼⠀⠀⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⣿⣷⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⢸⣿⣿⣿⣿⠀⠀⠀⠀⠀⠛⠛⠛⢻⣷⠀⠀⠀⠀⢻⡿⠀⠀⠀⠀⢸⡟⠛⠛⠛⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⢸⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⡇⠀⠀⠀⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣤⣤⣤⣼⣿⣿⣿⣿⣦⣤⣤⣤⣤⣤⣤⣤⣼⣿⣿⣷⣦⣤⣤⣤⣤⣤⣶⣿⣿⣷⣤⣤⣤⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿`)
    }
    if (message.content.startsWith(`${prefix}give_points`)) {
        if (message.member.user.username !== "CyberSlug") {
            message.reply('У вас недостаточно прав для этой команды');
        } else {
            const [id, amount] = message.content.split(' ')[1].split('_');
            const [isChanged, currentAmount] = changeUserPoints(id, amount);
            if ( isChanged ) {
                message.reply(`Points successfuly added to user #${id} `);
            } else {
                message.reply(`oshibka`)
            }
            
        }
    }
}