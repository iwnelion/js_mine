// constructor : a special function to declare properties and methods of objects

function Car(make,model,year,color){
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.drive = function(){console.log(`you drive the ${this.model}`)}
}

const car1 = new Car("vw","golf",2010,"black")
const car2 = new Car("ford","mustang",2015,"red")

console.log(car1.make)      // vw
console.log(car1.model)     // golf
console.log(car1.year)      // 2010
console.log(car1.color)     // black
car1.drive()                // you drive the golf

console.log("------")

console.log(car2.make)      // ford
console.log(car2.model)     // mustang
console.log(car2.year)      // 2015
console.log(car2.color)     // red
car2.drive()                // you drive the mustang
