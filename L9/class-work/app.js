
// let o = 25
// let o2 = o
// o = 'on alti'
// console.log(o) // on alti
// console.log(o2) // on



// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let o = {
//     ad: 'ali'
// }
// let o2 = o
// o.ad = 'ruslan'
// console.log(o.ad)
// console.log(o2.ad)
// _______________________________________________________________________________________________________________________________________________________________________



// function myFunction(a, b) {
//     return a.indexOf(b) !== -1 ? b + a : a + b;
// }

// console.log(myFunction('cheese', 'cake')); // Ожидаемый результат: 'cheesecake'
// console.log(myFunction('lips', 's')); // Ожидаемый результат: 'slips'
// console.log(myFunction('Java', 'script')); // Ожидаемый результат: 'Javascript'
// console.log(myFunction(' think, therefore I am', 'I')); // Ожидаемый результат: 'I think, therefore I am'

// _______________________________________________________________________________________________________________________________________________________________________

// function myFunction(a, b) {
//     return b.split(a).length - 1;
//   }
  
//   console.log(myFunction('m', 'how many times does the character occur in this sentence?')); // Ожидаемый результат: 2
//   console.log(myFunction('h', 'how many times does the character occur in this sentence?')); // Ожидаемый результат: 4
//   console.log(myFunction('?', 'how many times does the character occur in this sentence?')); // Ожидаемый результат: 1
//   console.log(myFunction('z', 'how many times does the character occur in this sentence?')); // Ожидаемый результат: 0
// _______________________________________________________________________________________________________________________________________________________________________
  
// function myFunction(a) {
//     return Math.round(a * 100) / 100;
//   }
  
//   console.log(myFunction(2.12397)); // Ожидаемый результат: 2.12
//   console.log(myFunction(3.136));   // Ожидаемый результат: 3.14
//   console.log(myFunction(1.12397)); // Ожидаемый результат: 1.12
//   console.log(myFunction(26.1379)); // Ожидаемый результат: 26.14
// _______________________________________________________________________________________________________________________________________________________________________


function myFunction(a) {
    return Array.from(String(a), Number);
  }
  
  console.log(myFunction(10));      // Ожидаемый результат: [1, 0]
  console.log(myFunction(931));     // Ожидаемый результат: [9, 3, 1]
  console.log(myFunction(193278));  // Ожидаемый результат: [1, 9, 3, 2, 7, 8]
  


