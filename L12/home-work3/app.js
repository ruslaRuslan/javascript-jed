// ## Task 1

// ### 10 rəqəmdən ibarət massiv yaradın.Massiv deyil, arqumentlər qəbul edən Math.max() funksiyasından istifadə edərək onların arasında maksimumu tapın.Spread - operatorundan istifadə edərək massiv arqumentlərini funksiyaya ötürün.


// let massiv = [20, 53, 63, 42, 69, 77, 88, 92, 44, 15]
// const massivArqument = (...user) => {
//     result = Math.max(...user)
//     console.log(result);
//     return result
// }
// massivArqument(...massiv)



// ---------------------------------------------------------------------------------------------------------------------------------------

// ## Task 2

// ### Proqramlaşma şöbəsinin işçilərini saxlayan massiv yaradın.

// ** Şirkətin 10 işçisi haqqında məlumat olan massiv verilib.development massivi yaradın, hansıki proqramlaşma şöbəsinin işçilərini, və s.texniki işçiləri özündə saxlayacaq, yəni department özəlliyinin dəyəri «development» olan işçiləri.**


//     ```javascript


// let employees = [
//     ["Jaylee Macy", "marketing"],
//     ["John Smith", "management"],
//     ["Blossom Hartley", "design"],
//     ["Austin Carpenter", "marketing"],
//     ["Joan Knowles", "development"],
//     ["Sally Nunez", "management"],
//     ["Laurel Ward", "development"],
//     ["Lark Simon", "marketing"],
//     ["Jane Stone", "management"],
//     ["Courtney Olson", "development"],
// ];

// ```

// const developmentOlanIşçiləri = (employees) => {
//     return employees.filter((element) => {
//         return element[1] === 'development'
//     })
// }
// console.log(developmentOlanIşçiləri(employees));






// ---------------------------------------------------------------------------------------------------------------------------------------


// ## Task 3

// ### Tam ədədlər massivini qəbul edən, onu artan ardıcıllıqla sıralayan və sıralanmış massivi geri qaytaran sortArray() funksiyasını yazın.

// ```javascript
// let array = [
//     1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22,
// ];
// // ```

// const massiviGeriQaytaran = (array) => {
//     result = array.sort((a, b) => a - b)
//     return result
// }
// console.log(massiviGeriQaytaran(array));


// ---------------------------------------------------------------------------------------------------------------------------------------


// ## Task 4

// ### Rəqəmlər massivini parametr kimi qəbul edən və əgər həmin massivdə mənfi ədədlər varsa onları massiv şəklində geri qaytaran, yoxdursa uyğun mesajı geri funksiya yazın.



// const uyğunMesaj = (...array) => {
//     let neqativeNumber = array.filter(num => num < 0);
//     if (neqativeNumber.length > 0) {
//         return neqativeNumber;
//     } else {
//         return 'Massivdə mənfi ədəd yoxdur.'
//     }


// }

// console.log(uyğunMesaj(-9, -5, -32, 25, 96, 5, 12, 21, 21, -6, - 9, -5, -32, 25, 96, 5,));
// console.log(uyğunMesaj(25, 96, 5, 12, 21, 21, 6, 9, 5, 32, 25, 96, 5,));

// ---------------------------------------------------------------------------------------------------------------------------------------


// ## Task 5

// ### Callback(geri çağırış) funksiyalarını yazın: printWithDashes, printWithHearts, printWithIndex.

// ** Massiv verilmişdir. 3 callback(geri çağırış) funksiyası yazın: printWithDashes, printWithHearts, printWithIndex və aşağıdakı qaydada həmin funksiyalar çağırılmalıdır:**

// ### Nümunə

//     ```
// 1. names.forEach(printWithDashes);
// 2. names.forEach(printWithHearts);
// 3. names.forEach(printWithIndex);
// ```

// ### Massiv

//     ```javascript
// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];
// ```

// ### Nəticə

//     ```
// 1-ci üçün

// -------------
// Michael
// -------------
// -------------
// Trevor
// -------------
// -------------
// Franklin
// -------------
// -------------
// Lamar
// -------------
// -------------
// Jimmy
// -------------
// ```

//     ```
// 2-ci üçün

// <3<3<3<3 Michael <3<3<3<3
// <3<3<3<3 Trevor <3<3<3<3
// <3<3<3<3 Franklin <3<3<3<3
// <3<3<3<3 Lamar <3<3<3<3
// <3<3<3<3 Jimmy <3<3<3<3
// ```

//     ```
// 3-cü üçün

// 0 - Michael
// 1 - Trevor
// 2 - Franklin
// 3 - Lamar
// 4 - Jimmy
// ```

// const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

// const printWithDashes = (name) => {
//     console.log(name);
//     console.log('------------------');
// }
// printWithDashes(name)
// names.forEach(printWithDashes)

// // ________________

// const printWithHearts = (name) => {
//     console.log(`<3<3<3<3 ${name} <3<3<3<3`);
// }

// names.forEach(printWithHearts)

// // ________________

// const printWithIndex = (name, index) => {
//     console.log(index + ' - ' + name);
// }

// names.forEach(printWithIndex)




// ---------------------------------------------------------------------------------------------------------------------------------------


// ## Task 6

// ### Kebab -case formatında mətni parametr kimi qəbul edən və onu UPPER_CASE mətninə çevirən kebabToUpper() funksiyasını yazın.

// ```javascript
// INPUT: console.log(kebabToUpper("first-user"));

// OUTPUT: FIRST_USER;
// ```



// ---------------------------------------------------------------------------------------------------------------------------------------


// ## Task 7

// ### Orijinal massivin elementlərindən ibarət yeni massiv yaradın.

// ** Rəqəmlər massivi verilmişdir.Aşağıdakı qaydalarla dəyişdirilən orijinal massivin elementlərindən ibarət yeni massiv yaradın:**

//     - mənfi ədədlər müsbət olublar;
// - müsbət ədədlər ikiqat artırılıb.

// ```
// Input:  [1, 5, -7, 3, -9, 4, -6, 2];

// Output: [2, 10, 7, 6, 9, 8, 6, 4]

// ```


// const modifyNumbers = (...array) => {
//     return array.map((number) => number < 0 ? Math.abs(number) : number * 2)
// }
// console.log(modifyNumbers(1, 5, -7, 3, -9, 4, -6, 2));




// ---------------------------------------------------------------------------------------------------------------------------------------


// ## Task 8

// ### Adlar massivi verilib.Bir funksiya yazın, hansı ki parametr olaraq massiv qəbul edir.Həmin massivdə "A" hərfi ilə başlayan elementlərdən ibarət yeni massiv yaradıb, elə bir dəyər tapılmasa uyğun mesajı geri qaytarmalıdır.

// ```javascript

// let namesArray = [
//     "Alice",
//     "Bob",
//     "Catherine",
//     "David",
//     "Eva",
//     "Andrew",
//     "Frank",
//     "Anna",
//     "George",
//     "Alex",
// ];
// ```

// let result = namesArray.filter((name) => {
//     return name.startsWith('A')
// })
// console.log(result);

// ---------------------------------------------------------------------------------------------------------------------------------------

// ## Task 9

// ### ƏDV xaric qiymətlər saxlayan massivini qəbul edən və ƏDV daxil olmaqla olan qiymətlərdən ibarət yeni massiv qaytaran funksiya yazın.

// ** addTax() funksiyası yaradın.Verilmiş ƏDV - siz qiymətlərlə olan price massivini ona ötürün.addTax() funksiyasının köməyi ilə ƏDV ilə qiymətlərin daxil olduğu massiv yaratın və funksiya həmin massivi geri qaytarsın.ƏDV 20 % təşkil edir.**

//     ```javascript
// Input: const pricesArray = [12.99, 24.95, 9.99, 34.50, 19.99, 42.75, 8.49, 15.00, 28.75, 10.99];

// Output:
// ```
// const pricesArray = [12.99, 24.95, 9.99, 34.50, 19.99, 42.75, 8.49, 15.00, 28.75, 10.99];

// const addTax = (pricesArray) => pricesArray.map((price) => parseFloat((price + (price * 20 / 100)).toFixed(2)))
// console.log(addTax(pricesArray));

// ---------------------------------------------------------------------------------------------------------------------------------------


// ## Task 10

// ### Şöbə işçilərinin əmək haqqını təhlil etmək üçün proqram tərtib edin.

// ** Şöbədə müxtəlif maaşlarla 10 nəfər çalışır.Şöbə işçilərinin əmək haqlarını təhlil etmək üçün proqram tərtib edin.**
// -----------------------------
//     - Bütün bir departamentin bir il üçün ümumi maaşlarının cəmini qaytaran bir funksiya yazın. < br >
//   ** salary massivi əsasında il ərzində bütün işçilərin maaşlarının cəmini qaytaran getAnnualSalary() funksiyasını yazın.**
// -----------------------------
//     - Ay nömrəsinə görə işçilərin aylıq maaşlarını massiv halında almaq üçün funksiya yazın.< br >
//   ** Ayın nömrəsini parametr kimi qəbul edən və salary massivindən həmin ay üçün işçi maaşlarını massiv halında qaytaran getMonthlySalary() funksiyasını yazın.**

// ------------------------------------------------------------------------------------------------------------------------------------------

//     - Rüb ərzində maaşların ümumi cəmini qaytaran funksiya yazın.< br >
//   ** Parametr kimi rübün rəqəmini(1, 2, 3 və ya 4) qəbul edən və salary massivi əsasında həmin rüb üçün şöbənin bütün işçilərinin maaşlarının cəmini qaytaran getQuarterSalary() funksiyasını yazın.Rüb - 3 aylıq bir müddətdir.**

// ------------------------------------------------------------------------------------------------------------------------------------------


// #### Qeyd 1: Ayın nömrəsi elementin indeks nömrəsi ilə eyni deyil.

// #### Qeyd 2: salary massiviniz içərisində olan hər bir massivdə(10 ədəd) bir işçinin illik maaşının saxlanılmışdır.

// ```javascript
// let salary = [
//   [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//   [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//   [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//   [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//   [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//   [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75],
// ];
// ```


let salary = [
    [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
    [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
    [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
    [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75],
];

function getAnnualSalary(salary) {
    result = 0
    salary.forEach((month) => {
        month.forEach((useMounth) => {
            result += useMounth
        })
    });
    return result
}

console.log(getAnnualSalary(salary)) // 97772

const getMonthlySalary = (salary) => {
    let result = [];
    salary.forEach((everyWorked) => {
        let sum = 0
        everyWorked.forEach((amount) => {
            sum += amount
        })
        result.push(sum)
    })
    return result
}
console.log(getMonthlySalary(salary))


const getQuarterSalary = (quarter, salaryData) => {
    let startMonth = (quarter - 1) * 3;
    let endMonth = startMonth + 3;
    let totalSalary = 0;

    for (let i = startMonth; i < endMonth; i++) {
        salaryData[i].forEach(amount => totalSalary += amount)
    }
    return totalSalary
}

let quarter = 3;
let totalSalary = getQuarterSalary(quarter, salary)
console.log(`Seçdiyiniz rüb üçün maaşların cəmi: ${totalSalary}`);



