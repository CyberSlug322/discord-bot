const path = require('path');
const fs = require('fs');
const pathToUsers = path.resolve(__dirname, '../data/users.json');
const {User} = require('../src/mongo')



class UserManager {

    constructor() {

    }

    async create(obj) {
        const user = new User(obj);
        const result = await user.save();
        return result;
    }

    async changePoints(id, amount) {
        console.log(amount);
        const user = await User.findOne({id});
        console.log(user.id);
        user.points = user.points + amount;
        user.save();
    }

    async changeName(id, name) {
        const user = await User.findOne({id});
        user.name = name;
        user.save();
        return user;
    }

    async changeAlias(id, alias) {
        const user = await User.findOne({id});
        user.alias = alias;
        user.save();
        return user;
    }

    async find(id) {
        const user = await User.findOne({id});
        return user;
    }

    async getPoints(id) {
        const user = await User.findOne({id});
        return user?.points;
    }

    async getFullName(user) {
        const name = user.name || '';
        const alias = user.alias || '';
        return name + ' ' + alias;
    }
}

module.exports = {UserManager}




