const email = "contact@somemail.gr";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);

console.log(username);  //contact
console.log(extension); //somemail.gr

// -> it's dynamic. despite of the length of each part, it will work