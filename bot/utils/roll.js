import { NamesDB } from './namesDB.js'
export async function roll() {

    const namesObj = await NamesDB.getAllNames()
    
    const namesArr = addDependenciesToNames(namesObj)

    const firstRollPos = Math.floor(Math.random() * namesArr[namesArr.length - 1][2])

    const firstRolledArr = namesArr.find((e) => firstRollPos < e[2])

    const firstName = getRandomName(firstRolledArr)

    const secondRollArraysPos = firstRolledArr[1]

    const secondRollPos = secondRollArraysPos[Math.floor(Math.random() * secondRollArraysPos.length)]

    const secondName = getRandomName(namesArr[secondRollPos])

    return [firstName, secondName]
}

function getRandomName(arr) {
    return arr[0][Math.floor(Math.random() * arr[0].length)]
}

function addDependenciesToNames(obj) {
    const arr = []
    arr.push([obj.all_fit, [2], 0])
    arr.push([obj.he_names, [2], 0])
    arr.push([obj.he_adjectives, [0, 1], 90])
    arr.push([obj.neutral_names, [4], 0])
    arr.push([obj.neutral_adjectives, [3], 160])
    arr.push([obj.she_names, [6], 0])
    arr.push([obj.she_adjectives, [5], 220])
    arr.push([obj.no_name, [8], 0])
    arr.push([obj.solo_name, [7], 300])
    return arr
}
