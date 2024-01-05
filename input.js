const prompt = require ("prompt-sync")({sigint: true});

let pinNum = "4546"

let input = prompt('Enter PIN Number: ')
    if (input === pinNum) {
        console.log('pin correct')
    } else {
        console.log('pin incorrect')
    }



let accBalance = 200
let withdrawalAmnt = 150
