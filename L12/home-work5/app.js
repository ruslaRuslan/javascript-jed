// Task-01
// İstifadəçi adını parametr kimi qəbul edən funksiya yazın.
// İstifadəçi adını parametr kimi qəbul edən və konsola
// «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
//     Funksiyanı 3 müxtəlif ad üçün çağırın.



// let İstifadəçiAdı = () => {
//     let id = prompt('Muxtelif adlar yazin')
//     console.log(`[${id}] is active now`);
//     return id
// }
// İstifadəçiAdı()

// ------------------------------------------------------------------------------------------------------------------------------------------
//         Task-02
// Üç ədəddən ən böyüyünü təyin edən funksiya tərtib edin.
// Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
// Fərqli arqumentlərlə funksiyanı üç dəfə çağırın

// function TheLargestOfTheNumber(a, b, c) {
//     let enBooyukReqem = a;
//      if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
//         return 'YALNIS REQEM YADA EDED YAZIN!!!!'
//     }
//     if (b  > enBooyukReqem) {
//         enBooyukReqem = b
//     }else if (c > enBooyukReqem) {
//         enBooyukReqem = c
//     }
//     return enBooyukReqem
// // ______________________________________________________________________________________________________________________________________

//     // if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
//     //     return 'YALNIS REQEM YADA EDED YAZIN!!!!'
//     // }
//     // if (a > b && c < a) {
//     //     return a;
//     // } else if (b > a && c < b) {
//     //     return b;
//     // } else if (c > b && a < c) {
//     //     return c;

//     // } else if (a === b || a === c) {
//     //     return a
//     // } else if (b === c) {
//     //     return b
//     // }

// }
// console.log(TheLargestOfTheNumber(140, 100, 120));
// console.log(TheLargestOfTheNumber('salam', 10, 10));


// _________________________________________________________________________________________________________________________________________

// ozumnen yazdim
// const TheLargestOfTheNumberV2 = (a, b, c) => typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' ? 'YALNIS REQEM YADA EDED YAZIN!!!!' :  (a > b && a > c ? a : (b > a && b > c ? b : (c > a && c > b ? c : (a === b || a === c ? a : c === b ? c : b))))
// console.log(TheLargestOfTheNumberV2(120, 1985, 1450));
// console.log(TheLargestOfTheNumberV2('Salam', 10, 10));

// ------------------------------------------------------------------------------------------------------------------------------------------


// Task-03
// Bütün hesabların cəmini rubl ilə mesaj çıxaran funksiya tərtib edin.
// Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin
// cəmin rublla göstərən funksiya yazın.
// Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var.
//     Bir dollar üçün məzənnə 75 rubl təşkil edir.
// Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.


// let RublUSD = +prompt("dlksdmsd")
// let RublUSD = parseFloat(prompt('Nece dollar oldugunu yazin'))
// let USD_Rubl = parseFloat(prompt('Nece Rubl oldugunu yazin'))
// let result = `Bütün depozitlər üzrə məbləğ: ${RublUSD * 75 + USD_Rubl}`
// console.log(result);


// ------------------------------------------------------------------------------------------------------------------------------------------


//     Task-04
// Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası tərtib edin.

// const parametr = (numbers) => numbers; console.log(parametr(Math.min(5, 6, 8, 2)));

// const min = (n1,n2) => Math.min(n1,n2)
// console.log(min(10,20));
// ------------------------------------------------------------------------------------------------------------------------------------------

//     Task-05
// Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və
// bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyasını yazın.
//     Məsələn, calc(4, 6, '+');  //  10 qaytaracaq

// const calculator = (number1, number2, operator) => {
//     switch (operator) {
//         case '+': {
//             console.log(`${number1 + number2}`);
//         }
//             break;
//         default: {
//             console.log(`YALNIS!`);
//         }
//     }
//     return operator
// }
// calculator(4, 6, '+')    //10
// calculator(94, 21, '-')  //YALNIS!


// ------------------------------------------------------------------------------------------------------------------------------------------


// Task-06
// Biletin şanslı olub olmadığını yoxlayan funksiya yazın.
// Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər
// olduğunu yoxlayan isLucky funksiyasını yazın.
// Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.
//     Məsələn, isLucky(234801);  // true qaytaracaq


// const isLucky = (number) => {
//     let numberString = number.toString()
//     if (numberString.length === 6 && numberString.slice(0, 3) === numberString.slice(3, 7)) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }


// }
// isLucky(223223)
// isLucky(234801)


// ------------------------------------------------------------------------------------------------------------------------------------------

// Task-07
// Bir ədədi parametr kimi qəbul edən və cüt olduqda true,
//     tək olduqda isə false qaytaran isEven() funksiyasını yazın.

// const isEven = (number) => {
//     if (number % 2 === 0) {
//         return true;
//     } else if (number % 2 !== 0) {
//         return false;
//     }
// }
// console.log(isEven(5));
// console.log(isEven(120));

//________________________________________________________________________________________________________________________________________
// const isEven = number => number % 2 === 0
// _________________________________________________________________________________________________________________________________________

// ozum ucun bele yazdim tapsiriqdan elave olaraq
// const isEvenV2 = (...numbers) => {
//     return numbers.map((number) => number % 2 === 0)
// }
// console.log(isEvenV2(3, 5, 2));
// ------------------------------------------------------------------------------------------------------------------------------------------


//         Task - 8
// Mətni parametri kimi qəbul edən və bu mətndəki herflerin sayını qaytaran numCounter funksiyasını yazın.

// const numCounter = (string) => {

//     let result = string.replace(/[^a-zA-Z]/g, '').length
//     console.log(result);
// }
// numCounter('Ruslan Zeynalov Mehman')
// numCounter(' Ruslan_57 ')


// ------------------------------------------------------------------------------------------------------------------------------------------



//     Task -09
// İstənilən rəqəmin faktorialını hesablayan bir funksiya yaradın. (dövr-ilə)

// const factorial = (number) => {
//     result = 1;
//     for (let i = 1; i <= number; i++) {
//         result *= i
//     }
//     return result
// }
// console.log(factorial(7)); //120

// ------------------------------------------------------------------------------------------------------------------------------------------

// Task - 10
// İstifadəçidən rəqəm qəbul edən və onun müsbət, mənfi və ya sıfır olduğunu yoxlayan bir funksiya yazın. (if-else ilə)


// function numbers() {
//     let user = prompt('Isdediyiniz reqemi yazin')
//     if (user === '0') {
//         return `${user} sıfırdı `
//     } else if (user > 0) {
//         return `${user} musbetdir`
//     } else if (user < 0) {
//         return `${user} menfidi`
//     } else {
//         return `YALNIS!!!.`
//     }
// }
// console.log(numbers());
// ------------------------------------------------------------------------------------------------------------------------------------------

// Task - 11
// İstifadəçidən bir ədəd daxil etməsini tələb edən və rəqəmin mükəmməl və ya mükəmməl olmadığını bildirən bir proqram yazın. (if-else ilə)

// function users(user) {
//     let result = 0;
//     for (let i = 1; i < user; i++) {
//         if (user % i === 0) {
//             result += i
//         }
//     }
//     return user === result ? true : false
// }
// console.log(users(28));
// console.log(users(6)); 
// console.log(users(8));


// ------------------------------------------------------------------------------------------------------------------------------------------


// Task - 12
// İstifadəçidən bir ay adı daxil etməsini tələb edən və həmin ayın neçə gün çəkdiyini göstərən bir proqram yazın. (switch-case ilə)

// let user = prompt('ayi yazin')
// function nameMonth(getDay) {
//     let result;
//     switch (getDay.toLowerCase()) {
//         case 'yanvar':
//         case 'mart':
//         case 'may':
//         case 'iyul':
//         case 'avqust':
//         case 'oktyabr':
//         case 'dekabr':
//             result = 31;
//             break;
//         case 'aprel':
//         case 'iyun':
//         case 'sentyabr':
//         case 'noyabr':
//             result = 30
//             break;
//         case 'fevral':
//             result = 28
//         default: {
//             result = 'YALNIS!!!'
//         }
//     }
//     return result
// }
// let Inputuser = nameMonth(user)
// console.log(Inputuser)

// ------------------------------------------------------------------------------------------------------------------------------------------


//     Task - 13
// İstifadəçidən iki ədəd daxil etməsini tələb edən və onların ən böyük ortaq bölünənini tapıb göstərən bir proqram yazın. (dövrlə və if-else ilə)

// let userTwoNumber = () => {
//     let a = parseFloat(prompt('birinci reqemi yazin'));
//     let b = parseFloat(prompt('ikinci reqemi yazin'))
//     let result = 0
//     let numbers = (a, b) //Math.min ve ya Math.max yaza bilerik
//     for (let i = 1; i < numbers; i++) {
//         if (a % i === 0 && b % i === 0) {
//             result = i
//         }
//     }
//     return result
// }
// console.log(userTwoNumber());


// ------------------------------------------------------------------------------------------------------------------------------------------


//     Task - 14
// İstifadəçidən bir söz daxil etməsini tələb edən və bu sözün palindrom olub olmadığını yoxlayan bir proqram yazın. (funksiya, dövr və if-else ilə)

// let user = prompt('palindrom olub olmadığını yoxla')
// function palindrome(stringOrNumber) {
//     let result = stringOrNumber

//     let wordsLength = result.length
//     for (let i = 0; i < wordsLength ; i++) {
//         if (result[i] !== result[wordsLength - 1 - i]) {
//             return ` ${stringOrNumber} Polindrom deyil`
//         }
//     }
//     return `${stringOrNumber} duzdu: ${result} Palindromdu`
// }

// console.log(palindrome(user));


// ------------------------------------------------------------------------------------------------------------------------------------------


//     Task - 16
// İstifadəçidən bir ədəd daxil etməsini tələb edən və bu ədədin Armstrong rəqəmi olub olmadığını yoxlayan bir proqram yazın. (dövrlə və if-else ilə)

// function isArmStrong(number) {
//     const numString = String(number)
//     const numDight = numString.length;
//     let result = 0;

//     for (let i = 0; i < numDight; i++) {
//         let digit = Number(numString[i]);
//         result += Math.pow(digit, numDight);
//     }
//     if (result === number) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isArmStrong(70));
// console.log(isArmStrong(371));
//________________________________________________________________________________________________________________________________________
// const isArmStrongNumber = (num) => {
//     let number = String(num)
//     let pow = number.length;
//     let cem = 0;

//     for (let i = 0; i < pow; i++) {
//         cem += number[i] ** pow
//     }
//     return cem === num
// }

// document.write(isArmStrongNumber(71))



// ------------------------------------------------------------------------------------------------------------------------------------------


//     Task - 17
// İstifadəçidən bir mətn və bir hərf daxil etməsini istəyən və bu hərfin mətndə neçə dəfə təkrarlandığını hesablayan bir proqram yazın. (dövr, if-else)

// const User = (a, b) => {
//     let result = 0;
//     for (let i = 0; i < a.length; i++) {
//         // if (a.slice(i, i + b.length) === b){
//         //     result++
//         // }
//         // if (a[i] === b) result ++
//     }
//     return result
// }
// console.log(User('Ruslan Zeynalov Mehman, Qardasi Qehraman', 'a'));
//________________________________________________________________________________________________________________________________________

// const User = (a, b) => {
//     let result = 0;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === b) {
//             result ++
//         }
//     }
//     return result
// }

// console.log(User('Ruslan Zeynalov Mehman, Qardasi Qehraman', 'a'));

// ------------------------------------------------------------------------------------------------------------------------------------------


//     Task - 18
// isİnteger adında funksiya yazın.Bu funksiya 1 parametr alacaq və parametr olaraq hər şey daxil edə bilərəm.Funksiya, əgər daxil edilən parametr integerdirsə true deyilsə false qaytarsın.


// const Integer = (number) => {
//     if (Number.isInteger(number)) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(Integer(20.1));
// console.log(Integer(20));



// ------------------------------------------------------------------------------------------------------------------------------------------


//         Task - 19
//     3 rəqəmli ədəd qəbul edən və onun rəqəmlərinin cəmini qaytaran funksiya yazın.Məsələn daxil edilib 547, cavab olmalıdı 5 + 4 + 7 yəqni 16

// const ThreeNumbers = (number) => {
//     let result = 0;
//     const numberAsString = String(number)
//     for (let i = 0; i < numberAsString.length; i++) {
//         result += parseInt(numberAsString[i])
//     }
//     return result
// }
// console.log(ThreeNumbers(547)); //16


// ------------------------------------------------------------------------------------------------------------------------------------------


//     Taksk - 20
// Ureyimde bir reqem tutmusam 0 - dan 50ye qeder.User her defesinde hemin ededi sorusun.Eger sehvdirse, yeniden sorussun.Duz olanda, kapital bank hesabinda 1000 manat kocurulsun console - a cixarin.
//         // *ADVANCED*: nece defeye tapdi, onu da cixarin. Tutaq ki,  ehsen, 10 defeye tapdin.
//         // *ADVANCED ADVANCED* :
//         //  eger addimin sayi 1 olanda olsun 1000 manat
//         //  eger addimlarin sayi 2,3,4,5 olarsa  olsun 750 manat
//         //  eger addimlarin sayi 6,7,8,9 olarsa  olsun 250 manat
//         //  eger addimlarin sayi 10+ olarsa  olsun -250 manat  (ozu bize pul versin)
//         // -------------------------------------------------------------------------------------------------------------------

// function playGame() {
//     let randomNumber = Math.floor(Math.random() * 51);
//     let prize = 0;

//     for (let attempts = 1; ; attempts++) {
//         let userNumber = parseInt(prompt('Введите число от 0 до 50'));

//         if (isNaN(userNumber) || userNumber < 0 || userNumber > 50) {
//             console.log('Пожалуйста, введите число от 0 до 50.');
//             continue;
//         }

//         if (userNumber === randomNumber) {
//             if (attempts === 1) {
//                 prize = 1000;
//             } else if (attempts >= 2 && attempts <= 5) {
//                 prize = 750;
//             } else if (attempts >= 6 && attempts <= 9) {
//                 prize = 250;
//             } else {
//                 prize = -250;
//             }

//             console.log(`Поздравляем! Вы угадали число за ${attempts} попыток.`);
//             console.log(`Ваш выигрыш составляет ${prize} манат.`);
//             break;
//         } else if (userNumber < randomNumber) {
//             console.log('Мало. Попробуйте еще раз.');
//         } else {
//             console.log('Много. Попробуйте еще раз.');
//         }
//     }
// }

// // Чтобы начать игру:
// playGame();


// ------------------------------------------------------------------------------------------------------------------------------------------

//         Task - 21
//     1 - den verilen edede qeder olan ededlerin cemi.
// let user = prompt('1-den yazacaqiniz reqeme yada edede qeder toplayacax ')
// function numbers(n) {
//     let result = 0;
//     for (let i = 1; i <= n; i++) {
//         result += i
//     }
//     return result
// }
// console.log(numbers(user));


// ------------------------------------------------------------------------------------------------------------------------------------------




//         Task - 22
// ekranda bu formada sekil cekin
//         ****
//   ***
//   **
//   *



// ------------------------------------------------------------------------------------------------------------------------------------------



//         Task - 23
//     1 - den verilen edede qeder ededlerin hasili -=> faktorial(5 != 1 * 2 * 3 * 4 * 5)

// let user = prompt('isdediyiniz reqemin faktorialini tapin')
// function factorial(number) {
//     result = 1;
//     for (let i = 1; i <= number; i++) {
//         result *= i
//     }
//     return result
// }
// console.log(factorial(user));

// ------------------------------------------------------------------------------------------------------------------------------------------


// Ramin Mammadzada, [20.02.2024 15: 55]
//     Task - 24
// prompt vasitesile direction(istiqamet) alin.eger up - dirsa, console - a yuxari get, right -> saga get, down -> asagi get, left -> sola get sozlerini cixarin.

// let user = prompt('Isdiqameti yazin')
// const direction = (istiqamet) => {
//     if (istiqamet === 'up') {
//         return `yuxari get`
//     } else if (istiqamet === 'right') {
//         return `saga get`
//     } else if (istiqamet === 'down') {
//         return `asagi get`
//     } else if (istiqamet === 'left') {
//         return `sola get`
//     }else{
//         return`YALNIS!!!`
//     }
// }
// console.log(direction(user));

// ------------------------------------------------------------------------------------------------------------------------------------------


//         Task - 25
// Body Mass Index(BMI)  calculator yaradin.Internetde axtara bilersiniz bunun haqqinda insanin boyu ve cekisi ile formalasan bir indexlemedir.Hesablama bu formada olur cekini(kq ile) bolursunuz boyun kvadratina(m ile), misal ucun:
// Cekisi 67 kq olan 1.65 m boya sahib adamin BMI bu formada hesablanir: 67 / (1.65 * 1.65) =  24.60
// Demeli bu adam ucun BMI 24.60 - dir.

// let user = prompt('Idediyiniz adamin cekisinin  BMI-ni tapa bilersiz, tek cekini yazmaqla')
// const Index = (BMI) => {
//     let result = (BMI / 40.60)
//     let x = (BMI / (result * result)).toFixed(2)
//     return `Demeli bu adam ucun BMI ${x} -dir`
// }
// console.log(Index(user));

// ------------------------------------------------------------------------------------------------------------------------------------------



// Aldigimiz netice 18.5 - den kicikdirse, adamin BMI - si azdir, ariqdir.
// Aldigimiz netice 25 - den kicikdirse, adamin BMI - si normal beden olcusune sahibdir.
// Aldigimiz netice 30 - den kicikdirse, adamin BMI - si kokdur.
// Qalan hallarda "obese" - dir.

// let user = prompt('Idediyiniz adamin cekisinin  BMI-ni tapa bilersiz, tek cekini yazmaqla')
// const Index = (BMI) => {
//     let result = (BMI / 40.60)
//     let x = (BMI / (result * result)).toFixed(2)
//     if (x < 18.5) {
//         return `${x} | adamin BMI - si azdir, ariqdir.`
//     } else if (x < 25) {
//         return `${x} | adamin BMI - si normal beden olcusune sahibdir`
//     } else if (x < 30) {
//         return `${x} |   adamin BMI - si kokdur.`
//     } else {
//         return `obese`
//     }
// }
// console.log(Index(user));

// ------------------------------------------------------------------------------------------------------------------------------------------


//         Task - 26
// İkirəqəmli ədədi üçrəqəmli olana qədər artırın.
// İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
// Bu rəqəmi üçrəqəmli olana kimi 7 - ədədi qədər artırın.
// Son dəyəri konsola çıxarın.

// const ikirəqəmliEded = (number) => {
//     if (number >= 10 && number <= 99) {
//         for (; number + 7 <= 99;) {
//             number += 7;
//         }
//         return number
//     } else {
//         return `Yalnis`
//     }
// }
// console.log(ikirəqəmliEded(20));
// console.log(ikirəqəmliEded(28));



// ------------------------------------------------------------------------------------------------------------------------------------------



//         Task - 27
// Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// Proqram N ədədini istifadəçidən soruşur.

// let user = prompt('eded yada reqem yazin')
// function cycles(N) {
//     let result = ' ';
//     for (let i = 1; i <= N; i++) {
//         result += `I know how to use cycles,`
//     }
//     return `${result}`
// }
// console.log(cycles(user))    


//________________________________________________________________________________________________________________________________________


// let str = '`I know how to use cycles,`'
// const cycles = (n) => str.repeat(n)
// console.log(cycles(user))    

// ------------------------------------------------------------------------------------------------------------------------------------------


//         Task - 28
// Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.

// const üçrəqəmliEdedler = (number) => {
//     let result = '';
//     for (let i = 100; i <= number; i += 10) {
//         if (number <= 999 && number >= 100 && number % 10 === 0) {
//             result += i + ','
//         } else {
//             return `YALNIS!!`
//         }
//     }
//     return result
// }
// console.log(üçrəqəmliEdedler(190));


// ---------------------------------------------------------------------------------------------------------------------------------------


//         Task - 29
// Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.


// const ikiReqemliTekEded = (number) => {
//     result = 0;
//     for (let i = 11; i <= number; i++) {
//         if (i % 2 !== 0) {
//             result += i
//         }
//     }
//     return result
// }
// console.log(ikiReqemliTekEded(20));


// ---------------------------------------------------------------------------------------------------------------------------------------



//         Task - 30
// İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın.
// Proqram istifadəçidən ədəd daxil etməyi xahiş edir.Bundan sonra proqram konsolda bu rəqəmin
// bölünəni olan bütün üçrəqəmli ədədlərin cəmini çıxarır.


// const ədədinBölünəni = (number) => {
//     let result = 0;
//     for (let i = 100; i <= 999; i++) {
//         if (i % number === 0) {
//             result += i
//         }
//     }
//     return result
// }
// console.log(ədədinBölünəni(9));

// ---------------------------------------------------------------------------------------------------------------------------------------
// const names = ['ali', 'ruslan', 'ramin', 'sada', 'mahammad', 'sabina', 'idris', 'samil']
// let max = names[0]


// names.forEach((name) => {
//     if (max.length < name.length) {
//           max = name
//     }
//     return max
// })
// console.log(max);

// _________________________________________________________________________________________________________________________________________

// const names = ['ali', 'ruslan', 'ramin', 'sada', 'mahammad', 'sabina', 'idris', 'samil']

// let max = names.reduce((result, name) => {
//     if (result.length > name.length) {
//         return result
//     } else {
//         return name
//     }

// })
// console.log(max);


// ---------------------------------------------------------------------------------------------------------------------------------------


// const names = ['ali', 'ruslan', 'ramin', 'sada', 'mahammad', 'sabina', 'idris', 'samil']
// let max = names[0]
// names.forEach((name) => {
//     if (name.length < max.length) {
//         max = name
//     }
//     return max
// })
// console.log(max);

// _______________________________________________________________________________________________________________________________________

// const names = ['ali', 'ruslan', 'ramin', 'sada', 'mahammad', 'sabina', 'idris', 'samil']

// let min = names.reduce((result, name) => {
//     if (result.length > name.length) {
//         return name
//     } else {
//         return result
//     }
// })
// console.log(min);

// ---------------------------------------------------------------------------------------------------------------------------------------
const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]
// users massivinde reduce - dan istifade etmekle
// T1.her user -in id - lerinin cemini tap;

let ID = users.reduce((result, user) => {
    return result + user.id
}, 0)
console.log(ID);

// ---------------------------------------------------------------------------------------------------------------------------------------


// T2.en uzun email - i tap;

let email = users.reduce((result, user) => {
    return result + user.email.length
}, 0)
console.log(email);

// ---------------------------------------------------------------------------------------------------------------------------------------


// T3.en uzun ada malik olan elementi tap;

let uzunAd = users.reduce((result, ad) => {
    if (result.length > ad.length) {
        return result.name
    } else {
        return ad.name
    }
})
console.log(uzunAd);


// ---------------------------------------------------------------------------------------------------------------------------------------


// T4.en uzun seher ada malik olan elementi tap;


let SeherAd = users.reduce((result, seher) => {
    if (result.address.city.length > seher.address.city.length) {
        return result
    } else {
        return seher
    }
})
console.log(SeherAd.address.city);

// ---------------------------------------------------------------------------------------------------------------------------------------



