/*We can combine comparison operators and logical operators to write powerfull boolean expressions!
Assigning seperate boolean expressions can make this kind of code much easier to read. */

// const password = 'supersecretpassword'
// const input = 'iamhackingyou'
// const loginAttemptsFailed = 2
// const maxLoginAttempts = 3

// const passwordCorrect = password === input
// const finalLoginAttempt = loginAttemptsFailed + 1 >= maxLoginAttempts

// const accountLocked = !passwordCorrect && finalLoginAttempt
// console.log(`Account locked? ${accountLocked}`)



const currentDay = 'wednesday'
const currentTime = 20
const christmasToday = false

const dayOff = 'monday'
const openingTime = 18
const closingTime = 23

console.log(`Restaurant open? ${ currentDay != dayOff && currentTime >= openingTime && currentTime < closingTime }`)
console.log(`Restaurant closed? ${ currentDay == dayOff || currentDay == christmasToday || currentTime >= closingTime || currentTime < openingTime }`)