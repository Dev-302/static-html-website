// let alive = true
// while (alive) {
//     console.log("keep breathing")
// }

// // NOTE: this example creates an infinite loop and might crash your computer
// // don't run it

let number = 0
while (number <= 10) {
    console.log(number) // 1, 2, 3 etc....
    number = number + 1 // reassign the index variable so the while loop is not infinite.
}

const letters = ["a", "b", "c"]
let index = 0

while (index < letters.length) {
    console.log(letters[index]) // logs a the first iteration, b the second iteration.. etc..
    index = index + 1 // reassign the index variable so the while loop is not infinite
}