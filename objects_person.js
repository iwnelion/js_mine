//objet : a collection of related properties and/or methods
//      could represent real objects (people, places, products)
//      obect = {key:value,
//              function()}

const person1 = {
    firstName:"iwn",
    lastName:"elion",
    age:24,
    likesCats:true,
    sayHello: function(){console.log("helloo")}
}

const person2 = {
    firstName:"lando",
    lastName:"norris",
    age:25,
    likesFish:false,
    sayHello: function(){console.log("hello i'm lando")},
    eat: () => console.log("i'm hungry, but don't give me fish please")     //arrow func
}

console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.age)
console.log(person1.likesCats)

console.log(person2.firstName)
console.log(person2.lastName)
console.log(person2.age)
console.log(person2.likesFish)

person1.sayHello()
person2.sayHello()
person2.eat()
