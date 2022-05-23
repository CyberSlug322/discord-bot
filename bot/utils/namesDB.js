const {NewNames} = require('../src/mongo');


class NamesDB {

    constructor () {

    }

    static async getAllNames() {  
        const names = await NewNames.find({}); // Не правильно достает, надо переделать
        return names[0]
    }

    static async getAliases() {
        const aliases = await NewNames.find({});
        return aliases[0][0];
    }


}

module.exports = {NamesDB}
