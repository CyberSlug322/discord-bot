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
        if (users[i].id === id) {
            return i;
        } 
    }
    return null;
}

function writeUser(id, name=false, alias=false, points=10, refreshesRemain=2) {
    const userPos = userFind(id);
    if (userPos === null) {
        const users = addNewUser(id, name, alias);
        fs.writeFileSync(pathToUsers, JSON.stringify(users));
        return name || '' + ' ' + alias || '';
    } else {
        const users = getUsers();
        if (name) users[userPos].name = name;
        if (alias) users[userPos].alias = alias;
        fs.writeFileSync(pathToUsers, JSON.stringify(users));
        console.log(users[userPos].name || '' + ' ' + users[userPos].alias || '')
        return (users[userPos].name || '') + ' ' +  (users[userPos].alias || '');
    }
}

function addNewUser(id, name=false, alias=false, points=10, refreshesRemain=2) {
    const users = getUsers();
    users.push({id, name, alias, points, refreshesRemain});
    return users;
}

function getUserName(id) {
    if ( userFind(id) === null ) return null;
    return [ ]
}
