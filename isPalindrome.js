// function isPalindrome(word){
//     let reversedWord=word.split('').reverse().join('')
//     if(word===reversedWord){
//         return true
//     }else{
//         return false
//     }
// }

const isPalindrome=word=>word===word.split('').reverse().join('')

console.log(isPalindrome('racecar'), "true")
console.log(isPalindrome('bob'), "true")
console.log(isPalindrome('tacos'), "false")
