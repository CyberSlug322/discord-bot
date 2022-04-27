const {User} = require('../src/mongo')
const {roll} = require('./roll');
class UserManager {

    constructor() {

    }

    async create(member, id) {
        const newName = await roll();               
        const user = new User({id, name:newName[0], alias: newName[1], points: 10});
        await user.save();
        // const fullName = await this.getFullName(user);
        const fullName = `${newName[0]} ${newName[1]}`;
        await member.setNickname(fullName);
    }

    async changePoints(id, amount) {
        console.log(amount);
        const user = await User.findOne({id});
        console.log(user.id);
        user.points = user.points + amount;
        user.save();
    }

    async changeName(id, name) {
        const newName = name.split(' ');
        const user = await User.findOne({id});
        user.name = newName[0];
        user.save();
        await changeAlias(id, newName[1]);
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
        return user ? user?.points : false;
    }

    async getFullName(user) {
        const name = user.name || '';
        const alias = user.alias || '';
        return name + ' ' + alias;
    }
}

module.exports = {UserManager}




