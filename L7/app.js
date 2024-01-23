




// task-07  repeatChar('😃', 6) 😃😃😃😃😃😃

// let repeatChar = (char, count) => {
//     let result =''
//     for(let i = 0; i < count; i++){
//         result += char
//     }
//     return result
// }
// console.log(repeatChar('😃', 6))
// _______________________________________________________________________________________________________________________________________



// task-08 repeatCharV2('😃', 10) 10-u 2-ye bolende 5 edir 😃😃😃😃😃
// verdiyim ededin yarisi qeder smaylik olsun!

// let repeatChar = (num, divisor) => {
//     if (divisor === 0) {
//         return
//     }
//     return num / divisor
// }
// console.log(repeatChar(10, 2))
//________________________________________________________________________________________________________________________________________



// task-09 repeatCharV3('😃', 5 ) 5-den 1 vahid az birlesdir

// let repeatCharV3 = (char, count) => {
//     let result = ''
//     for (let i = 0; i < count - 1; i++) {
//         result = result + char
//     }
//     return result;
// }
// console.log(repeatCharV3('😃', 6))
// console.log(repeatCharV3('😃', 3))

//________________________________________________________________________________________________________________________________________


// task-10 repeatCharV4(5) "0122345" yazilannana qeder 23 olsa misal ucun 0-den 23-e qeder for ile

// let repeatCharV4 = (count) => {
//     let resault = ''
//     for (let i = 0; i <= count; i++){
//         resault+=i
//     }
//     return resault
// }

// console.log(repeatCharV4(5))

// _______________________________________________________________________________________________________________________________________


// task-11 repeatCharV5(13) 0,2,4,6,8,10,12 -> verilen ededdlere qeder cut ededi birlesdir /if else isdifade et/


// let repeatCharV5 = (count) => {
//     let result = ''
//     for (let i = 0; i <= count; i++) {
//         if (i % 2 === 0){
//             result = result + i
//         }
//     }
//     return result
// }
// console.log(repeatCharV5(16))
// _______________________________________________________________________________________________________________________________________


// task-12 repeatCharV6(15) 13579111315 -> verilen edede tek ededleri birlesdir

// let repeatCharV6 = (count) => {
//     let resault = ' '
//     for (let i = 0; i <= count; i++) {
//         if (i % 2 !== 0) {

//             resault += i
//         }
//     }
//     return resault
// }
// console.log(repeatCharV6(16))

// _______________________________________________________________________________________________________________________________________

// ---------------------------------------------------------------task-13-----------------------------------------------------------------

// task13

// let repeatCharV7 = (count) => {
//     let result = 0
//     for (let i = 0; i <= count; i++) {

//         if (i / 2 ) {
//             result = result + i
//         }

//     }
//     return result
// }
// console.log(repeatCharV7(20, 6));






// _______________________________________________________________________________________________________________________________________


// let repeatCharV4 = (count) => {
//     let resault = ''
//     for (let i = 0; i <= count; i++) {
//         resault += i
//     }
//     return resault
// }

// console.log(repeatCharV4(5))

// _______________________________________________________________________________________________________________________________________

// ---------------------------------------------------------------task-14-----------------------------------------------------------------

// task - 14
// const repeatCharV7 = (end, interval) => {
//     let result = ''
//     for (let i = 1; i <= end; i++) {
//         if (i % interval === 0) {
//             result = result + `${i}-`
//         }
//     }
//     return result;
// }
// console.log(repeatCharV7(20, 6));



// _______________________________________________________________________________________________________________________________________

// task03 qalmis ders

// const showClock = (hour, minute) => {
//     let result = ''   //flag variables
//     if (hour) {
//         result = `Saat ${hour} - dir`
//     }
//     if (minute) {
//         result = result + `, ${minute} deqiqedir.`
//     } else {
//         result = result + '.'
//     }
//     return result
// }
// ______________________________________________________________________________________________________________________________________




// ______________________________________________________________________________________________________________________________________

// task15: showClockAzeri(9, 5) 09:05 10-a isdiyip 5 deyqa
// showClockAzeri(8, 30) 08:30 9-un yarsi
// showClockAzeri(12) -> 12 tamam
// showClockAzeri(11, 56) -> 12 qalip 4 deqiqe



// let showClock = (hour = 0, minute = 0) => {
//     if (hour >= 0 && hour <= 24 && minute >= 0 && minute <= 59) {
//         if (minute === 0) {
//             return `${hour} tamam`
//         }
//         else if (minute < 30) {
//             return `${hour + 1}-e isleyib ${minute} deqiqe.`
//         }
//         else if (minute > 30) {
//             return `${hour + 1}-e qalib ${60 - minute} deqiqe.`
//         }
//         else if (minute === 30) {
//             return `${hour + 1}-in yarrisi`
//         }
//         else {
//             return `zaman yanlis formata verilib`
//         }
//     }

// }
// console.log(showClock(8, 30))
// console.log(showClock(8))
// console.log(showClock(15))
// console.log(showClock(15, 5))
// console.log(showClock(15, 30))
// console.log(showClock(15, 50))
// console.log(showClock(2))



// _______________________________________________________________________________________________________________________________________
// //Task16: sum(1,100) ->  1-den 100-e qeder ededlerin cemini tap;
// sum(4, 9) -> 4-den 9-a qeder ededlerin cemini tap; -> 39


// const showAnswer = (a, b) => {
//     let result = 0
//     for (let i = a; i <= b; i++) {
//         result += i

//     }
//     return result
// }
// console.log(showAnswer(1, 100));




// _______________________________________________________________________________________________________________________________________

// let showClock = (day) => {
//     result = day * 24
//     console.log(result)
// }
// showClock(2)

// _______________________________________________________________________________________________________________________________________

// ---------------------------------------------------------------task-17-----------------------------------------------------------------

// numberMiddle = (a, b) => {
//     let result = 0;
//     let count = 0;

//     for (let i = a; i <= b; i++) {
//         result += i
//         count++
//     }
//     return result / count
// }
// console.log(numberMiddle(2, 8))

// _______________________________________________________________________________________________________________________________________



// ---------------------------------------------------------------task-18-----------------------------------------------------------------

// const repeatCharV8 = (start, interval, end) => {

//     let result = ''
//     for (let i = start; i <= end; i = i + interval) {
//         result = result + `${i}-`
//     }
//     return result

// }

// console.log(repeatCharV8(1, 5, 18));


// const repeatCharV9 = (start, interval, end) => {
//     result = ''
//     for (let i = start; i <= end; i = i + interval) {
//         result = result + `${i}-`
//     }
//     return result
// }
// console.log(repeatCharV9(2, 8, 30));




// const repeatCharV7 = (end, interval) => {
//     let result = ''
//     for (let i = 1; i <= end; i++) {
//         if (i % interval === 0) {
//             result = result + `${i}-`
//         }
//     }
//     return result;
// }
// console.log(repeatCharV7(20, 6));
// _______________________________________________________________________________________________________________________________________




// ---------------------------------------------------------------task-19-----------------------------------------------------------------

// sumV2 = (start, end, number) => {
//     let result = 0;
//     for (let i = start; i <= end; i++) {
//         if (i % number === 0) {
//             result += i;
//         }
//     }
//     console.log(result);
// }
// sumV2(1, 60, 13);
// sumV2(5, 13, 5);
// _______________________________________________________________________________________________________________________________________



// ---------------------------------------------------------------task-20-----------------------------------------------------------------

// sumV3 = (start, end, number) => {
//     let result = 0
//     for (let i = start; i <= end; i++) {
//         if (i % number === 0) {
//             result += i
//         }
//     }
//     console.log(result)
// }
// sumV3(1, 100, 12)

// _______________________________________________________________________________________________________________________________________




// ---------------------------------------------------------------task-21-----------------------------------------------------------------

// sumV4 = (number) => {
//     let result = 0
//     for (let i = 0; i <= number; i++){
//         if(number % i === 0){
//             result +=i
//         }
//     }
//     console.log(result)
// }
// sumV4(50)
// _______________________________________________________________________________________________________________________________________




// ---------------------------------------------------------------task-22-----------------------------------------------------------------
// sumV5 = (number) => {
//     let numString = number.toString();
//     let result = 0;
//     for (let i = 0; i < numString.length; i++) {
//         result += parseInt(numString[i]);
//     }
//     console.log(result)
// }

// sumV5(2018)
// sumV5(6785)
// _______________________________________________________________________________________________________________________________________


// ---------------------------------------------------------------task-23-----------------------------------------------------------------

// sumV6 = (number) => {
//     result = ''
//     for (let i = 1000; i <= 9999; i++)
//         if (i % number === 0) {
//             result += i +", "
//         }
//         console.log(result )
// }
// sumV6(135)

// _______________________________________________________________________________________________________________________________________


// ---------------------------------------------------------------task-24-----------------------------------------------------------------

// sumV6 = (number) => {
//     let result = 0;

//     for (let i = 1; i <= 9; i++) {
//         result += parseInt(`${i}`.repeat(number))
//     }
//     console.log(result)
// }
// sumV6(2)
// sumV6(3)
// sumV6(4)
// sumV6(6)
// _______________________________________________________________________________________________________________________________________



// ---------------------------------------------------------------task-25-----------------------------------------------------------------

// translateSong = (word) => {
//     if (word === "en") {
//         console.log('Shine bright like a diamond!')
//     }
//     else if (word === "az") {
//         console.log("Briliant kimi parla!")
//     }
//     else if (word === "ru") {
//         console.log("Сияй ярко, как бриллиант!")
//     }
//     else{
//         console.log("YALNISH!!!!!")
//     }

// }
// translateSong('ru')
// translateSong('en')
// translateSong('az')

// _______________________________________________________________________________________________________________________________________



// ---------------------------------------------------------------task-26-----------------------------------------------------------------

// showLang = (html_css_js_ts) => {
//     switch (html_css_js_ts) {
//         case 'html':
//             console.log('HyperText markup Language');
//             break;
//         case 'css':
//             console.log('cascading stylesheets');
//             break;
//         case 'js':
//             console.log('javascript');
//             break;
//         case 'ts':
//             console.log('typescript');
//             break;
//         default: {
//             console.log('Yalnis!!! ')
//         }
//     }
// }

// showLang('html')
// showLang('css')
// showLang('js')
// showLang('ts')

// _______________________________________________________________________________________________________________________________________



// ---------------------------------------------------------------task-27-----------------------------------------------------------------
// const numInAzeri = (ed) => {
//     switch (ed) {
//         case 1:
//             return 'bir'
//         case 2:
//             return 'iki'
//         case 3:
//             return 'uc'
//         case 4:
//             return 'dord'
//         case 5:
//             return 'besh'
//         case 6:
//             return 'alti'
//         case 7:
//             return 'yetdi'
//         case 8:
//             return 'sekkiz'
//         case 9:
//             return 'dokquz'
//     }
// }
// sayNumberAzeri = (number) => {
//     const birinciEded = parseInt(number / 10) // ilk reqemi bize verecek
//     const sonuncuEded = number % 10 // axirinci reqemi bize verecek
//     const result = numInAzeri(birinciEded) + ' ' + numInAzeri(sonuncuEded)
//     console.log(result)
// }
// sayNumberAzeri(92);

// _______________________________________________________________________________________________________________________________________



// ---------------------------------------------------------------task-28-----------------------------------------------------------------

// const numInAzeriOnluq = (ed) => {
//     switch (ed) {
//         case 1:
//             return 'on'
//         case 2:
//             return 'iyirmi'
//         case 3:
//             return 'otuz'
//         case 4:
//             return 'qirx'
//         case 5:
//             return 'elli'
//         case 6:
//             return 'altmish'
//         case 7:
//             return 'yetmish'
//         case 8:
//             return 'seksen'
//         case 9:
//             return 'doxsan'
//         default:
//             return ''
//     }
// }
// const numInAzeriTeklik = (ed) => {
//     switch (ed) {
//         case 1:
//             return 'bir'
//         case 2:
//             return 'iki'
//         case 3:
//             return 'uc'
//         case 4:
//             return 'dord'
//         case 5:
//             return 'bes'
//         case 6:
//             return 'alti'
//         case 7:
//             return 'yeddi'
//         case 8:
//             return 'sekkiz'
//         case 9:
//             return 'dokquz';
//         default:
//             return ''

//     }
// }
// sayNumberAzeri = (number) => {
//     const birinciEded = parseInt(number / 10) // ilk reqemi bize verecek
//     const sonuncuEded = number % 10 // axirinci reqemi bize verecek
//     const r = numInAzeriOnluq(birinciEded) + ' ' + numInAzeriTeklik(sonuncuEded)
//     console.log(r)
// }
// sayNumberAzeri(90);
// sayNumberAzeri(91);
// sayNumberAzeri(18);
// sayNumberAzeri(5);

// _______________________________________________________________________________________________________________________________________


// ---------------------------------------------------------------task-29-----------------------------------------------------------------

// cmToM = (heightInCm) => {
//     const metres = parseInt(heightInCm / 100)
//     const cm = heightInCm % 100
//     return `${metres}m ${cm}cm`
// }


// console.log(cmToM(180))
// console.log(cmToM(187))
// console.log(cmToM(298))
// console.log(cmToM(490))




// _______________________________________________________________________________________________________________________________________






// ---------------------------------------------------------------task-30-----------------------------------------------------------------



// cmToM = (height) => {
//     const km = parseInt(height / 1000)
//     const m = height % 1000
//     return `${km}km ${m === 0 ? '' : m + 'm'}`
// }

// console.log(cmToM(8069))
// console.log(cmToM(8862))



// _______________________________________________________________________________________________________________________________________



// ---------------------------------------------------------------------Task31------------------------------------------------------------




// carType = (wheelCount) => {
//     if(wheelCount > 5){
//         return 'kamaz'
//     }
//     switch (wheelCount) {
//         case 2:
//             return 'velosiped, motoskliet';
//         case 3:
//             return 'moped';
//         case 4:
//             return 'masin';
//         default:
//             return 'Yalnis!'
//     }
// }

// console.log(carType('9'));


// ---------------------------------------------------------------------Task-32------------------------------------------------------------

// numYuzluk = (number) => {

//     switch (number) {
//         case 1:
//             return 'Yuz ';
//         case 2:
//             return 'Iki yuz '
//         case 3:
//             return 'Uc yuz  '
//         case 4:
//             return 'Dort yuz';
//         case 5:
//             return 'Bes yuz '
//         case 6:
//             return 'Alti yuz '
//         case 7:
//             return 'Yetdi yuz '
//         case 8:
//             return 'Sekkiz yuz ';
//         case 9:
//             return 'Dokquz yuz '

//     }
// }

// numTek = (number) => {
//     switch (number) {
//         case 1:
//             return 'Bir';
//         case 2:
//             return 'Iki'
//         case 3:
//             return 'Uc'
//         case 4:
//             return 'Dort';
//         case 5:
//             return 'Bes'
//         case 6:
//             return 'Alti'
//         case 7:
//             return 'Yetdi'
//         case 8:
//             return 'Sekkiz';
//         case 9:
//             return 'Dokquz'

//     }
// }


// numOnlug = (number) => {
//     switch (number) {
//         case 1:
//             return 'On';
//         case 2:
//             return 'Iyirmi'
//         case 3:
//             return 'Otuz'
//         case 4:
//             return 'Qirx';
//         case 5:
//             return 'Ellii'
//         case 6:
//             return 'Altmis'
//         case 7:
//             return 'Yetmis'
//         case 8:
//             return 'Seksen';
//         case 9:
//             return 'Doxsan'

//     }
// }

// sayNumber = (number) => {
//     const birinciEded = parseInt(number / 100) // ilk reqemi bize verecek
//     const ortaEded = parseInt(number / 10 % 10) // axirinci reqemi bize verecek
//     const sonuncuEded2 = number % 10 // axirinci reqemi bize verecek

//     const r = numYuzluk(birinciEded) + numOnlug(ortaEded) + ' ' + numTek(sonuncuEded2);
//     console.log(r)
// }
// sayNumber(352)

// _______________________________________________________________________________________________________________________________________





// --------------------------------------------------------------------------Sada_task----------------------------------------------------



// --------------------------------------------------------------------------task_01------------------------------------------------------


// NumbersOneTen = (num) => {
//     result = 0;
//     for (let i = 0; i <= num; i++) {
//         if (i % 2 !== 0) {
//             result += i
//         }
//     }
//     return result
// }
// console.log(NumbersOneTen(10));
// _______________________________________________________________________________________________________________________________________




// --------------------------------------------------------------------------task_02------------------------------------------------------

// let num=1;
// for (let i = 5; i >= num; i--) {
//     console.log(i);
// }




// _______________________________________________________________________________________________________________________________________






// --------------------------------------------------------------------------task_03------------------------------------------------------

// for (let user; (user = prompt("Isdifadeci adi daxil edin")) !== "admin"; ){
//     console.log("Duzgun yaz, admin yaz!")
// }
// console.log("Welcome")


// let user;
// while (user !== "admin") {
//     user = prompt("who are you?")
// }
// console.log("welcome");

// _______________________________________________________________________________________________________________________________________




// --------------------------------------------------------------------------task_04------------------------------------------------------



// faktorial = (num) => {
//     result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i
//     }
//     return result;
// }

// let userInput = prompt("Sada reqem yada eded yaz");
// let num = parseInt(userInput)
// console.log(faktorial(num))

// _______________________________________________________________________________________________________________________________________




// --------------------------------------------------------------------------task_05------------------------------------------------------


// numberKok = (a) => {
//    return a**2
// }
// console.log(numberKok(3))

// _______________________________________________________________________________________________________________________________________




// --------------------------------------------------------------------------task_06------------------------------------------------------

// const callbackFonksiyonu = (sonuc) => {
//     console.log("Toplam:", sonuc);
// };

// function hesapla(x = 0, y = 0, z = 0, cb) {
//     let cem = x + y + z
//     cb(cem);
// }

// hesapla(10, 5, 5, callbackFonksiyonu);


// _______________________________________________________________________________________________________________________________________




// ----------------------------------------------------------------------task_07----------------------------------------------------------


// function work(myWork,ad) {

//     switch (myWork) {
//         case "Html":
//             console.log(`${ad}, html proqramlashdirma dili deyil`);
//             break;
//         case "javascript":
//             console.log(`${ad}, ehsen, sen js developersen!`);
//             break;
//         case "python":
//             console.log(`${ad} ilanlarla ishlemirik`);
//             break;
//         default: {
//             console.log("YALNISH!!!!")
//         }
//     }
// }

// work("Html","Elvin")
// work("javascript","Ruslan")


// _______________________________________________________________________________________________________________________________________





// -------------------------------------------------------------------task_08-------------------------------------------------------------


// SecondMinute = (minute) => {
//     return 60 * minute;
// }
// console.log(SecondMinute(5));



// _______________________________________________________________________________________________________________________________________












