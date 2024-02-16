// 1. Fucksiya yazin ki, array ve eded verin, Hemin ededden basqa digerlerinden ibaret yeni array qaytarsin Mes, removeElement([1, 12, 14, 2, 3, 4])  //[1, 2, 3]

// const removeElement = (arr, eded) => {
//     const indexOfEded = arr.indexOf(eded)
//     arr.splice(indexOfEded, 1)
//     return arr

// }
// console.log(removeElement([1, 2, 3, 4], 3));

// ---------------------------------------------------------------------------------------------------------------------------------------


// 2. Funksiya yazin ki, ona massiv argument verim. O massivdeki cut ededlerden ibaret massivi geri qaytarsin.

const cutEdedlerSec = (...array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i]);
        }
    }
}
cutEdedlerSec(1, 2, 3, 4, 5, 6, 7,)


