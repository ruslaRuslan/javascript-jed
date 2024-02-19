// 1.  Elə bir funksiya yaradın ki, bir cümlədə olan sözlər əksinə olaraq bizə geri qayıtsın.
//     Nümunə :
// reverseWords("hello world!  ") ➞ "world! hello"
// reverseWords("a good example") ➞ "example good a"
// function reverseWords(sentence) {
//     return sentence.split(' ').reverse().join(' ')
// }
// console.log(reverseWords("hello world!  "));// "world! hello"
// console.log(reverseWords("a good example")); //example good a

// ---------------------------------------------------------------------------------------------------------------------------------------




// 2.  Arqument kimi verilən kiçik və böyük hərflərin charCode –unu geri qaytaran funksiya yaradın.

//     Nümunə :
// counterpartCharCode("A") ➞ 97
// counterpartCharCode("a") ➞ 65

// const counterpartCharCode = (char) => char.charCodeAt(0) ^ 32
// console.log(counterpartCharCode('A'));
// console.log(counterpartCharCode('a'));


// ---------------------------------------------------------------------------------------------------------------------------------------


// 3.  toString() deyə bir funksiya yaradın, Cümləyə method olaraq həmin funksiyanı verdikdə bizə aşağıdakı şəkildə cümlə geri qaytarsın!

// Nümunə: toString("Hello World!") ➞ "!dlroW olleH"
// toString("RaceCar") ➞ "raCecaR"

// const toString = (string) => {
//     result = string.split('').reverse().join('')
//     return result
// }

// console.log(toString("Hello World!")); //"!dlroW olleH"
// console.log(toString("RaceCar"));      //raCecaR


