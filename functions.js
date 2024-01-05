const prompt = require ("prompt-sync")({sigint: true});

// let color = "Yellow"

// const favColor = (color) => {
//     console.log(`My favorite color is ${color}.`)
// }

// favColor(color)

//Activity1

/*
const factorial = (n) => {
    if ((n === 0) || (n === 1)){
        return 1;
    } else {
        return ( n* factorial(n-1));
    }
}
console.log(factorial(33));*/

//Activity 2

// let orderCount = 0;

 // const takeOrder = (topping1, topping2) => {
//     console.log(`Order number: ${orderCount} - Pizza with ${topping1} and ${topping2}.`)
//     orderCount++;
//     return orderCount;
// }

// takeOrder("Pepperoni", "Onions")
// takeOrder("ham", "cheese")

// Activity 3 

let pinNum = 4546
let accBalance = 200

const makeWithdrawal = (withdrawalAmnt, pin) => {
    accBalance = (accBalance - withdrawalAmnt)
    let available = accBalance  
        if (accBalance >= 0 && pin === pinNum) {
            console.log(`Withdrawing £${withdrawalAmnt}. Please take your card and wait for cash.`);
        } else if (accBalance < 0 && pin === pinNum){
            console.log('Unable to proceed. Insufficient funds.')
        } else if (pin !== pinNum) {
            console.log('Incorrect PIN Number. Please try again.')
        }
    }
console.log('')

makeWithdrawal(120, 4546)

console.log('')

makeWithdrawal(300, 4546)

console.log('')

makeWithdrawal(300, 7686)

console.log('')