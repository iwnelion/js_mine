//.reduce() : reduces the elements of an array to one value

const prices = [5,30,10,20,25,27]
const total = prices.reduce(sum)

console.log(`$ ${total.toFixed(2)}`)        //$ 117.00

//          previous el., next element
function sum(accumulator, element){
    return accumulator + element
}

console.log("------")

const scores = [75, 50, 60, 90, 95]

const maximum = scores.reduce(getMax)
const minimum = scores.reduce(getMin)

console.log(maximum)        //95
console.log(minimum)        //50

function getMax(accumulator,element){
    return Math.max(accumulator,element)
}
function getMin(accumulator,element){
    return Math.min(accumulator,element)
}
