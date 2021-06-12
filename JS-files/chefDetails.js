// const chef ={
//     firstName: "John",
//     lastName: "Doe",
//     chefName: "Jeremiah Bocuse",
//     age: 30,
// }
// console.log(chef.chefName) // Jeremiah Bocuse
// console.log(chef["firstName"]) // John

// const question = "age"

// // The member operator [] allows you to access properties using variables

// console.log(chef[question]) //30

const chef = {
    firstName: 'John',
    chefName: 'Jeremiah Bocuse',
    age: '30',
    contactDetails: {
      address: 'Sprookjeswonderland',
    },
    favoriteFood: 'Pizza'
}
  
  chef.name = 'John Doe'
  // Now (re)assign the rest of the properties!
  
  console.log(chef) 