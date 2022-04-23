const {NamesDB} = require('./namesDB');

module.exports = async function roll(type) {
    const roll = Math.floor(Math.random() * 100);
    const rolledRarity = roll < 68 ? "common" : roll < 90 ? "rare" : roll < 98 ? "epic" : "legendary";
    const array = type === "name" ? await NamesDB.getNames(rolledRarity) : await NamesDB.getAliases(rolledRarity);
    return array[Math.floor(Math.random() * array.length)];
    
}


