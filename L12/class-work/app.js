// array's ESA methods

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']
// // JED.Fronted.fe10.forEach((ad, index, arr) => { })
// fe10.forEach((ad, i, array) => {
//     console.log(`${i + 1}. ${ad} `);
//     array.push(ad.concat('elave edildi.'))
//     console.log('this is array', array);
// })
// console.log(fe10);

// _______________________________________________________________________________________________________________________________________

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

// _______________________________________________________________________________________________________________________________________


// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']
// fe10.reverse()
// console.log(fe10);

// _______________________________________________________________________________________________________________________________________


/*
1. arrayin ES6 (esmascript 2015) methods
forEach+, filter+, find+, findIndex, map, every+, some+, reduce*

2. hamsi: eyni arqument olaraq function yeni, callback alir:
(ArraydekiElement, ElementIndex, MassiveReferanse)=>{}
arr.forEach(elem, index, arr) =>  )

3. loop uzerinden isleyir:
callback butun elementler ucun isdifade olunur.

4. original massivi deyismir yeni massivi geri gonderir.
arr = arr.map((elem, index, arr)=>) arrayi deyismek ucun bele etmelisen!
*/

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']

// forEach -> sadece sede loop etmekdir.

// fe10.forEach((elem, index)=>{
//     document.write(`${index + 1}-ci element. ${elem} <br/>`)
// })
// document.write ↓
// 1-ci element. ali
// 2-ci element. muhtar
// 3-ci element. sada
// 4-ci element. sabina
// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']

// forEach -> sadece sede loop etmekdir.

// const a = fe10.forEach((elem, index)=>{
//     document.write(`${index + 1}-ci element. ${elem} <br/>`)
// })
// console.log(a);  // undefined
// ---------------------------------------------------------------------------------------------------------------------------------------


// every


// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']
// const result = fe10.every((elem, ind) => {
//     const shert = elem.length < 20
//     return shert;
// })
// console.log(result);  //true

// _______________________________________________________________________________________________________________________________________


// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']
// const result = fe10.every((elem, ind) => {
//     const shert = elem.length < 6
//     return shert;
// })
// console.log(result);  //false

// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']
// const result = fe10.every((elem, ind) => elem.length < 6)
// console.log(result);  //false
// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']
// const result = fe10.every((elem, ind) => true)
// console.log(result);   //true

// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']
// const result = fe10.every((elem, ind) => elem)
// console.log(result);   //true

// _______________________________________________________________________________________________________________________________________


// falsy 0, Nan, '', false, undefined, null
// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const result = fe10.every((elem, index) => 2)
// console.log(result);  //true

// _______________________________________________________________________________________________________________________________________


// falsy 0, Nan, '', false, undefined, null
// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const result = fe10.every((elem, index) => elem)
// console.log(result);  //false

// _______________________________________________________________________________________________________________________________________

// // falsy 0, Nan, '', false, undefined, null
// const fe10 = ['ali', 'muhtar', 'sada', 'sabina','']
// const result = fe10.every((elem, index) => index)
// console.log(result);  //false

// cunki birinci 0-dan baslayir, 0-da falsy-di

// _______________________________________________________________________________________________________________________________________

// falsy 0, Nan, '', false, undefined, null
// const fe10 = ['ali', 'muhtar', 'sada', 'sabina','']
// const result = fe10.every((elem, index) => index)
// console.log(result); 

// ---------------------------------------------------------------------------------------------------------------------------------------

// some

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina','']
// const result = fe10.some((elem, index) => index)
// console.log(result)   //true

// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina','']
// const result = fe10.some((elem, index) => 0)
// console.log(result)  //false



// ---------------------------------------------------------------------------------------------------------------------------------------

// find

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.find((elem) => elem[0] === 's')
// console.log(user);

// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.find((elem) => elem.length > 2)
// console.log(user); //ali

// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.find((elem, index) => index)
// console.log(user)   //muhtar
// 'ali' falsy-di deye 'muhtar' goturdu, cunki 0-falsy-di

// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.find((elem, index) => index - 1)
// console.log(user) //ali
// cunki 1-den 1 cixdix ve 0-ci adi cixardi

// _______________________________________________________________________________________________________________________________________


// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.find((elem, index) => 0)
// console.log(user)  //undefined
// cunki 0 falsy-di


// _______________________________________________________________________________________________________________________________________

// const fe10 = [null, 'ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.find((elem, index) => 1)
// console.log(user) //null 
//0-dan basqa ve -0-dan basqa hansi reqem ve ededi  yazsaq null verecek, 0 ve -0-da ise undefined verecek


// ---------------------------------------------------------------------------------------------------------------------------------------


// findIndex

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.findIndex((elem, index) => elem.length > 5)
// console.log(user) //1

// ---------------------------------------------------------------------------------------------------------------------------------------

// filter

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.filter((elem, index) => elem.length > 5)
// console.log(user) //['muhtar', 'sabina']

// _______________________________________________________________________________________________________________________________________

// const suCen = ['s', 'q','s','q','s' , 'q','s','q','s', 'q','s','q','s']
// const caydan = suCen.filter((molekul) => molekul === 's')
// console.log(caydan) //['s', 's', 's', 's', 's', 's', 's']

// _______________________________________________________________________________________________________________________________________


// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.filter((elem, index) => elem[0] === 'm')
// console.log(user)   //['muhtar']
// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.filter((elem, index) => elem[0] === 's')
// console.log(user) //['sada', 'sabina']

// _______________________________________________________________________________________________________________________________________



// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', 'aliabbas','alineymet', 'alisahib', 'alidadas', 'behruz']
// const user = fe10.filter((elem, index) => elem[0] === 'a')
// console.log(user)  //['ali', 'aliabbas', 'alineymet', 'alisahib', 'alidadas']

// _______________________________________________________________________________________________________________________________________


// const fe10 = ['ali', 'aslan','muhtar', 'sada', 'sabina', 'aliabbas','alineymet', 'alisahib', 'alidadas', 'behruz']

// const startsWithAli = fe10.filter((elem) => elem.toLocaleLowerCase().startsWith('ali'))
// console.log(startsWithAli) //['ali', 'aliabbas', 'alineymet', 'alisahib', 'alidadas']
// En yaxsi metod bu metotdur

// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'aslan', 'muhtar', 'sada', 'sabina', 'aliabbas', 'alineymet', 'alisahib', 'alidadas', 'behruz']

// const startsWithAli = fe10.filter((elem) => elem.slice(0, 3) === 'ali')
// console.log(startsWithAli) //['ali', 'aliabbas', 'alineymet', 'alisahib', 'alidadas']

// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'aslan', 'muhtar', 'sada', 'sabina', 'aliabbas', 'alineymet', 'alisahib', 'alidadas', 'behruz']

// const startsWithAli = fe10.filter((elem) => elem.slice(0, 3).toLocaleLowerCase() === 'ali')
// console.log(startsWithAli) //['ali', 'aliabbas', 'alineymet', 'alisahib', 'alidadas']

// _______________________________________________________________________________________________________________________________________


// const fe10 = ['ali', 'aslan', 'bali', 'muhtar', 'sada', 'sabina', 'aliabbas', 'alineymet', 'alisahib', 'alidadas', 'behruz']

// const startsWithAli = fe10.filter((elem) => elem.includes('ali'))
// console.log(startsWithAli) //['ali', 'bali', 'aliabbas', 'alineymet', 'alisahib', 'alidadas']

// _______________________________________________________________________________________________________________________________________





// T1. uzunlugu 5,6 ve ya 7-ye beraber olan yeni massive yigin; [filter]

// const fe10 = ['ali', 'aslan', 'bali', 'muhtar', 'sada', 'sabina', 'aliabbas', 'alineymet', 'alisahib', 'alidadas', 'behruz']

// const task1 = fe10.filter((name) => name.length >= 5 && name.length <= 7)
// console.log(task1);


// ---------------------------------------------------------------------------------------------------------------------------------------


// T2. sonu i ile ve uzunlugu 4-e beraber olan ilk elementi tapin; [find]

// const fe10 = ['ali', 'aslan', 'bali', 'muhtar', 'sada', 'sabina', 'aliabbas', 'alineymet', 'alisahib', 'alidadas', 'behruz']

// const task1 = fe10.find((name) => name.endsWith('i') && name.length === 4)
// console.log(task1);

// ---------------------------------------------------------------------------------------------------------------------------------------


// T3. Butun adlar-da a herfi varmi? [every]

// const fe10 = ['ali', 'aslan', 'bali', 'muhtar', 'sada', 'sabina', 'aliabbas', 'alineymet', 'alisahib', 'alidadas', 'behruz']

// const task3 = fe10.every((name) => name.includes('a'))
// console.log(task3);

// ---------------------------------------------------------------------------------------------------------------------------------------


// T4. Alman turist: Sizin adlarinizda z herfi isdifafe olunurmu[some]

// const fe10 = ['ali', 'aslan', 'bali', 'muhtar', 'sada', 'sabina', 'aliabbas', 'alineymet', 'alisahib', 'alidadas', 'behruz']

// const task4 = fe10.some((name) => name.includes('z'))
// console.log(task4);

// ---------------------------------------------------------------------------------------------------------------------------------------

// const fe10 = ['ali', 'aslan', 'bali', 'muhtar', 'sada', 'sabina', 'aliabbas', 'alineymet', 'alisahib', 'alidadas', 'behruz']

// // bashHerifler = ['a', 'a', 'r', 'm', 's', 'b']
// // mapper
// // map

// const yeniArr = fe10.map((element, i) => element[0].toUpperCase() )
// console.log(yeniArr);















