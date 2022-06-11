const {User} = require('../src/mongo')
const {AddNames} = require('../src/mongo')
const {BlackList} = require('../src/mongo')
const {roll} = require('./roll');
class UserManager {

    constructor() {

    }

    async create(member, id) {
        const newName = await roll();               
        const user = new User({id, name:newName[0], alias: newName[1], points: 10});
        await user.save();
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

    async changeAlias(id, alias) {
        const user = await User.findOne({id});
        user.alias = alias;
        user.save();
        return user;
    }

    async changeName(id, name) {
        const user = await User.findOne({id});
        user.name = name[0];
        user.save();
        await this.changeAlias(id, name[1]);
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
        const name = user?.name || '';
        const alias = user?.alias || '';
        return name + ' ' + alias;
    }

    async getListNames() {
        const list = await AddNames.find({});
        const names = []
        for (const file of list) {
            names.push("#" + file.newname)
        }
        return names.join(" ");
    }

    async getBlackList() {
        let list = await BlackList.find({});
        return list
    }

    async removeListNames() {
        AddNames.remove({});
    }
}

module.exports = {UserManager}




