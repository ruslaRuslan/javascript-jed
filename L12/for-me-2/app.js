// let arr = [1, -1, 2, 5, 7, -4, 8, -8, -7, -4]
// // forEach, if

// function showNegatives(massiv) {
//     massiv.forEach((element) => {
//         if (element < 0) {
//             console.log(element);
//         }
//     });
// }
// showNegatives(arr)
// _______________________________________________________________________________________________________________________________________

let arr = [1, -1, 2, 5, 7, -4, 8, -8, -7, -4]
// forEach, if

function showNegatives(massiv) {
    let array = []
    massiv.forEach((element) => {
        if (element < 0) {
            array.push(element)
        }
    });
    return array;
}
console.log(showNegatives(arr));

// _______________________________________________________________________________________________________________________________________






