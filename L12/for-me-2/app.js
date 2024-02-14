let arr = [1, -1, 2, 5, 7, -4, 8, -8, -7, -4]
// forEach, if

function showNegatives(massiv) {
    massiv.forEach(element => {
        if (element < 0) {
            console.log(element);
        }
    });
}
showNegatives(arr)
// ---------------------------------------------------------------------------------------------------------------------------------------








