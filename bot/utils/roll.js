module.exports = {rollRarity}

function rollRarity(array) {
    const roll = Math.floor(Math.random() * 100);
    const rolledRarity = roll < 68 ? "common" : roll < 90 ? "rare" : roll < 98 ? "epic" : "legendary";
    return array[rolledRarity][Math.floor(Math.random() * array[rolledRarity].length)];
}