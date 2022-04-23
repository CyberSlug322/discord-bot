const {User} = require('../src/mongo')
const rollRarity = require('./roll');

class UserManager {

    constructor() {

    }

    async create(member, id) {
        const newName = await rollRarity("name");
        const newAlias = await rollRarity("alias");                
        const user = new User({id, name:newName, alias: newAlias, points: 10});
        const fullName = await this.getFullName(user);
        await member.setNickname(fullName);
        user.save();
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




