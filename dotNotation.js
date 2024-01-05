// // console.log(    "Hello World".toUpperCase()   )

// // console.log(    Math.random()   )
// console.log(    Math.round(Math.random)*10   )

// const verticalGrid = "   |   |   ";
// const horizontalGrid = "------------";

// function printTable() {
//     console.log(verticalGrid);
//     console.log(verticalGrid);
//     console.log(horizontalGrid);
//     console.log(verticalGrid);
//     console.log(verticalGrid);
//     console.log(horizontalGrid);
//     console.log(verticalGrid);
//     console.log(verticalGrid);
// }

// printTable(console.log)

// Activity 1

/*console.log("")

let firstName = 'Ben';
let favDrink = 'Coke';
let age = 31

console.log(`Hello ${firstName}! I can see that you are ${age} and your favorite drink is ${favDrink}.`)

age = 34;
favDrink = "Lemonade"

console.log(`Hello ${firstName}! I can see that you are ${age} and your favorite drink is ${favDrink}.`)*/

// Activity 2

/*// console.log("")

// // const today = new Date()
// // const tomorrow = new Date(today)
// // tomorrow.setDate(today.getDate() +1)
// // console.log(tomorrow.toDateString())

// let day = "today";
// let breakfast = prompt(`What did you eat for breakfast ${day}?`);
// console.log()

// // function lunch() {
// //     prompt(`What did you eat for lunch?`);
// // }
// // function dinner() {
// //     prompt(`What did you eat for dinner?`);
// // }

// // console.log(`Breakfast:${breakfast}, Lunch:${lunch}, Dinner:${dinner}`)

// console.log(`Breakfast: ${breakfast}`)

console.log("")

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(today.getDate() +1)

let breakfast = "Sausage";
let lunch = "Ham Salad";
let dinner = "Potato and Leek Soup";

console.log(`Day: ${today}

Breakfast: ${breakfast}
Lunch: ${lunch}
Dinner: ${dinner}`)

console.log("")

breakfast = "Bacon";
lunch = "Turkey";
dinner = "food"

console.log(`Day: ${tomorrow}
Breakfast: ${breakfast}
Lunch: ${lunch}
Dinner: ${dinner}`)*/

//Activity3

/*// console.log("")

// // const today = new Date()
// // const tomorrow = new Date(today)
// // tomorrow.setDate(today.getDate() +1)
// // console.log(tomorrow.toDateString())

// let day = "today";
// let breakfast = prompt(`What did you eat for breakfast ${day}?`);
// console.log()

// // function lunch() {
// //     prompt(`What did you eat for lunch?`);
// // }
// // function dinner() {
// //     prompt(`What did you eat for dinner?`);
// // }

// // console.log(`Breakfast:${breakfast}, Lunch:${lunch}, Dinner:${dinner}`)

// console.log(`Breakfast: ${breakfast}`)

console.log("")

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(today.getDate() +1)

let breakfast = "Sausage";
let lunch = "Ham Salad";
let dinner = "Potato and Leek Soup";

console.log(`Day: ${today}

Breakfast: ${breakfast}
Lunch: ${lunch}
Dinner: ${dinner}`)

console.log("")

breakfast = "Bacon";
lunch = "Turkey";
dinner = "food"

console.log(`Day: ${tomorrow}
Breakfast: ${breakfast}
Lunch: ${lunch}
Dinner: ${dinner}`)*/

//Activity 3 

/*console.log("")

const birthdayMonth = 3;
const birthdayDay = 2;

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const nextBirthday = new Date(currentYear, birthdayMonth, birthdayDay);
if (currentDate > nextBirthday) {
    nextBirthday.setFullYear(currentYear +1);
}

const daysLeft = Math.ceil((nextBirthday-currentDate) / (24 *60 * 60 *1000));

console.log(`There are ${daysLeft} days until your next Bithday!`);

console.log("")*/

//Activity 4

/*console.log("")

let spaceX = ("X")
const spaceO = ("O")

console.log(`   |   |   `)
console.log(` ${spaceX} | ${spaceO} |   `)
console.log(`   |   |   `)
console.log(`------------`)
console.log(`   |   |   `)
console.log(` ${spaceX} | ${spaceX} |   `)
console.log(`   |   |   `)
console.log(`------------`)
console.log(`   |   |   `)
console.log(` ${spaceO} |   |   `)
console.log(`   |   |   `)*/