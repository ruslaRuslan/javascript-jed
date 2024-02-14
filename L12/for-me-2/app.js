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
// console.log(findLongestName(arr));


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
// console.log(findLongestName(arr))

// ---------------------------------------------------------------------------------------------------------------------------------------

// 3. const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"]; massivi verilib. printWithIndex adli funksiya yaradin ve onu names.forEach methoduna callback kimi verin. Ekrana adin index-i ve adi cixarsin. (0-Michael, 1-Trevor ve.s...)

const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"]
const printWithIndex = (name, index) =>{
    console.log(`${index} - ${name}`);
}
names.forEach(printWithIndex);

// _______________________________________________________________________________________________________________________________________


