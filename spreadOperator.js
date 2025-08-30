//spread operator = ... it allows us to expand an array or a string to its elements (unpacks the elements)

let numbers = [1,2,3,4,5]

// console.log(...numbers);    //1 2 3 4 5

//find max num in numbers array
let max = Math.max(...numbers)
console.log(max);   //5

//find min num in numbers array
let min = Math.min(...numbers)
console.log(min);   //1

//expand a string into an array
let name = "joana"
let letters = [...name]
console.log(letters);   //['j', 'o', 'a', 'n', 'a']

//"shallow copy"
let fruits = ['apple','banana','kiwi']
let newFruits = [...fruits]
console.log(fruits)
console.log(newFruits)
//=> they print the same thing

//make a new array out of fruits[] and vegetables[]
let vegetables = ['carrots','potatoes']
let foods = [...fruits, ...vegetables]
console.log(foods);     //['apple', 'banana', 'kiwi', 'carrots', 'potatoes']
//=> if we added the arrays as they are (fruits, vegetables), instead of using the 
//   spread operator, we would have created a 2D array, which is not convenient!!
