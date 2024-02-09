// #task object

// const calculator = {
//     read: function () {
//         const num1 = +prompt('eded1-i daxil edin:')
//         const num2 = +prompt('eded2-i daxil edin:')
//         calculator.num1 = num1
//         calculator.num2 = num2

//     },
//     sum: function () {
//         calculator['read']()
//         console.log(calculator['num1'] + calculator['num2']);
//     },
//     multyply: function () {

//     },
//     divide: function () {

//     },
//     subtract: function () {

//     },

// }
// calculator.sum()



// Calculyator obyekti yaradin. 5 metodu olsun: read(), sum(),multiply(),divide(),subtract()


// read() -> prompt - la 2 eded alsin, ve onlari calculator - da property kimi yada saxlasin,


// qalanlari da neticeni console - a cixartsin.


// istifade edeceyiniz seylerden biri de [] dynamic property - dir, ya da this.

// ---------------------------------------------------------------------------------------------------------------------------------------

// let fe10 = new Array(['AMIL', 'intiqam', 'ferid', 'ali'])
// console.dir(fe10[0]);
// literal qayda

// ---------------------------------------------------------------------------------------------------------------------------------------



// let fe10 = ['AMIL', 'intiqam', 'ferid', 'ali', true, false, 12, 0, NaN, function (ad) {
//     console.log(ad);
// }]
// fe10[fe10.length - 1]('ali')
// dynamic 

// ---------------------------------------------------------------------------------------------------------------------------------------


// let fe10 = ['AMIL', 'intiqam', 'ferid', 'ali']
// fe10[0] = 'amil';
// console.log(fe10);
// massiv mutable!

// dynamic 

// ---------------------------------------------------------------------------------------------------------------------------------------

// let fe10 = ['AMIL', 'intiqam', 'ferid', 'ali']

// for (let key of fe10) {
//     console.log(key);
// }
// for(1. interval 2. in (index array) 3.of (valuerlari))
// of ancax itarable ile isleyir (sstring, array)
// __________________________________________

// let fe11 = ['AMIL', 'intiqam', 'ferid', 'ali']

// for (let key in fe11) {
//     console.log(fe11[key]);
// }

// for(1. interval 2. in (index array) 3.of (valuerlari))



// ---------------------------------------------------------------------------------------------------------------------------------------

// let sum = 0;
// let numbers = [23, 34, 45, 65, 32, 31, 87];
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }
// console.log(sum);
// __________________________________________

// let sum = 0;
// let numbers = [23, 34, 45, 65, 32, 31, 87];

// for (let number of numbers) {
//     sum += number
// }
// console.log(sum);

// ---------------------------------------------------------------------------------------------------------------------------------------

// massiv ( cox element )
// let arr =[]
// 1.novbe  Queue -> 🍖 sada ali intiqam RIFO -> First in First Out

// sondan elemnt elave etmek: push()
// evvelden cixarmaq: shift()
// arr.push('ali')
// arr.push('sada')
// arr.shift()  //ilk elementi cixart
// arr.shift()
// arr.unshift('intiqam')
// arr.unshift('ferid')
// arr.pop()

// console.log(arr);

// 2.yigin Stack -> last in first out


// sada
// ali
// intiqam

// ---------------------------------------------------------------------------------------------------------------------------------------


let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9],]

console.log(matrix[1][1])
