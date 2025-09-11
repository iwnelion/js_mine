//.map() : accepts a callback and applies the function to each element of the array, 
//         returning a new array (<- that its difference with the forEach)

const numbers = [1,2,3,4,5]

const squared = numbers.map(square)
const cubed = numbers.map(cube)

console.log(numbers)
console.log(squared)
console.log(cubed)

function square(element){
    return Math.pow(element,2)
}
function cube(element){
    return Math.pow(element,3)
}

console.log("------")

const students = ["Joana","Lando","Oscar","Charles"]

const studentsUpper = students.map(upperCase)
const studentsLower = students.map(lowerCase)

console.log(studentsUpper)
console.log(studentsLower)

function upperCase(element){
    return element.toUpperCase()
}

function lowerCase(element){
    return element.toLowerCase()
}

console.log("------")

const dates = ["2025-27-8","2024-1-1","2024-31-1"]

const formatedDates = dates.map(formatDates)

console.log(formatedDates)
function formatDates(element){
    const parts = element.split('-')
    return `${parts[1]}/${parts[2]}/${parts[0]}`    //['27/8/2025', '1/1/2024', '31/1/2024']
}
