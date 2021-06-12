/* Ternary operator - Sneak preview of conditionals!

In the last section we learned about Boolean expressions which resolve to true or false. Now it's time
to put them to use to let our program make decisions. Tomorrow we'll learn how to make all kinds of conditional statements but first we'll learn how to
make a conditional expression using the ternary operator.
Think of the ternary operator as a form in the road - you either take the right or the left path*/

// The syntax for the ternary operator is:
// boolean expression ? "if true resolve to this" : "if false to this"

// let programmer = true
// const message = programmer ? "I know what I\'m doing!" : "Uhh.. What??"

// console.log(message) // "I know what I'm doing!"

// Nested ternaries - You can even have multiple ternary operators to make more than one choice. BEWARE THAT THIS MAY BECOME HARD TO READ!!

// const currentDay = 'wednesday'
// const currentTime = 17
// const christmasToday = false

// const dayOff = 'monday'
// const openingTime = 18
// const closingTime = 23

// const openToday = currentDay !== dayOff && !christmasToday
// const openRightNow = currentTime >= openingTime && currentTime < closingTime

// // We need some parenethesis () so we can put our nested ternaries on multiple lines
// const message = (!openToday 
//   ? 'We \'re closed today' 
//   : openRightNow 
//   ? 'Welcome!' 
//   : `We are open between ${openingTime}h and ${closingTime}h`
// )

// console.log(message) // We are open between 18h and 23h


const password = 'supersecretpassword'
const input = 'supersecretpassword'
const loginAttemptsFailed = 2
const maxLoginAttempts = 3

const passwordCorrect = password === input
const finalLoginAttempt = loginAttemptsFailed >= maxLoginAttempts

const accountLocked = !passwordCorrect && finalLoginAttempt

if (passwordCorrect){
    console.log("Welcome")
} 
if (accountLocked){
    console.log("You are trying to hack us! ACCES DENIED!")
}
else if (!passwordCorrect){
    console.log(`Wrong! you can try ${ maxLoginAttempts - loginAttemptsFailed } more time(s) `)
}
