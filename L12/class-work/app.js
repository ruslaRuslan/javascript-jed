// array's ESA methods

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']
// // JED.Fronted.fe10.forEach((ad, index, arr) => { })
// fe10.forEach((ad, i, array) => {
//     console.log(`${i + 1}. ${ad} `);
//     array.push(ad.concat('elave edildi.'))
//     console.log('this is array', array);
// })
// console.log(fe10);

// ________________________________________________________

// const fe10 = ['ali', 'muhtar', { ad: 'sada' }, 'sabina']
// // JED.Fronted.fe10.forEach((ad, index, arr) => { })
// fe10.forEach((ad, i, array) => {
//     console.log(`${i + 1}. ${ad}`);
//     if (i === 2) {
//         ad.ad = 'hamza'
//         console.log(array);

//     }
// });
// console.log(fe10);

// ________________________________________________________


// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']
// fe10.reverse()
// console.log(fe10);

// ________________________________________________________


/*
1. arrayin ES6 (esmascript 2015) methods
forEach, filter, find, findIndex, map, every, some, reduce*

2. hamsi: eyni arqument olaraq function yeni, callback alir:
(ArraydekiElement, ElementIndex, MassiveReferanse)=>{}
arr.forEach(elem, index, arr) =>  )

3. loop uzerinden isleyir:
callback butun elementler ucun isdifade olunur.

4. original massivi deyismir yeni massivi geri gonderir.
arr = arr.map((elem, index, arr)=>) arrayi deyismek ucun bele etmelisen!
*/

const fe10 = ['ali', 'muhtar', 'sada', 'sabina']

// forEach -> sadece sede loop etmekdir.

fe10.forEach((elem, index)=>{
    document.write(`${index + 1}-ci element. ${elem} <br/>`)
})
// document.write ↓
// 1-ci element. ali
// 2-ci element. muhtar
// 3-ci element. sada
// 4-ci element. sabina








