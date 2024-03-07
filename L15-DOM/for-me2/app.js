
// 1. Rəqəmlər massivini parametr kimi qəbul edən və həmin massivdən konsola bütün mənfi ədədləri çıxaran funksiya yazın.



// const MassivQebulEden = (...massiv) => {
//     let result = []
//     massiv.forEach((element) => {
//         if (element < 0) {
//             result.push(element)
//         }
//     })
//     return result
// }
// console.log(MassivQebulEden(-5, 25, -2, -85, 32, 20, 14, 123, -1, -57, 57, 85, 89, -97));

// -----------------------------------------------------------------------------------

// 2. Adlar massivini parametr kimi qebul eden bir funksiya yazin, bele ki, o funksiyadan bize en uzun adi cixaracaq.
// mes: // let arr = ['ali', 'reza', 'alireza', 'muhammad', 'coshqun', 'eles']
// findLongestName(arr); // 'muhammad'

// let words = ['ali', 'reza', 'alireza', 'muhammad', 'coshqun', 'eles']
// findLongestName = (arr) => {
//     return arr.reduce((result, massiv) => {
//         return result.length > massiv.length ? result : massiv
//     })
// }
// console.log(findLongestName(words));


// -----------------------------------------------------------------------------------

// 3. const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"]; massivi verilib. printWithIndex adli funksiya yaradin ve onu names.forEach methoduna callback kimi verin. Ekrana adin index-i ve adi cixarsin. (0-Michael, 1-Trevor ve.s.)
//  names.forEach(printWithIndex);

// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];
// const printWithIndex = (names) => {
//     let result = ' '
//     names.forEach((name, index) => {
//          result += ' ' + name + '-' + index + ','
//     })
//     return result
// }
// console.log(printWithIndex(names));
// ___________________________________________________________________________________

// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];
// const printWithIndex = (names) => {
//     names.forEach((name, index) => {
//         console.log(name +'-' + index);
//     })
// }
// (printWithIndex(names));

// -----------------------------------------------------------------------------------

// 4.Asagidaki funksiyalari yazin:
// kebabToSnake('ali-greenheart');//ALI_GREENHEART
// SnakeToKebab('JAVASCRIPT_IS_HELL'); // javascript-is-hell


// const kebabToSnake = (string) => {
//     return string.replace('-', '_').toUpperCase()

// }
// console.log(kebabToSnake('ali-greenheart'));


// const SnakeToKebab = (string) => {
//     return string.replace('_', '-').toLowerCase()

// }
// console.log(SnakeToKebab('JAVASCRIPT_IS_HELL'));

// -----------------------------------------------------------------------------------

// 5. let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
// Rəqəmlər massivi verilmişdir. Aşağıdakı kimi dəyişdirilən orijinal massivin elementlərindən ibarət yeni massiv yaradın:
// - mənfi ədədlər müsbət olublar;
// - müsbət ədədlər ikiqat artırılıb.

// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];

// const mənfiMüsbət = (numbers) => {
//     let result = [];

//     numbers.forEach((element, index) => {
//         if (element > 0) {
//             result.push(element * 2) 
//         } else if (element < 0) {
//              result.push(Math.abs(element));
//         }

//     })
//     return result

// }
// console.log(mənfiMüsbət(numbers));
// --------------------------------------------------------------------------------

// 6. A hərfi ilə başlayan orijinal massivdəki elementlərdən ibarət yeni massiv yaradın.
// let names = ['Sam', 'Alan', 'Bill', 'Adam', 'Anna', 'George'];

// let names = ['Sam', 'Alan', 'Bill', 'Adam', 'Anna', 'George'];
// let aHerfBaslangic = names.filter((element) =>  element.charAt(0) === 'A' )
// console.log(aHerfBaslangic);

// --------------------------------------------------------------------------------

// 7. Ədədlər massivindəki tək və cüt ədədləri saymaq üçün proqram yazın.
// let numbers=[1,4,7,8,3,5,0,2,4,6,12,15,18,46,45,48,97,84]
// meselen, countEvensAndOdds(numbers); // evens: 12, odds: 13

// let numbers = [1, 4, 7, 8, 3, 5, 0, 2, 4, 6, 12, 15, 18, 46, 45, 48, 97, 84]
// const countEvensAndOdds = (numbers) => {
//     let evenCount = 0
//     let oddCount = 0
//     numbers.forEach((element) => {
//         if (element % 2 === 0) {
//             evenCount++
//         } else {
//             oddCount++
//         }
//     })
//     return `evens: ${evenCount}  odds: ${oddCount}`
// }
// console.log(countEvensAndOdds(numbers));

// --------------------------------------------------------------------------------
// 8. Mətn tip dəyişənlərdən ibarət massivi doğum ilinə görə siralamaq üçün funksiya yazın.sortByBirth
// let guys = ['Ada Lovelace, 1915', 'Nicola Tesla, 1856', 'Alan Turing, 2012']
// sortByBirth(guys);// [ 'Nicola Tesla, 1856', 'Ada Lovelace, 1915', 'Alan Turing, 2012']

// let guys = ['Ada Lovelace, 1915', 'Nicola Tesla, 1856', 'Alan Turing, 2012']
// const sortByBirth = (guys) => {
//     return guys.sort((a, b) => {
//         let yearA = parseInt(a.split(', ')[1])
//         let yearB = parseInt(b.split(', ')[1])
//         return yearA - yearB
//     })
// }
// console.log(sortByBirth(guys));


