// let arr = [1, -1, 2, 5, 7, -4, 8, -8, -7, -4]
// // forEach, if

// function showNegatives(massiv) {
//     massiv.forEach((element) => {
//         if (element < 0) {
//             console.log(element);
//         }
//     });
// }
// showNegatives(arr);

// ↓
//-1
//-4
//-8
//-7
//-4


// _______________________________________________________________________________________________________________________________________

// let arr = [1, -1, 2, 5, 7, -4, 8, -8, -7, -4]
// // forEach, if

// function showNegatives(massiv) {
//     let array = []
//     massiv.forEach((element) => {
//         if (element < 0) {
//             array.push(element)
//         }
//     });
//     return array;
// }
// console.log(showNegatives(arr)); // [-1, -4, -8, -7, -4]

// ---------------------------------------------------------------------------------------------------------------------------------------

// 2. Adlar massivini parametr kimi qebul eden bir funksiyada yazin, bele ki, o funksiyadan  bize en uzun adi cixaracax.
// mes: // let arr = ['ali', 'reza', 'aliriza', 'muhammad', 'cosqun', 'eles']
// findLongestName(arr); // 'muhammad'


// let arr = ['ali', 'reza', 'aliriza', 'muhammad', 'cosqun', 'eles']

// const findLongestName = (massiv) => {
//     massiv.sort((a, b) => b.length - a.length)
//     return massiv[0];
// }
// console.log(findLongestName(arr));  //muhammad


// _______________________________________________________________________________________________________________________________________

// let arr = ['ali', 'reza', 'aliriza', 'muhammad', 'cosqun', 'eles']

// const findLongestName = (massiv) => {

//     let result_Uzun_ad = ''
//     massiv.forEach((name) => {
//         if (name.length > result_Uzun_ad.length) {
//             result_Uzun_ad = name;
//         }
//     });

//     return result_Uzun_ad;
// }
// console.log(findLongestName(arr)) //muhammad

// ---------------------------------------------------------------------------------------------------------------------------------------

// 3. const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"]; massivi verilib. printWithIndex adli funksiya yaradin ve onu names.forEach methoduna callback kimi verin. Ekrana adin index-i ve adi cixarsin. (0-Michael, 1-Trevor ve.s...)

// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"]
// const printWithIndex = (name, index) =>{
//     console.log(`${index} - ${name}`);
// }
// names.forEach(printWithIndex);

// 0 - Michael
// 1 - Trevor
// 2 - Franklin
// 3 - Lamar
// 4 - Jimmy

// _______________________________________________________________________________________________________________________________________


// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"]
// const printWithIndex =   (name, index) => {
//     console.log(`${index} - ${name}`);
// }

// const printWithDashes =   (name) => {
//     console.log(` --- ${name} --- `);
// }

// names.forEach(printWithDashes)

// --- Michael --- 
// --- Trevor --- 
// --- Franklin --- 
// --- Lamar --- 
// --- Jimmy --- 

// ---------------------------------------------------------------------------------------------------------------------------------------

// 4. Asagidaki funksiyalari yazin:
// kebabToSnake('ali-greenheart'); //ALI_GREENHEART
// SnakeToKebab('JAVASCRIPT_IS_HELL') //javascript-is-hell

// const kebabToSnake = (string) => string.replaceAll('-', '_').toLocaleUpperCase()

// console.log(kebabToSnake('ali-greenheart')); //ALI_GREENHEART

// _______________________________________________________________________________________________________________________________________

// const SnakeToKebab = (string) => string.replaceAll('_', '-').toLowerCase()

// console.log(SnakeToKebab('JAVASCRIPT_IS_HELL')); //javascript-is-hell

// ---------------------------------------------------------------------------------------------------------------------------------------

// 5.let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
// Reqemler massivi verilmisdir. Asagidaki kimi deyerlendirilen orijinal massivin elementlerinden ibaret yeni massiv yaradin:
// - menfi ededler musbet oluplar;
// musbet ededler ikiqat artirilip.

// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
// const result = numbers.map((element) => {
//     if (element < 0) {
//         return element * (-1)
//     } else {
//         return element * 2
//     }
// })
// console.log(result) //[2, 10, 7, 6, 9, 8, 6, 4]

// _______________________________________________________________________________________________________________________________________

// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
// const result = numbers.map((eded) => eded < 0 ? eded * -1 : eded * 2)
// console.log(result); //[2, 10, 7, 6, 9, 8, 6, 4]

// _______________________________________________________________________________________________________________________________________



// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
// const result = numbers.map((eded) => eded < 0 ? Math.abs(eded) : eded * 2)
// console.log(result); //[2, 10, 7, 6, 9, 8, 6, 4]

// ---------------------------------------------------------------------------------------------------------------------------------------

// 6. A herfi ile baslayan orijinal massivdeki elemenlerden ibaret yeni massiv yaradin: let names = ['Sam','Alan', 'Bill', 'Adam', 'Anna', 'George'] // ['Alan', 'Adam', 'Anna']

// let names = ['Sam', 'Alan', 'Bill', 'Adam', 'Anna', 'George'];

// const result = names.filter((element) => {
//     return element[0] === 'A'
// })
// console.log(result); //['Alan', 'Adam', 'Anna']

// _______________________________________________________________________________________________________________________________________


// let names = ['Sam', 'Alan', 'Bill', 'Adam', 'Anna', 'George'];

// const result = names.filter((element) => element[0] === 'A'
// )
// console.log(result); //['Alan', 'Adam', 'Anna']


// ---------------------------------------------------------------------------------------------------------------------------------------

// 7. Ededler massivindeki tek ve cut ededleri saymaq ucun proqram yazin.let number = [1, 4, 7, 8, 3, 5, 0, 2, 4, 6, 12, 15, 18, 46, 45, 48, 97, 84]
// meselen, countEvensAndOdds(numbers); // evens: 11, odds: 7

// let numbers = [1, 4, 7, 8, 3, 5, 0, 2, 4, 6, 12, 15, 18, 46, 45, 48, 97, 84]

// const countEvensAndOdds = (massiv) => {

//     let tekEdedlerSayi = 0;
//     let cutEdedlersayi = 0;
//     massiv.forEach((number) => {
//         if (number % 2 === 0) {
//             cutEdedlersayi++
//         } else {
//             tekEdedlerSayi++
//         }
//     });
//     return `evens: ${cutEdedlersayi}, odds: ${tekEdedlerSayi}`
// }

// console.log(countEvensAndOdds(numbers)); // evens: 11, odds: 7

// ---------------------------------------------------------------------------------------------------------------------------------------

// 8. Adlar massivini parametr kimi qebul eden bir funksiyada yazin, bele ki, o funksiyadan  bize en uzun adi cixaracax.
// mes: // let arr = ['ali', 'reza', 'aliriza', 'muhammad', 'cosqun', 'eles']
// findLongestName(arr); // 'muhammad'


// let arr = ['ali', 'reza', 'aliriza', 'muhammad', 'cosqun', 'eles']

// let uzunAd = arr.reduce((a, b) => a.length > b.length ? a : b)

// console.log(uzunAd);

// _______________________________________________________________________________________________________________________________________


// let arr = ['ali', 'reza', 'aliriza', 'muhammad', 'cosqun', 'eles']

// let uzunAd = arr.reduce((a, b) => a.length < b.length ? b : a)

// console.log(uzunAd);

// _______________________________________________________________________________________________________________________________________

// sade numune gosdermek ucun
// let numbers = [1, 4, 7, 8, 3, 5, 0, 2, 4, 6, 12, 15, 18, 46, 45, 48, 97, 84]
// numbers.reduce((a, b) => {
//     console.log(a, b);
//     return a + b;
// }, 0)
