//function expressions : a way to declare functions as values or variables

//a func declared as a variable
const hello = function(){
    console.log("hello")
}
//its call
hello()

//using a func as a value
//example of a timeout
setTimeout(function(){
    console.log("goodbye")
},3000)

console.log("------")

const numbers = [1,2,3,4,5,6]

//instead of giving a func as a callback to .map, we declare it right away
const squares = numbers.map(function(element){
    return Math.pow(element,2)
})
const evenNums = numbers.filter(function(element){
    return element % 2 === 0
})
const total = numbers.reduce(function(accumulator,element){
    return accumulator + element
})

console.log(squares)    //[1, 4, 9, 16, 25, 36]
console.log(evenNums)   //[2, 4, 6]
console.log(total)      //21
