/* Boolean expressions resolve to a Boolean value.

Do you remember the Boolean datatype? This humble datatype only has two values: true and false.
We're goint to write Boolean expressions to make your programs make "choices*. Using 'if' statements for example. */

// if(someBooleanExpression){ // someBooleanExpression will either be true or false
//     // do one thing
// } else {
//     // do some other thing
// }

/*Boolean expressions have two different kinds of operators: Comparison operators and logical operators.
Comparison operators: 

Comprarison operators are used to compare values. You can compare if values are the same, not the same or greater than for example. This kind of comparison
resolves to a Boolean value "true" or "false" */



const fullName = "John Doe"
const age = 19

const drinkingAgeAmerica = 21
const drinkingAgeBarbados = 16
const drinkingAgeNetherlands = 18

console.log(`${fullName} can drink in America: ${ age >= drinkingAgeAmerica }`)
console.log(`${fullName} can NOT drink in America: ${ age < drinkingAgeAmerica }`)
console.log(`${fullName} can drink in Barbados: ${ age >= drinkingAgeBarbados }`)
console.log(`${fullName} could drink last year in the Netherlands: ${ age >= drinkingAgeNetherlands }`)