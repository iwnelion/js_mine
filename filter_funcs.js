//filter() : creates a new array filtering elements with a callback function

let numbers = [1,2,3,4,5,6,7,8]

let evenNums = numbers.filter(isEven)
let oddNums = numbers.filter(isOdd)

console.log(evenNums)
console.log(oddNums)
console.log(numbers)
//=> that's a new array, the initial is intact

function isEven(element){
    return element % 2 === 0    //[2, 4, 6, 8]
}
function isOdd(element){
    return element % 2 !== 0    //[1, 3, 5, 7]
}

console.log("------")

let ages = [16,17,17,18,19,20,40]

let adults = ages.filter(isAdult)
let childs = ages.filter(isChild)

console.log(adults)
console.log(childs)

function isAdult(element){
    return element >= 18    //[18, 19, 20, 40]
}

function isChild(element){
    return element < 18     //[16, 17, 17]
}

console.log("------")

const words = ['apple','banana','kiwi','orange','coconut']

const shortWords = words.filter(getShortWords)
const longWords = words.filter(getLongWords)

console.log(shortWords)
console.log(longWords)

function getShortWords(element){
    return element.length <= 6      //['apple', 'banana', 'kiwi', 'orange']
}

function getLongWords(element){
    return element.length > 6       //['coconut']
}
