// let ad = `2+2=${2 + 2}
// 2*3=${2 * 3}`
// console.log(ad)
// ---------------------------------------------------------------------------------------------------------------------------------------

// escape character (special)  \n , \t , \a
// let ad = 'ali\t\tahmad'
// let ad2 = 'ali\tahmad'
// let ad3 = 'ali\\ahmad'   // iki dene \\ beraberdi bir \, \\===\
// let ad4 = '\u{1F60D}'
// console.log(`1.  ${ad},  |  2. ${ad2}, |  3. ${ad3}, | 4. ${ad4} `)
// ---------------------------------------------------------------------------------------------------------------------------------------


// ---------------------------------------------------------------------------------------------------------------------------------------
// let ad = new String('Ruslan');
// console.dir(ad)
// ---------------------------------------------------------------------------------------------------------------------------------------

// let name = 'Ruslan';
// console.log(name[0]);
// console.log(name['1']);
// console.log(name[2]);
// console.log(name['3']);
// console.log(name[4]);
// console.log(name[5]);

// ---------------------------------------------------------------------------------------------------------------------------------------


// const ad = 'ali'
// const obj = {
//     ad: 'ferid'
// }
// obj['ad'] = 'intiqam',
//     console.log(ad['1']);


// let ad = 'ali';
// ad[0] = 'c';
// console.log(ad);


/*
1. imutable
2. mutable

*/

// ---------------------------------------------------------------------------------------------------------------------------------------

// const ad ='plmnj,lmknjnjnbbbvgvggghhhhhhhhvvvvvvvvvvvvyyyksW'
// console.log(ad[0]);            //p
// console.log(ad[48]);           //W  
// console.log(ad[49 - 1]);       //W      
// console.log(ad.length);        //49     
// console.log(ad.length - 1);    //48     
// console.log(ad[100]);          //undefined  

// ---------------------------------------------------------------------------------------------------------------------------------------


// const ad = 'plmnj,lmknjnjnbbbvedfeffdjcbdhgchdgghhhhhhhhvvvvvvvvvvvvyyyksW'
// //string-in metodlari
// for (let i = 0; i < ad.length; i++) {
//     console.log(ad[i]);
// }

// ---------------------------------------------------------------------------------------------------------------------------------------

// const ad = 'plmnj,lmknjnjnbbbvedfeffdjcbdhgchdgghhhhhhhhvvvvvvvvvvvvyyyksW'
// ad.charAt(0) //ve ad.[] eynidirler