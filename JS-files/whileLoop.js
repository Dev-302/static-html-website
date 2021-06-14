// let alive = true
// while (alive) {
//     console.log("keep breathing")
// }

// // NOTE: this example creates an infinite loop and might crash your computer
// // don't run it

// let number = 0
// while (number <= 10) {
//     console.log(number) // 1, 2, 3 etc....
//     number = number + 1 // reassign the index variable so the while loop is not infinite.
// }

// const letters = ["a", "b", "c"]
// let index = 0

// while (index < letters.length) {
//     console.log(letters[index]) // logs a the first iteration, b the second iteration.. etc..
//     index = index + 1 // reassign the index variable so the while loop is not infinite
// }

// let letters = ["a", "b", "c"]

// initialization:
// initialize index to letters.length - 1 (2 in this case)

// condition:
// index >= 0 : if index is bigger or equal to zero, keep going

// final experession:
// index-- : after the loop has run, decrease index by 1
// index-- is the same as writing index = index - 1

// for (let index = letters.length - 1; index >= 0; index--) {
//     console.log(letters[index])
// }

for (var count = 0;
    count < 100;
    count = count+1
    ){
    console.log("Hoi " + count)
}

