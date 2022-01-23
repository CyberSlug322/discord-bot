const path = require('path');
const fs = require('fs');
const pathToUsers = path.resolve(__dirname, '../data/users.json');

module.exports = {userFind}

 function userFind(id) {
    const users = JSON.parse(fs.readFileSync(pathToUsers, "utf8"));
    for ( let user of users ) {
        if (user.id === id) {
            return true;
        } 
    }
    return false;
}

function writeUser(id, name=false, surname=false) {
    if (userFind(id)) {
        
    }
}