//forEach() using callback functions

const numbers = [1,2,3,4,5]

numbers.forEach(double)
numbers.forEach(display)

function display(element){
    console.log(element)
}
function double(element,index,array){
    array[index] = element * 2
}

console.log("------")

let fruits = ["apple","banana","orange","kiwi"]

fruits.forEach(uppercase)
fruits.forEach(display2)

function display2(element){
    console.log(element)
}
function uppercase(element,index,array){
    array[index] = element.toUpperCase()
}
