// super = keyword that is used in classes to call the constructor or 
//         to gain access in the properties / methods of the parent (superclass)
//         this = this object
//         super = the parent

class Animal{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    move(speed){
        console.log(`the ${this.name} moves at speed of ${speed} km/h`)
    }
}

class Rabbit extends Animal{
    constructor(name,age,runSpeed){
        super(name,age)
        this.runSpeed = runSpeed
    }

    run(){
        console.log(`this ${this.name} can run`)
        super.move(this.runSpeed)
    }
}

class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age)
        this.swimSpeed = swimSpeed
    }

    swim(){
        console.log(`this ${this.name} can swim`)
        super.move(this.swimSpeed)
    }
}

class Hawk extends Animal{
    constructor(name,age,flySpeed){
        super(name,age)
        this.flySpeed = flySpeed
    }

    fly(){
        console.log(`this ${this.name} can fly`)
        super.move(this.flySpeed)
    }
}

const rabbit = new Rabbit("rabbit",1,15)
const fish = new Fish("fish",2,12)
const hawk = new Hawk("hawk",3,50)

console.log(rabbit.name)
console.log(rabbit.age)
console.log(rabbit.runSpeed)

rabbit.run()
// this rabbit can run
// the rabbit moves at speed of 15 km/h

fish.swim()
// this fish can swim
// the fish moves at speed of 12 km/h

hawk.fly()
// this hawk can fly
// the hawk moves at speed of 50 km/h
