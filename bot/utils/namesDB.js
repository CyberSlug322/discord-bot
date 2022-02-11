const {Names, Aliases} = require('../src/mongo');


  class NamesDB {

    constructor () {

    }

    static async getNames(rarity) {  
        const names = await Names.find({}); // Не правильно достает, надо переделать
        return names[0][rarity]
    }

    static async getAliases(rarity) {
        const aliases = await Aliases.find({});
        return aliases[0][rarity];
    }


}

module.exports = {NamesDB}
