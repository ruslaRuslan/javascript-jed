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
// ---------------------------------------------------------------------------------------------------------------------------------------


// const ad = 'plmnj,lmknjnjnbbbvedfeffdjcbdhgchdgghhhhhhhhvvvvvvvvvvvvyyyksW'
// // //string-in metodlari
// let netice = ad.concat("JS")
// let netice2 = "JS".concat(ad)
// console.log(netice, netice2);
// ---------------------------------------------------------------------------------------------------------------------------------------


// const ad = 'plmnj,lmknjnjnbbbvedfeffdjcbdhgchdgghhhhhhhhvvvvvvvvvvvvyyyksW'
// // //string-in metodlari
// let netice = ad.endsWith('W') //ancax sonda olani gorsedir
// console.log(netice); //false

// ---------------------------------------------------------------------------------------------------------------------------------------

// const ad = 'plmnj,lmknjnjnbbbvedfeffdjcbdhgchdgghhhhhhhhvvvvvvvvvvvvyyyksW'
// // //string-in metodlari
// let netice = ad.startsWith('W') //ancax birinci olani gorsedir
// console.log(netice); //false

// ---------------------------------------------------------------------------------------------------------------------------------------

// const ad = 'plmnj,lmknjnjnbbbvedfeffdjcbdhgchdgghhhhhhhhvvvvvvvvvvvvyyyksW'
// // //string-in metodlari
// let netice = ad.includes('bv') //ancax  olani gorsedir
// console.log(netice); //false

// ---------------------------------------------------------------------------------------------------------------------------------------

// const ad = 'plmnj,lmknjnjnbbbvedfeffdjcbdhgchdgghhhhhhhhvvvvvvvvvvvvyyyksW'
// // //string-in metodlari
// let netice = ad.indexOf('jnj') //(hardan basladigini gorsedir) necenci oldugunu gorsedir
// console.log(netice); //10

// ---------------------------------------------------------------------------------------------------------------------------------------


// const ad = 'plmnj,lmknjnjnbbbvedfeffdjcbdhgchdgghhhhhhhhvvvvvvvvvvvvyyyksW'
// // //string-in metodlari
// let netice = ad.lastIndexOf('l') //(hardan basladigini gorsedir) necenci oldugunu gorsedir
// console.log(netice); //10
// ---------------------------------------------------------------------------------------------------------------------------------------

// const ad = '1'  //01
// // String metodlar
// let netice = ad.padStart(3, '0')
// console.log(netice);

// ---------------------------------------------------------------------------------------------------------------------------------------


// const ad = '1'  //01
// // String metodlar
// let netice = ad.padEnd(3, '0')
// console.log(netice);

// ---------------------------------------------------------------------------------------------------------------------------------------

// const ad = '8'
// // string metodlar
// let netice = ad.repeat(3)
// console.log(netice);

// ---------------------------------------------------------------------------------------------------------------------------------------


// const ad = '8'
// // string metodlar
// let netice = ad.repeat(3)
// console.log(netice);

// ---------------------------------------------------------------------------------------------------------------------------------------

// const ad = 'ruslan'
// // string metodlar
// let netice = ad.replace('ruslan', 'RUSLAN')
// console.log(netice);   //RUSLAN

// ---------------------------------------------------------------------------------------------------------------------------------------


// const ad = 'ruslan'
// // string metodlar
// let netice = ad.replace('ruslan', 'ALI')
// console.log(netice);   //ALI

// ---------------------------------------------------------------------------------------------------------------------------------------


// const ad = 'Ruslan Zeynalov'
// // string metodlar
// let netice = ad.replaceAll('l', '[Ali]')
// console.log(netice);   //ALI

// ---------------------------------------------------------------------------------------------------------------------------------------


// const ad = 'Ruslan Zeynalov kjbhj bnb lllllllllll bhjbdhiljbdjbb dhu bhibhdibdh vhicb dhjh bjhvhjb '
// let countLength = ad.length - ad.replaceAll('l', '').length
// console.log(countLength);
// // string metodlar
// let netice = ad.replace('a', '')
// console.log(netice);

// ---------------------------------------------------------------------------------------------------------------------------------------

// const ad = 'Ruslan Zeynalov'
// // string metodlar
// let netice = ad.slice(0, 4)
// console.log(netice);   //Rusl

// ---------------------------------------------------------------------------------------------------------------------------------------

// const ad = 'Ruslan Zeynalov'
// // string metodlar
// let netice = ad.slice(2, 15)
// console.log(netice);   //slan Zeynalov

// ---------------------------------------------------------------------------------------------------------------------------------------

// const ad = 'Ruslan Zeynalov'
// // string metodlar
// let netice = ad.slice(8)
// console.log(netice);   //eynalov

// ---------------------------------------------------------------------------------------------------------------------------------------


// const ad = 'Ruslan Zeynalov'
// // string metodlar
// let netice = ad.substring(0, 9)
// console.log(netice);   //  Ruslan Ze

// ---------------------------------------------------------------------------------------------------------------------------------------



// const ad = 'Ruslan Zeynalov'
// // string metodlar
// let netice = ad.substring(8)
// console.log(netice);   // eynalov

// ---------------------------------------------------------------------------------------------------------------------------------------

// const ad = 'Ruslan Zeynalov Mehman'
// // string metodlar
// let netice = ad.split(',')
// console.log(netice);   

// ---------------------------------------------------------------------------------------------------------------------------------------



// const ad = 'Ruslan Zeynalov Mehman'
// // string metodlar
// let netice = ad.toLocaleUpperCase()
// console.log(netice);  // RUSLAN ZEYNALOV MEHMAN

// ---------------------------------------------------------------------------------------------------------------------------------------


// function toCapitalCase(ad) {
//     console.log(ad.replace(ad[0], ad[0].toUpperCase()));
// }

// toCapitalCase('Ali');
// toCapitalCase('sada');
// toCapitalCase('intiqam elizade');

// ---------------------------------------------------------------------------------------------------------------------------------------


// function toCapitalCase(ad) {
//     console.log(ad[0].toUpperCase() + ad.slice(1, ad.length));
// }

// toCapitalCase('Ali');
// toCapitalCase('sada');
// toCapitalCase('intiqam elizade');

// ---------------------------------------------------------------------------------------------------------------------------------------

// let ad = prompt('Adi daxil et')
// console.log(ad.length);

// ---------------------------------------------------------------------------------------------------------------------------------------


// let ad = prompt('Adi daxil et')
// console.log(ad.trim());

// ---------------------------------------------------------------------------------------------------------------------------------------

const date = new Date()
console.log(date);  //Fri Feb 02 2024 21:50:44 GMT+0400 (Азербайджан, стандартное время)
