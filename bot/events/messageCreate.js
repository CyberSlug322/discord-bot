const {prefix} = require('../config.json');
const {UserManager} = require('../utils/userManager');
const nameAll = require('../messages/name_all');
const submit = require('../messages/submit');
const roll_full_name = require('../messages/roll_full_name');
const {MessageAttachment} = require("discord.js")

const userManager = new UserManager;

module.exports = (client, message) => {
    nameInputHandle(client, message);
   
}

async function nameInputHandle(client, message) {

    if (message.member.user.username === "Steeeasy") {
        const attachment = new MessageAttachment("./bot/data/stass.jpeg")
        return message.reply({ files:[attachment]})
    }

    const id = message.author.id;
    message.react('🤔')
    if (message.author.bot || message.channel.type === 'dm') return;
    if (!message.content.startsWith(prefix)) return;
    roll_full_name(message, userManager);
    if (message.content.startsWith(`${prefix}name_all`)) {
        if (message.member.user.username === "CyberSlug") return nameAll(client, userManager);
        if (message.member.user.username === "VITOVT") return nameAll(client, userManager);
        message.reply(`Эта команда не доступна `)   
    } 
    submit(message);
   
    if (message.content.startsWith(`${prefix}get_name_list`)) {
        if (message.member.user.username !== "CyberSlug") return message.reply(`No! ${":cowboy:"}`);
            const res = await userManager.getListNames();
            if(res === "") return message.reply("List error")
            message.reply(res);
    }

    if (message.content.startsWith(`${prefix}remove_name_list`)) {
        if (message.member.user.username !== "CyberSlug") return message.reply(`No! ${":cowboy:"}`);
        await userManager.removeListNames();
        message.reply("List has been deleted");
    }

        
    
    if (message.content.startsWith(`${prefix}Ты бот`)) {
        message.reply(`   ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠟⠛⠛⠛⠛⠛⠛⠛⡛⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠛⠉⠁⠀⠀⠀⠀⠀⠀⠈⠒⠀⠀⠀⠈⠑⠂⠈⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠷⠤⣄⠈⠛⠦⣀⠀⠑⠂⠀⠀⠀⠀⠀⠐⠂⠀⠀⠀⠀⠀⠀⠙⠒⠤⣘⣯⡻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⡿⠓⠢⢤⣀⠀⠀⠙⢦⡀⠈⠓⢤⡀⠀⠀⠉⠐⠠⢀⠀⠀⠈⠐⠄⡀⠈⠢⡀⠀⠀⠹⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⡷⡶⠤⣄⡈⠳⣤⡀⠀⠙⠲⣄⡀⠈⠓⠤⣀⡀⠀⠀⠑⠂⠀⠀⠀⢀⡐⠀⣈⣁⣠⡀⡻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⡿⠉⠻⣷⣤⡙⢦⣤⣍⣓⣦⣰⣶⡽⣷⣶⡟⠛⠿⠿⠶⠟⠛⠛⠛⠛⠋⠉⠉⠋⠈⠉⠙⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⠃⠀⠀⠀⠉⠛⢦⣙⡄⠀⠉⠉⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠸⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⠏⠀⢀⡀⠀⣀⣀⠀⠈⠏⠀⠀⠀⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀⢹⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⢹⡄⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀  ⠀⢻⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⡀⣦⣀⣤⣶⣒⣶⣤⣀⠀⠀⠀⠀⠀⠀⢿⠀⢀⣠⡶⠛⠉⠻⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⠙⠚⠛⣦⠤⡤⠬⡙⠓⠦⠀⠀⠀⠀⢸⡇⢿⡉⠀⠒⠢⡄⢹⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⢸⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⠇⠀⠆⠀⣻⣛⣂⣤⠜⠀⠀⠀⠀⠀⠀⠘⣏⠳⣽⣤⡴⠦⡌⡄⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿
        ⣿⣿⠏⠀⡌⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡏⠳⡄⢸⡇⠀⢀⠇⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿
        ⣿⡟⠀⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣴⡋⠹⣗⡙⠻⡇⠀⠈⣰⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⠁⠀⠀⠀⠀⠤⢄⠀⠀⠀⠀⠀⠀⠀⡜⢿⠀⠹⢦⡀⢨⡁⣇⢀⣼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣦⣤⣤⣶⣤⣤⡨⠀⢰⠖⠒⢤⡀⡼⡇  ⠀⠀⠀⠙⣿⡏⠘                ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⡇⢠⡀⢨⡙⠦⢤⣸⠟⡆⢠⢻⠃⢷⠀⠀  ⠀⠀⠁⠈   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣷⣦⣵⣄⠉⡀⠀⠈⢿⠁⢴⡾⠀⠈⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀     ⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣷⣿⣿⣿⣿⡟⠚............................⣠⡴⠶⠛⠛⠛⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⡟⠉⠁⠀⣿⠉⠄⢻⡀⠀⠀⠀⢸⣿⡇⠀⠀⠀⢀⣿⠀⠀⠀⠀⠀⠀⠀⠀⣿⣼⠋⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⢯⠇⠀⠀⠀⣼⠀⠈⢸⣧⠀⠀⠀⠈⣿⠀⠀⠀⠀⣼⣿⠀⠀⠀⠀⠀⣀⣀⣀⣿⡏⠀⠀⠀⠀⣴⣆⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿
        ⣿⣿⣿⡾⢀⠀⠀⢠⠏⠀⠀⢀⣿⡄⠀⠀⠀⠟⠀⠀⠀⢰⣏⣽⠀⠀⠀⠀⠀⣿⠀⠀⠸⡇⠀⠀⠀⠀⠻⣿⣀⣀⣀⣀⣼⣿⣿⣿⣿⣿
        ⣿⣿⣿⣄⣸⣤⣴⠋⠄⠀ ⠈⡻⣧⠀⠀⠀⠀⠀⠀⠀⣾⠁⢸⠀⠀⠀⠀⠀⠛⠛⠛⣷⣷⡀⠀⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿
        ⣿⣿⡇⠙⠋⠈⣷⠀⠀⠀  ⠀⠁⢹⡄⠀⠀⠀⠀⠀⢸⠇⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣷⣄⡀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿
        ⣿⣿⣿⡀            ⣬⣷⠀⠀⠀⠀⢀⡟⠀⠀⢸⠀⠀⠀⠀⠀⣴⣶⣶⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣄⣠⣄⣀⣀⣠⣿⣿⣿⣿⠀⠀⠀⠀⢸⡇⣀⣠⣼⠀⠀⠀⠀⠀⣿⣿⣿⣿⡇⠀⠀⠀⠀⣿⣷⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⢸⣿⣿⣿⣿⠀⠀⠀⠀⠀⠛⠛⠛⢻⣷⠀⠀⠀⠀⢻⡿⠀⠀⠀⠀⢸⡟⠛⠛⠛⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⢸⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⡇⠀⠀⠀⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣤⣤⣤⣼⣿⣿⣿⣿⣦⣤⣤⣤⣤⣤⣤⣿⣿⣷⣦⣤⣤⣤⣤⣤⣶⣿⣿⣷⣤⣤⣤⣿
        ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿`)
    }
    if (message.content.startsWith(`${prefix}points`)) {
        if (message.member.user.username !== "CyberSlug") return message.reply(`No! ${":cowboy:"}`);
            const [comm, id, amount] = message.content.split(' ');
            const user = await userManager.find(id)
            const fullname = await userManager.getFullName(user)
            userManager.changePoints(id, amount);
            message.reply(`${fullname} got ${amount} points.`);
        
    }
}