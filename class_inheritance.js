class Animal{
    constructor(name){
        this.name=name
    }
    speak(){
        console.log(`${this.name} speaks`);
    }
}
class Cat extends Animal{
    constructor(name, color){
        super(name)
        this.color=color
    }
}
let thanasis=new Cat("Thanasis", "tuxedo")
console.log(thanasis);
