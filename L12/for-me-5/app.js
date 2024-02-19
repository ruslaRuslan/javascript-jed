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

const ilkHerifDeyis = (string, symbol) => symbol.concat(string.slice(1, string.length))
console.log(ilkHerifDeyis('aLIONALI', 'A'));

// _______________________________________________________________________________________________________________________________________


// 2-ci versiya
const ilkHerifDeyisV1 = (string, symbol) => string.replace(string[0], symbol);
console.log(ilkHerifDeyisV1('aLIONALI', 'A'));

// ---------------------------------------------------------------------------------------------------------------------------------------
