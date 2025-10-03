// static : keywords that defines properties or methods that belond in the same class 
//          instead of the object that's being created by the class (anything static belongs to the class)

class User{
    static counter = 0;

    constructor(username){
        this.username = username
        User.counter++
    }
    sayHello(){
        console.log(`hello, my username is ${this.username}`)
    }
    static getUserCount(){
        console.log(`there are ${User.counter} online users`)
    }
}

const user1 = new User("jo")
const user2 = new User("lando")

console.log(User.counter);      // 2

const user3 = new User("oscar")

console.log(User.counter);      // 3

user1.sayHello()        // hello, my username is jo
user2.sayHello()        // hello, my username is lando
user3.sayHello()        // hello, my username is oscar

User.getUserCount()     // there are 3 online users
