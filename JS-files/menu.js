/* There are multiple ways to construct and conbine strings. They all resolve to a new string value.
In JavaScript, you van use 'single quotes', "double quotes" and `back-ticks` when declaring a string.
Lets look at some examples. */

// console.log('Hello you')
// console.log("Goodbye you")
// console.log(`Hello you again`)

// All the string definitions above would be correct!

/* If you want to use "" or '' in the middle string expression to quote something, be carefull not to break the string.
JavaScript will interpret it as the end of your string */
// console.log('This qoute ' will cause an error ') 

/* If you wish to use quotes in a string, you want to use the character 'or " without its meaning in the program.
This is called "escaping a character" and can be done by putting in a backslash \ in front of the character */
// console.log( 'this quote \'is safe to use')

// You can combine of "concatenate" strings using the + operator like this
// console.log('My name is '+ 'Slim Shady') //My name is Slim Shady

/*Single quote and double quote strings are the same. Back-tick strings are different. 
They are called "Template strings". They are used to make a string in which you can interpolate onther expressions.
At any point in the string you can use ${ } to interpolate an expression. The values from the resolved
expressions are then inserted inside the string! This way you can use numbber expressions in your string for example! */
// console.log(`A tarte tatin contains ${(85 + 26.4 * 3) / 6 } grams of fat`)

/*We'll soon learn about other kinds of expressions which we could also interpolate here. We can also
interpolate "variables". Later we'll see that you can also interpolate "function calls"! here is a sneak preview! */

// const fullName = "John Doe"
// const birthYear = 2008
// console.log(`My name is ${fullName}, I am ${new Date().getFullYear() - birthYear} years old`) //My name is John Doe. I am 13 years old.

/*As a rule of thumb: use backticks when doing string interpolation. When not doing string interpolation choose one: single or double quotes and stick to it.
I have chosen the double quotes aka "" */

const dish1 = 'Mo\'s Salad'
const dish2 = 'David\'s Cherry Tomato Soup'
const dish3 = 'Dom\'s Daily Dish'
const dish4 = 'Wouter\'s Waffles'

const price1 = 9
const price2 = 12
const price3 = 8
const price4 = 6

const discount1 = 3

console.log('Welcome to Chez Codaisseur')
console.log(`1.) ${dish1} - €${price1}`)
console.log(`2.) ${dish2} - €${price2}`) 
console.log(`3.) ${dish3} - €${price3}`)
console.log(`4.) ${dish4} - €${price4}`) 

console.log(`Our menu deal of the week is: ${dish1}, ${dish3} & ${dish4} for the total of €${price1 + price3 + price4 - discount1}. That\'s a discount of €${discount1}!`)


// At the bottom:
// Make a menu deal with 3 dishes, add the total prices together and give a discount of 3 euros