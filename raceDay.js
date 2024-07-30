let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly=false;
let age=23;
if(age>=18 && registeredEarly){
  raceNumber+=1000;
}
if(age>=18 && registeredEarly){
  console.log(`Be there at 9:30am. Your race number is ${raceNumber}.`)
}
else if(age>=18 && !registeredEarly){
  console.log(`Late adults run at 11:00am. Your race number is ${raceNumber}.`)
}
else if(age<18){
  console.log(`Youth registrants run at 12:30 pm regardless of registration. Your race number is ${raceNumber}.`)
}
