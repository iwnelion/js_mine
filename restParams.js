//rest parameters: (...rest) enables a func to handle a changeable number of args putting them in an array

    //spread: expands an array to its elements
    //rest: collects seperate elements in one array

function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods
}

const food1 = "souvlaki"
const food2 = "pizza"
const food3 = "hotdog"
const food4 = "sushi"

openFridge(food1,food2,food3,food4)     //souvlaki pizza hotdog sushi

const foods = getFood(food1,food2,food3)//creates an array:
console.log(foods);                     //(3) ['souvlaki', 'pizza', 'hotdog']

//makes an array and sums it
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result+=number
    }
    return result
}

console.log(sum(5,8,20,30,100,-1))  //162

//makes an array and finds the avg
function getAverage(...numbers){
    let result = 0
    for(let number of numbers){
        result+=number
    }
    return result / numbers.length
}

const average = getAverage(5,100,50)

console.log(average)    //51.666666666666664

//combine a lot of strings
function combineStrings(...strings){
    return strings.join(" ")
}
const fullName = combineStrings("mr.","thanasis")
// => we could have any amount of args and it would still work!

console.log(fullName)   //mr. thanasis
