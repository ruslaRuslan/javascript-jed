
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

function myFunction(a, b) {
    return b.split(a).length - 1;
  }
  
  console.log(myFunction('m', 'how many times does the character occur in this sentence?')); // Ожидаемый результат: 2
  console.log(myFunction('h', 'how many times does the character occur in this sentence?')); // Ожидаемый результат: 4
  console.log(myFunction('?', 'how many times does the character occur in this sentence?')); // Ожидаемый результат: 1
  console.log(myFunction('z', 'how many times does the character occur in this sentence?')); // Ожидаемый результат: 0
  