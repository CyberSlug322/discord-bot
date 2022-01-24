const path = require('path');
const fs = require('fs');
const pathToUsers = path.resolve(__dirname, '../data/users.json');

module.exports = {getUsers,userFind,writeUser}

function getUsers() {
    return JSON.parse(fs.readFileSync(pathToUsers, "utf8"));
}

 function userFind(id) {
    const users = getUsers();
    for ( let i = 0; i < users.length; i++ ) {
        console.log(id);
        console.log(users[i].id);
        if (users[i].id === id) {
            return i;
        } 
    }
    return false;
}

function writeUser(id, name=false, alias=false) {
    if (userFind(id) === false) {
        const users = createUser(id);
        fs.writeFileSync(pathToUsers, JSON.stringify(users));
    } else {

    }
}

function createUser(id, name=false, alias=false, points=10, refreshesRemain=2) {
    const users = getUsers();
    users.push({id, name, alias, points, refreshesRemain});
    return users
}