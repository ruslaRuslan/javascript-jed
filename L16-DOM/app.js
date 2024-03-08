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

let human = {
    ad: 'ali',
    age: 22
}

function showDetalis(ad, age) {
    console.log(`Hi, my names is ${ad}. I'm ${age} years old`);
}
showDetalis('sah', 98) //Hi, my names is sah. I'm 98 years old
showDetalis(human.ad, human.age)//Hi, my names is ali. I'm 22 years old


