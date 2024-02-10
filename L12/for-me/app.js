// let arr = ['test', 'sada', 'ali', 'sahmurad', 'ali', 'intiqam']
// arr[0] = 'ali'
// console.log(arr); //['ali', 'sada', 'ali', 'sahmurad', 'ali', 'intiqam']
//----------------------------------------------------------------------------------------------------------------------------------------

// array-in metodlari
// let arr = ['test', 'sada', 'ali', 'sahmurad', 'Ali', 'ruslan', 'abbas', 'intiqam', 'bayram']

// arr.sort()  // elifba sirasina gore duzur 
// console.log(arr); //['Ali', 'abbas', 'ali', 'bayram', 'intiqam', 'ruslan', 'sada', 'sahmurad', 'test']

//----------------------------------------------------------------------------------------------------------------------------------------

// array-in metodlari   
// let arr = ['test', 'sada', 'ali', 'sahmurad', 'Ali', 'Ruslan', 'abbas', 'intiqam', 'bayram']

// arr.sort()  // elifba sirasina gore duzur 
// console.log(arr); //['Ali', 'Ruslan', 'abbas', 'ali', 'bayram', 'intiqam', 'sada', 'sahmurad', 'test']

// asky table-da balaca a 97-di, boyuk A 65-di. 65 vakum seraitinde kicikdi 97-den. Aski cedvelindeki nomresi kicik eded qabaga dusur

//----------------------------------------------------------------------------------------------------------------------------------------


// let arr = [12, 2, 22]
// arr.sort()  
// console.log(arr); //[12, 2, 22]

//----------------------------------------------------------------------------------------------------------------------------------------

// callback array
// let arr = [12, 2, 22, 1]
// arr.sort((a, b) => a - b)
// console.log(arr); //[1, 2, 12, 22]

// sort array-i deyisen bir funksiyadir
//----------------------------------------------------------------------------------------------------------------------------------------


// let sairler = [
//     { name: 'Ali', year: 1990 },
//     { name: 'Ferid', year: 2010 },
//     { name: 'Sada', year: 1890 },
// ]
// sairler.sort((a, b) => a.year - b.year)
// console.log(sairler);

//----------------------------------------------------------------------------------------------------------------------------------------

// let sairler = [
//     { name: 'Ali', year: 1990 },
//     { name: 'Sada', year: 1890 },
//     { name: 'Ferid', year: 2010 },
// ]
// sairler.sort((a, b) => a.name > b.name ? 1 : -1)
// console.log(sairler);


//----------------------------------------------------------------------------------------------------------------------------------------

// const ad = 'ali, muxtar, sada, sah, ferid'
// const adlar = ad.split(', ').join('')
// console.log(adlar);

//----------------------------------------------------------------------------------------------------------------------------------------

/*

1. arrayin ES6 (esmascript 2015) methods
forEach, filter, find, findIndex, map, every, some, reduce*

2. hamsi: eyni arqument alir:(reduce xaric) eyni arqument alir:
(ArraydekiElement, ElementIndex, MassiveReferanse)=>{}
arr.forEach(elem, index, arr) =>  )
3. loop uzerinden isleyir:
callback butun elementler ucun isdifade olunur.
4. original massivi deyismir yeni massivi geri gonderir.
arr = arr.map((elem, index, arr)=>) arrayi deyismek ucun bele etmelisen!
*/

// 1. arr.forEach((elem, index, arr)=>)
// Massivin uzerinden loop etmek:
// let arr = ['ali', 'sada', 'sah', 'ferid']
// arr.forEach((ad, index, arr) => {
//     console.log(ad, index, arr); })// console-nin cavabi asagida 
//     ↓

//     ali 0 (4) ['ali', 'sada', 'sah', 'ferid']
// app.js:85 sada 1 (4) ['ali', 'sada', 'sah', 'ferid']0: "ali"1: "sada"2: "sah"3: "ferid"length: 4[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// app.js:85 sah 2 (4) ['ali', 'sada', 'sah', 'ferid']0: "ali"1: "sada"2: "sah"3: "ferid"length: 4[[Prototype]]: Array(0)
// app.js:85 ferid 3 (4) ['ali', 'sada', 'sah', 'ferid']

// ___________________________________________________
// let arr = ['ali', 'sada', 'sah', 'ferid']
// arr.forEach((ad, index, arr) => {
//     console.log(ad, index,arr);  // ↓
// })
//ali 0
//sada 1
//sah 2
//ferid 3

// Bunun ozu loop uzerinden isleyir
// forEach massiv uzerinden loop edir
// ___________________________________________________



// let arr = ['ali', 'sada', 'sah', 'ferid']
// arr.forEach((value) => {
//     console.log(`~~~${value}~~~`);   //        ↓
// })                                       // ~~~ali~~~
// ~~~sada~~~
// ~~~sah~~~
// ~~~ferid~~~

// bu callcack void callback-di return olunmur

// ___________________________________________________

// let arr = ['ali', 'sada', 'sah', 'ferid']
// let netice = arr.every((ad) => ad.length <= 5)
// console.log(netice);          // true

// ___________________________________________________


// let arr = ['ali', 'sada', 'sah', 'ferid']
// let netice = arr.every((ad) => ad.length < 5)
// console.log(netice);          // false

// ___________________________________________________


// let arr = ['ali', 'sada', 'sah', 'ferid']
// let netice = arr.every((ad) => ad.length < false)
// console.log(netice);    // false 

// ___________________________________________________

// let arr = ['ali', 'sada', 'sah', 'ferid']
// let netice = arr.every((ad) => ad.length < true)
// console.log(netice);     //false

// ___________________________________________________

// let arr = ['ali', 'sada', 'sah', 'ferid']
// let netice = arr.every((ad) => ad[0] == 's')
// console.log(netice);               //false
// ___________________________________________________


// let arr = ['ali', 'sada', 'sah', 'ferid']
// let netice = arr.every((ad) => true)
// console.log(netice);     //true

// ___________________________________________________


// let arr = ['ali', 'sada', 'sah', 'ferid']
// let netice = arr.every((ad) => false)
// console.log(netice);             //false

// ___________________________________________________

// let arr = ['ali', 'sada', 'sah', 'ferid']
// let netice = arr.some((ad) => ad[0] === 'a')
// console.log(netice);           //true

// ___________________________________________________

// let arr = ['ali', 'sada', 'sah', 'ferid']
// let netice = arr.some((ad) => ad.length === 3)
// console.log(netice);           //true

// ___________________________________________________

// let arr = ['ali', 'sada', 'sah', 'ferid']
// let netice = arr.some((ad) => ad.length === 6)
// console.log(netice);          //false

// ___________________________________________________

// Sherte gore elementlerin tapilmasi
// let arr = ['ali', 'sada', 'sah', 'ferid']
// let element = arr.find((ad, index) => ad[0] === 'a')
// console.log(element);       //ali

// ___________________________________________________


// let arr = ['ali', 'sada', 'sah', 'ferid']
// let element = arr.find((ad, index) => index === 3)
// console.log(element);     //ferid

// ___________________________________________________

// let arr = ['ali', 'sada', 'sah', 'ferid']
// let element = arr.find((ad, index) => ad.length === 4)
// console.log(element);          //sada

// ___________________________________________________

// let arr = ['ali', 'sada', 'sah', 'ferid']
// let element = arr.find((ad, index) => true)
// console.log(element);      //ali 

// ___________________________________________________


// let arr = ['ali', 'sada', 'sah', 'ferid']
// let element = arr.find((ad, index) => true)
// console.log(element);         //undefined

// ___________________________________________________

// let arr = ['ali', 'sada', 'sah', 'ferid']
// let element = arr.find((ad, index) => index)
// console.log(element);    //sada

// ___________________________________________________


// let arr = ['ali', 'sada', 'sah', 'ferid']
// let element = arr.filter((ad, index) => true)
// console.log(element);     //['ali', 'sada', 'sah', 'ferid']

// ___________________________________________________

// let arr = ['ali', 'sada', 'sah', 'ferid']
// let element = arr.filter((ad, index) => ad[0] === 's')
// console.log(element);       // ['sada', 'sah']
// ___________________________________________________

// let arr = ['ali', 'sada', 'sah', 'ferid']
// let element = arr.filter((ad, index) => !index)
// console.log(element);     //['ali']
// ___________________________________________________

// let arr = ['ali', 'sada', 'sah', 'ferid']
// let element = arr.findIndex((ad) => ad[1] === 'e')
// console.log(element);    //3

// ___________________________________________________

// let arr = ['ali', 'sada', 'sah', 'ferid']
// let element = arr.findIndex((ad) => ad[0] === 'f')
// console.log(element);     //3

// ___________________________________________________

// let arr = ['ali', 'sada', 'sah', 'ferid']
// let netice = arr.map((ad, index) => ad[0].toLocaleUpperCase() )
// console.log(netice);   // ['A', 'S', 'S', 'F']

// ___________________________________________________

// let arr = ['ali', 'sada', 'sah', 'ferid']

// let humans = [
//     {
//         name: 'ali',
//         age: 23,
//     },
//     {
//         name: 'alion',
//         age: 29,
//     }, {
//         name: 'kali',
//         age: 98,
//     },
//     {
//         name: 'bali',
//         age: 27,
//     },
// ]

// let adlar = humans.map((human) => human.name)
// console.log(adlar); //   ['ali', 'alion', 'kali', 'bali']

// let yaslar = humans.map((human) => human.age)
// console.log(yaslar); //  [23, 29, 98, 27]

// ___________________________________________________



// let arr = ['ali', 'sada', 'sah', 'ferid']

// let humans = [
//     {
//         name: 'ali',
//         age: 23,
//     },
//     {
//         name: 'alion',
//         age: 29,
//     }, {
//         name: 'kali',
//         age: 98,
//     },
//     {
//         name: 'bali',
//         age: 27,
//     },
// ]

// let adlar = humans.map((ureyimIsdediyi) => ureyimIsdediyi.name + ureyimIsdediyi.age)
// console.log(adlar); // ['ali23', 'alion29', 'kali98', 'bali27']

// ___________________________________________________

// let ededler = [12, 2, 45, 67, 75, 24]
// let newArr = ededler.map((eded) => {
//     if (eded % 2 === 0) {
//         return 'cut'
//     } else {
//         return 'tek'
//     }
// })
// console.log(newArr);

// ___________________________________________________

// let ededler = [12, 2, 45, 67, 75, 24]
// let newArr = ededler.map((eded) => eded % 2 === 0 ? 'cut' : 'tek')
// console.log(newArr);

// ___________________________________________________

let ededler = [12, 2, 45, 67, 75, 24]
ededler.filter((eded) => eded % 2 === 0).sort((a, b) => a - b).forEach((eded) => console.log(eded))


