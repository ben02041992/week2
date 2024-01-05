console.log('')

let userName = ''
userName = 'Ben'

userName ? console.log(`Hello, ${userName}!`): console.log('Hello!');

console.log('')

const userQuestion = 'Am I over 30?'

console.log(`${userName} asked the magic 8 ball ${userQuestion}`)

let eightBall = ''

console.log('')

let randomNumber = Math.floor(Math.random() * 8)

switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply is hazy... Try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Don\'t count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook is not good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
    default:
        eightBall;
    break;
}

console.log(eightBall)