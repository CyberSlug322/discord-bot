const {NewNames} = require('../src/mongo');

class NamesDB {

    constructor () {

    }

    static async getAllNames() {  
        const names = await NewNames.find({});
        return names[names.length-1]
    }
}

module.exports = {NamesDB}
