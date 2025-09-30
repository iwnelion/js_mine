// this : refers to the object that is being used
//        it's used inside the context of the object

const person1 = {
    name: "jo",
    age: 24,
    food: "pizza",
    sayHello: function(){console.log(`hello ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.food}`)}
}

const person2 = {
    name: "lando",
    age: 25,
    food: "sushi",
    sayHello: function(){console.log(`hello ${this.name}`)},
    eat: function(){console.log(`${this.name} is NOT eating ${this.food}`)}
}

person1.sayHello()      // hello jo
person1.eat()           // jo is eating pizza
person2.sayHello()      // hello lando
person2.eat()           // lando is NOT eating sushi
