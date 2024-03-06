
// 1. Rəqəmlər massivini parametr kimi qəbul edən və həmin massivdən konsola bütün mənfi ədədləri çıxaran funksiya yazın.



const MassivQebulEden = (...massiv) => {
    let result = []
    massiv.forEach((element) => {
        if (element < 0) {
            result.push(element)
        }
    })
    return result
}
console.log(MassivQebulEden(-5, 25, -2, -85, 32, 20, 14, 123, -1, -57, 57, 85, 89, -97)); 

// -----------------------------------------------------------------------------------
