// -----------------------------------------------------------------List-01---------------------------------------------------------------

// -----------------------------------------------------------------task-01---------------------------------------------------------------
// let name = prompt('user, admin, guest yazin bulardan basqa soz yazmayin!')
// if (name === 'user') {
//     console.log('xos geldin istifadeci')
// } else if (name === 'admin') {
//     console.log('xos geldin admin')
// } else if (name === 'guest') {
//     console.log('xos geldin qonaq')
// } else {
//     console.log('YALNIS!!!')
// }
// _______________________________________________________________________________________________________________________________________



// -----------------------------------------------------------------task-02---------------------------------------------------------------
// let FizzBuzz = prompt(" 5- e ve 7-e bolunen yazin")
// if (FizzBuzz % 5 === 0 && FizzBuzz % 7 === 0) {
//     console.log('FizzBuzz')
// } else if (FizzBuzz % 5 === 0) {
//     console.log("Fizz")
// } else if (FizzBuzz % 7 === 0) {
//     console.log('Buzz')
// } else {
//     console.log('YALNIS!!! 5- e ve 7-e bolunen yazin')
// }


// -----------------------------------------------------------------task-02---------------------------------------------------------------
// let FizzBuzz = prompt('5-e ve 7-e bolunen yazin')
// let info = ''
// if (FizzBuzz % 5 === 0) {
//     info = "Fizz"
// }
// if (FizzBuzz % 7 === 0) {
//     info = info + 'Buzz'
// }
// console.log(info)
// _______________________________________________________________________________________________________________________________________



// -----------------------------------------------------------------task-03---------------------------------------------------------------


// let num = prompt('2 reqemli eded yazin')
// if (num < 100 && num > 9) {
//     console.log("eded ikireqemlidir")
// } else {
//     console.log('Yalnis!!! 2 reqemli eded yazin')
// }
// _______________________________________________________________________________________________________________________________________




// -----------------------------------------------------------------task-04---------------------------------------------------------------
// let num = prompt("2-e ve 5-e bolunen yazin")
// if (num % 2 === 0 && num % 5 === 0) {
//     console.log("bu istediyim ededdir")
// } else {
//     console.log('YALNIS!!! 2-e ve 5-e bolunen yazin')
// }
// _______________________________________________________________________________________________________________________________________




// -----------------------------------------------------------------task-05---------------------------------------------------------------

// let num1 = parseFloat(prompt("Birinci ededi daxil edin"))
// let num2 = parseFloat(prompt('Ikinci ededi daxil edin'))
// let num3 = parseFloat(prompt('Ucuncu ededi daxil edin'))
// let sum = num1 + num2 + num3
// if (sum > 100) {
//     console.log("cemleri kecdi 100-u")
// } else {
//     console.log("Yalnis deyer")
// }
// _______________________________________________________________________________________________________________________________________



// -----------------------------------------------------------------List-02---------------------------------------------------------------
// -----------------------------------------------------------------task-01---------------------------------------------------------------

// let heartNumber = Math.floor(Math.random() * 50 + 1)
// let count = 1
// let usedAnswer = +prompt('hansi edetdir?')
// while (usedAnswer !== heartNumber) {
//     count++
//     if (usedAnswer > heartNumber) {
//         usedAnswer = +prompt('asagi')
//     } else {
//         usedAnswer = +prompt('Yuxari')
//     }
// }
// console.log('Cavab: ' + usedAnswer + ' ' + count + ' defeye tapdin' + '| kapital bank hesabinda 1000 manat kocurulsun ')

// if (count < 2) {
//     console.log('1000 manat')
// } else if (count < 6) {
//     console.log('750 manat')
// } else if (count < 10) {
//     console.log('250 manat')
// } else if (count > 10) {
//     console.log(' -250 manat (ozu bize pul versin)')
// }

// _______________________________________________________________________________________________________________________________________

// -----------------------------------------------------------------task-02---------------------------------------------------------------

// let i = 1
// while (i <= 100) {
//     console.log(i)
//     i++
// }
// _______________________________________________________________________________________________________________________________________



// -----------------------------------------------------------------task-02---------------------------------------------------------------

// for (let i = 1; i <= 100; i++) {
//     console.log(i)
// }
// _______________________________________________________________________________________________________________________________________


// -----------------------------------------------------------------task-03---------------------------------------------------------------
// for (let j = 0; j <=5; j++){
//     for (let i = 0; i <=j; i++){
//         document.write('*')
//     }
//     document.write('<br/>')
// }
// _______________________________________________________________________________________________________________________________________

// -----------------------------------------------------------------task-04---------------------------------------------------------------
// let hasil = parseInt(prompt("Bir ədəd daxil edin:"));
// let faktorial = 1;
// for (let i = 1; i <= hasil; i++) {
//     faktorial *= i;
// }
// console.log("1-dən " + hasil + "-ə qədər olan ədədlərin faktorialı: " + faktorial);
// _______________________________________________________________________________________________________________________________________


// ------------------------------------------------------------------JavaScript_из_книги--------------------------------------------------
// --------------------------------------------------------------Выведите_четные_числа_стр.135--------------------------------------------

// for (let i = 2; i <= 10; i++) alert(i)

// --------------------------------------------------------------Замените_for_на_while_стр.135--------------------------------------------
// let i = 2
// while (i <= 10) {
//     alert(i)
//     i++
// }


// ---------------------------------------------------------Повторять_цикл_пока_ввод_неверен_стр.136--------------------------------------

// let number = prompt('Введите число больше 100');
// while (number <= 100) {
//     console.log('Неправильное число! Введите число больше 100')
//     number = prompt('Введите число больше 100')
// }
// console.log('Правильное число ' + number)

// ---------------------------------------------------------Выводите_простые_чмсла_стр.136--------------------------------------


// let usernumber = +prompt('Напишите любую цифру или чило')
// let isPrimeNumber

// // debugger;
// for (let i = 2; i <= usernumber; i++) {
//     let isPrime = true;

//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isPrime = false
//             break;
//         }
//     }

//     if(isPrime) {
//         console.log(`Простые числа: ${i}`);
//     }
// }


