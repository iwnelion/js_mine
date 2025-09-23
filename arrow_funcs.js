//arrow functions : a way of writing a function expression
//                  good for simple functions that are used only once
//                  (params) => some code

//if there are no params, the () are left empty
const hello = (name) =>
    {
        console.log(`hello ${name}`)
    }

hello("joana")

//arrow function as a callback function
setTimeout(() => {console.log("hii")},3000)

const numbers = [1,2,3,4,5,6]

const squares = numbers.map((element) => Math.pow(element,2))
const cubes = numbers.map((element) => Math.pow(element,3))
const evenNums = numbers.filter((element) => element % 2 ===0)
const oddNums = numbers.filter((element) => element !== 0)
const total = numbers.reduce((accumulator,element) => accumulator + element)

console.log(squares)    //[1, 4, 9, 16, 25, 36]
console.log(cubes)      //[1, 8, 27, 64, 125, 216]
console.log(evenNums)   //[2, 4, 6]
console.log(oddNums)    //[1, 2, 3, 4, 5, 6]
console.log(total)      //21
