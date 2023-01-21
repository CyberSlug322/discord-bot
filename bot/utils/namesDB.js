import { NewNames } from '../src/mongo.js'

export class NamesDB {
    constructor() {}

    static async getAllNames() {
        const names = await NewNames.find({})
        return names[names.length - 1]
    }
}
