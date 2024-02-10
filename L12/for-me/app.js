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
3. lopp uzerinden isleyir:
calllback butun elementler ucun isdifade olunur.
4. original massivi deyismir yeni massivi geri gonderir.
arr = arr.map((elem, index, arr)=>) arrayi deyismek ucun bele etmelisen!
*/

// 1. arr.forEach((elem, index, arr)=>)
// Massivin uzerinden loop etmek:
let arr = ['ali', 'sada', 'sah', 'ferid']
arr.forEach((ad, index, arr) => {
    console.log(ad, index, arr);
})

