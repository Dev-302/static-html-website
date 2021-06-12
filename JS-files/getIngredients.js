//An array syntax is constructed using square brackets : []. Because arrays are collections we need sperate the different elements using a comma


/* We can access an element from the Array! This is done using square brackets [] AKA The member operator. and the index number of the elemnt you want to access. 
The first element of an array is at index 0, The second element at index 1 ect. */


// const groceries = ["Asparagus", "Potatoes", "Walnuts"]

// const firstItem = Array[0]
// const secondItem = Array[1]
// const thirdItem = Array[2]

// groceries[2] = "Pepitas"
// // We can use const because an ellement is being reassigned and not the whole array



// console.log(groceries)

const vegetables = ['ginger', 'onions', 'lentils', 'carrot']
const fruits = ['apple', 'tomato', 'pineapple']
const dairy = ['ice cream', 'sour cream', 'yoghurt']

const curry = [ vegetables[0], vegetables[1], vegetables[2], fruits[1], dairy[2] ]
const fruitSalad = [ fruits[0], fruits[1], fruits[2], dairy[2] ]
const tomatoSoup = [ vegetables[1], vegetables[2], fruits[1], dairy[1] ]

// if you need different ingredients, 
// reassign some of the elements of the original arrays

console.log(curry) // [ ginger, onions, lentils, tomato, yogurt ]
console.log(fruitSalad)
console.log(tomatoSoup)