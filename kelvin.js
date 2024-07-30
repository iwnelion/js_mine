//today's forecast in kelvin
const kelvin=293;
//today's forecast in celsius
let celsius=kelvin-273;
//today's forecast in fahrenheit
let fahrenheit=celsius*(9/5)+32;
//round down the fahrenheit temperature
fahrenheit=Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees in Fahrenheit.`)
