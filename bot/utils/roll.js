const {NamesDB} = require('./namesDB');

async function roll() {
    const namesObj = (await NamesDB.getAllNames());
    const namesArr = addDependenciesToNames(namesObj);

    const firstRollPos = Math.floor(Math.random() * namesArr[namesArr.length - 1][2]);
    
    const firstRolledArr = namesArr.find( (e) => firstRollPos < e[2]);

    const firstName = getRandomName(firstRolledArr);

    const secondRollArraysPos = firstRolledArr[1];

    const secondRollPos = secondRollArraysPos[Math.floor(Math.random() * secondRollArraysPos.length)];

    const secondName = getRandomName(namesArr[secondRollPos]);

    return [firstName, secondName];
    
}

function getRandomName(arr) {
    return arr[0][Math.floor(Math.random() * arr[0].length)];
}


async function rollFirstName(namesObj) {
    
}

async function rollSecondName() {
    

}

function addDependenciesToNames(obj) {
    const arr = [];
    arr.push([obj.all_fit, [0,2,5], 77])
    arr.push([obj.he_names, [0,2,5], 117])
    arr.push([obj.he_adjectives, [0,1], 157])
    arr.push([obj.she_names, [4], 170])
    arr.push([obj.she_adjectives, [3], 181])
    arr.push([obj.neutral_names, [6], 196])
    arr.push([obj.neutral_adjectives, [5], 221])

    return arr;
}

module.exports = {roll}