/* Activity 1

let age = 21
let country = 'arabia'

if (age > 17 && country == 'UK') {
    console.log(`I can serve you`)
} else if (country != 'UK') {
    console.log(`We're in different countries`)
} else {
    console.log(`You're not old enough for me to serve you`)
}

console.log('')*/

/*Activity 2

let favPizza = ''
favPizza = 'Cheese'

switch (favPizza) {
    case 'Cheese':
    case 'Garlic Bread':
    case 'Pepperoni':
        console.log(`I'll have one of those!`);
        break;
    case 'Ham & Pineapple':
        console.log(`Not my first choice but i'll eat it`);
        break;
    case 'Anchovies':
    case 'Vegetable':
        console.log(`No thanks, i'll pass!`)
        break;
    default:
        console.log(`Are you sure that's a pizza topping`)
        break;
}
console.log('')*/

/*  Activity 3

let password = 'minimum8letters'
let num = password.length

if (num => 7) {
    console.log(`Success!`)
} else {
    console.log(`Password doesn't meet minimum length requirements. Try again.`)
}
console.log('')

if (num % 3 === 0 || num % 5 === 0) {
    console.log("Number is divisible by 3 or 5")
} else {
    console.log(`Number is not divisible by 3 or 5`)
}
*/

/* Activity 4

let num = 30

let fizz = num % 3
let buzz = num % 5

if (fizz === 0 && buzz === 0) {
    console.log('fizz buzz')
} else if (fizz === 0) {
    console.log('fizz')
} else if (buzz === 0) {
    console.log('buzz')
} else {
    console.log(num)
}

console.log('')*/

// Activity 5

console.log('')

let num = '10002'
let strStatus = 'is'

for ( let i = 0; i <num.length / 2; i++) {
    if ( num[i] != num[num.length - 1 - i]) {
        strStatus = 'not'
        break;
    };
};

if (strStatus == 'not') {
    console.log('Number is not a palindrome')
} else {
    console.log("Number is a palindrome")    
}

console.log('')

/* Activity 6

const times = ['7am', '8am', '9am']
let placeOfWork = 'CodeNation'
let townOfHome = 'Manchester'

*/
