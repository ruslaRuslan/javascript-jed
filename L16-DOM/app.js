// const [first, iki,] = ['ali', 'vali']
// console.log(first);// ali
// console.log(iki);// vali
// // yazilari massive yazdigimiz sira ile saydi ne yazsax siraya gore sayacax



// // "destructure" var ve "structure" var
// // bug -> debug
// // -----------------------------------------------------------------------------------

const [alion, intiqam,] = ['bext qusu', 'vali', 'das']

let human = {
    ad: 'ali',
    age: 22
}

// const age = human.age
// const ad = human.ad

const { age, ad } = human // yuxaridakilrin evezine belede yazmax olar

console.log(age); // 23
console.log(ad);  //  ali
