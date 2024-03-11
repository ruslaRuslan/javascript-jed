// // destructure
// const human = {
//     ad: 'Ruslan',
//     age: 23
// }

// function write(obj){
//     console.log(`${obj.ad} ${obj.age}`);
// }
// write(human) //Ruslan 23
// -----------------------------------------------------------------------------------

// // destructure 2
// const human = {
//     ad: 'Ruslan',
//     age: 23,
//     doing() { }
// }

// function write({ ad, age }) {
//     console.log(`${ad} ${age}`);
// }
// write(human) //Ruslan 23

// -----------------------------------------------------------------------------------


// destructure 3
// const fe10 = ['Ruslan', 'Sada', 'Ali', 'Isa', 'Ramin']

// const [...rest] = fe10
// console.log(rest); //['Ruslan', 'Sada', 'Ali', 'Isa', 'Ramin']
// // rest -> qalanlari
// // spread -> yaymag

// const ad = fe10[0]
// console.log(ad); //Ruslan
// // yuxaridakini evezine asagidakini-de yazmaq olar

// const [sifirinci] = fe10
// console.log(sifirinci); //Ruslan

// -----------------------------------------------------------------------------------
// IIFE -> immediately invoked function expression

// () => { }
//1. function(){ }
//2. yuxaridakiler adlanir Function expression her ikisi-de

// (()=>{})()
// (() => {
//     console.log('salam');
// })() // derhal cagirilma funksiyasi, bunlar IIFE adlani

// // clousure
// let a = 12;

// (() => {
//    let b = 9
//     console.log(a); //12
// })()
// console.log(b); //cixmayacax cunki iceriden cole islemir ancax iceriden iceri ve colden iceri isleyir

// -----------------------------------------------------------------------------------

// clousure
let a = 12;

(() => {
   a = 9
    console.log(a); //9
})()
console.log(a) //9 
// ikiside 9 olacax cunki sonuncu deyisikliyi goturur