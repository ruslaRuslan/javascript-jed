// const [first, iki,] = ['ali', 'vali']
// console.log(first);// ali
// console.log(iki);// vali
// // yazilari massive yazdigimiz sira ile saydi ne yazsax siraya gore sayacax



// // "destructure" var ve "structure" var
// // bug -> debug
// // -----------------------------------------------------------------------------------

// const [alion, intiqam,] = ['bext qusu', 'vali', 'das']

// let human = {
//     ad: 'ali',
//     age: 22
// }

// // const age = human.age
// // const ad = human.ad

// const { age, ad } = human // yuxaridakilrin evezine belede yazmax olar

// console.log(age); // 23
// console.log(ad);  //  ali

// -----------------------------------------------------------------------------------

// let human = {
//     ad: 'ali',
//     age: 22
// }

// function showDetalis(ad, age) {
//     console.log(`Hi, my names is ${ad}. I'm ${age} years old`);
// }
// showDetalis('sah', 98) //Hi, my names is sah. I'm 98 years old
// showDetalis(human.ad, human.age)//Hi, my names is ali. I'm 22 years old

// -----------------------------------------------------------------------------------

// let human = {
//     ad: 'ali',
//     age: 22
// }

// function showDetalis({ age, ad }) {
//     console.log(`Hi, my names is ${ad}. I'm ${age} years old`);
// }
// showDetalis(human)
// showDetalis({ ad: 'ferid', age: 18, gender: true })

// -----------------------------------------------------------------------------------

// let human = {
//     ad: 'ali',
//     age: 22
// }

// function showDetalis({ age : yas, ad:name }) {
//     console.log(`Hi, my names is ${name}. I'm ${yas} years old`);
// }
// showDetalis(human)
// showDetalis({ ad: 'ferid', age: 18, gender: true })

// -----------------------------------------------------------------------------------


// let human = {
//     ad: 'ali',
//     age: 22
// }

// function showDetalis({ age = 0, ad }) {
//     console.log(`Hi, my names is ${ad}. I'm ${age} years old`);
// }
// showDetalis(human)
// showDetalis({ ad: 'ferid', gender: true })
// -----------------------------------------------------------------------------------

let human = {
    ad: 'ali',
    age: 22
}

function showDetalis({ age = 0, ad= '{--yoxdur--}' }) {
    console.log(`Hi, my names is ${ad}. I'm ${age} years old`);
}
showDetalis(human)
showDetalis({ ad: 'ferid', gender: true })
showDetalis({ gender: true })
