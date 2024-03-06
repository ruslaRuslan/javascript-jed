
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

// Adlar massivini parametr kimi qebul eden bir funksiya yazin, bele ki, o funksiyadan bize en uzun adi cixaracaq. 
// mes: // let arr = ['ali', 'reza', 'alireza', 'muhammad', 'coshqun', 'eles'] 
// findLongestName(arr); // 'muhammad'

let words = ['ali', 'reza', 'alireza', 'muhammad', 'coshqun', 'eles']
// findLongestName(arr); // 'muhammad'

findLongestName = (arr) => {
    return arr.reduce((result, massiv) => {
        return result.length > massiv.length ? result : massiv
    })
}
console.log(findLongestName(words));



// -----------------------------------------------------------------------------------
