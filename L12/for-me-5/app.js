// string, array (methodlari)

// repeatedSymbolCounter('AKIONAKI', 'A') // return 2 -> must be done with for loop!!!!

// 1-ci versiya
// function repeatedSymbolCounter(string, symbol) {
//     let result = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === symbol) {
//             result++
//         }
//     }
//     return result
// }
// console.log(repeatedSymbolCounter('ALIONALI', 'A'));

// _______________________________________________________________________________________________________________________________________

// 2-ci versiya
// function repeatedSymbolCounter2(string, symbol) {
//     let result = 0;
//     for (let dovr of string) {
//         if (dovr === symbol) {
//             result++
//         }
//     }
//     return result
// }
// console.log(repeatedSymbolCounter2('ALIONALI', 'A'));

// _______________________________________________________________________________________________________________________________________

// 3-ci versiya
// const repeatedSymbolCounter3 = (string, symbol) => string.length - string.replaceAll(symbol, '').length
// console.log(repeatedSymbolCounter3('ALIONALI', 'A'));


// ---------------------------------------------------------------------------------------------------------------------------------------

// task02
// 1-ci versiya

// const ilkHerifDeyis = (string, symbol) => symbol.concat(string.slice(1, string.length))
// console.log(ilkHerifDeyis('aLIONALI', 'A'));

// _______________________________________________________________________________________________________________________________________


// 2-ci versiya
// const ilkHerifDeyisV1 = (string, symbol) => string.replace(string[0], symbol);
// console.log(ilkHerifDeyisV1('aLIONALI', 'A'));

// ---------------------------------------------------------------------------------------------------------------------------------------

// task03
// verify gmail addres. (gmail addresleri sonu @gmail.com ile bitmelidir, ve ondan evvel en azi 5 simvol olmalidir. abcdfgnail.com meselen)

// 1-ci versiya
// const validateGmail = (gmail) => gmail.endsWith('@gmail.com') && gmail.length >= 15

// console.log(validateGmail('ali@gmail.com'))
// console.log(validateGmail('ruslan@gmail.com'));

// _______________________________________________________________________________________________________________________________________

// 2-ci versiya

// let parol = prompt(`parolu daxil et, zehmet olmasa, minumum 6 herfden ibaret olsun, ve parolun icerisinde en azi 1 boyuk, 1 kicik, herf, 1 reqem olmalidir.`)

// const validatePassword = (password) => {
//     if (parol.length < 6) {
//         return false
//     }
//     let containsNumber = false;
//     let containsLowerSymbol = false;
//     let containsUpperSymbol = false;
//     for (let i = 0; i < password.length; i++) {
//         const asciiCode = password.charCodeAt(i)
//         if (48 <= asciiCode && asciiCode <= 57) {
//             containsNumber = true;

//         }

//         if (65 <= asciiCode && asciiCode <= 90) {
//             containsUpperSymbol = true;

//         }
//         if (97 <= asciiCode && asciiCode <= 122) {
//             containsLowerSymbol = true;

//         }
//     }
//     return containsNumber && containsLowerSymbol && containsUpperSymbol

// }
// console.log(validatePassword(parol));

// _______________________________________________________________________________________________________________________________________

// 3-ci versiya
// let parol = prompt(`parolu daxil et, zehmet olmasa, minumum 6 herfden ibaret olsun, ve parolun icerisinde en azi 1 boyuk, 1 kicik, herf, 1 reqem olmalidir.`)

// const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/

// console.log(mediumRegex.test(parol));

// ---------------------------------------------------------------------------------------------------------------------------------------

// task-04

// 1-ci versiya

// const bugun = new Date().getDay()

// switch (bugun) {
//     case 0:
//         document.write('bazar');
//         break
//     case 1:
//         document.write('bazar ertesi');
//         break
//     case 2:
//         document.write('cersenbe axsami');
//         break
//     case 3:
//         document.write('cersenbe');
//         break
//     case 4:
//         document.write('cume ertesi');
//         break
//     case 5:
//         document.write('cume');
//         break
//     case 6:
//         document.write('senbe');
//         break
// }

// _______________________________________________________________________________________________________________________________________

// 2-ci versiya

// const bugun = new Date().getDay()
// const hefteninGunleri = ['bazar', 'bazar ertesi', 'cersenbe axsami', 'cersenbe', 'cume axsami', 'cume', 'senbe' ]
// document.write(hefteninGunleri[bugun])

// _______________________________________________________________________________________________________________________________________


// 3-ci versiya
const bugun = new Date().getDay()
const obj = {
    0: 'bazar',
    1: 'bazar ertesi',
    2: 'cersenbe axsami',
    3: 'cersenbe',
    4: 'cume axsami',
    5: 'cume',
    6: 'senbe',
}
document.write(obj[bugun])







