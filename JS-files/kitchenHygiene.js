/*Logical operators;
The other kind of operator used in Boolean expressions are "logical operators". These operators are
used with Boolean values. There are only 3 logical operators:

Operator: && Description: AND (both have to be true) Example true: true && true. Example false: true && false
Operator: || Description: OR (one has to be true) Example true: true|| false. Example false: false || false
Operator: ! Description: Negates the boolean value. Example true: !false (not false => true). Example false: !true (not true => false).
You van use these logical operators to: resolve multiple boolean expression to a single boolean value

For example

1.) When does a person not eat meat? When he is a vegan OR a vegetarian.
2.) When does a person eat eggs? When he is NOT a vegan.
3.) When can a person eat meat? When he is Not a vegan AND NOT a vegetarian. */

// given this person is vegetarian but not vegan:
// const vegetarian = true
// const vegan = false

// const doesNotEatMeat = vegan || vegetarian // resolves to true
// const canEatEggs = !vegan // resolves to true
// const canEatMeat = !vegan && !vegetarian  // resolves to false

const startingShift = false
const cutVegetables = true
const cleanedFish = false
const cutChicken = true

const shouldWashHands = cutVegetables || cutChicken
const noNeedToWashHands = !startingShift || !cleanedFish

console.log(`Should I wash my hands? ${shouldWashHands}`)
console.log(`Can I do without washing? ${noNeedToWashHands}`)

