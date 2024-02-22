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

//     if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
//         return 'YALNIS REQEM YADA EDED YAZIN!!!!'
//     }
//     if (a > b && c < a) {
//         return a;
//     } else if (b > a && c < b) {
//         return b;
//     } else if (c > b && a < c) {
//         return c;

//     } else if (a === b || a === c) {
//         return a
//     } else if (b === c) {
//         return b
//     }

// }
// console.log(TheLargestOfTheNumber(100, 100, 120));
// console.log(TheLargestOfTheNumber('Salam', 10, 10));


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



// let RublUSD = parseFloat(prompt('Nece dollar oldugunu yazin'))
// let USD_Rubl = parseFloat(prompt('Nece Rubl oldugunu yazin'))
// let result = `Bütün depozitlər üzrə məbləğ: ${RublUSD * 75 + USD_Rubl}`
// console.log(result);


// ------------------------------------------------------------------------------------------------------------------------------------------


//     Task-04
// Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası tərtib edin.

// const parametr = (numbers) => numbers; console.log(parametr(Math.min(5, 6, 8, 2)));

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
//             console.error('YALNIS!!!')
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

// console.log(isArmStrong(153));
// console.log(isArmStrong(171));


// ------------------------------------------------------------------------------------------------------------------------------------------


//     Task - 17
// İstifadəçidən bir mətn və bir hərf daxil etməsini istəyən və bu hərfin mətndə neçə dəfə təkrarlandığını hesablayan bir proqram yazın. (dövr, if-else)

const User = (a, b) => {
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        if (a.slice(i, i + b.length) === b){
            result++
        }
    }
    return result
}
console.log(User('Ruslan Zeynalov Mehman, Qardasi Qehraman', 'a'));

// ------------------------------------------------------------------------------------------------------------------------------------------


//     Task - 18
// isİnteger adında funksiya yazın.Bu funksiya 1 parametr alacaq və parametr olaraq hər şey daxil edə bilərəm.Funksiya, əgər daxil edilən parametr integerdirsə true deyilsə false qaytarsın.





//         Task - 19
//     3 rəqəmli ədəd qəbul edən və onun rəqəmlərinin cəmini qaytaran funksiya yazın.Məsələn daxil edilib 547, cavab olmalıdı 5 + 4 + 7 yəqni 16


//     Taks - 20
// Ureyimde bir reqem tutmusam 0 - dan 50ye qeder.User her defesinde hemin ededi sorusun.Eger sehvdirse, yeniden sorussun.Duz olanda, kapital bank hesabinda 1000 manat kocurulsun console - a cixarin.
//         // *ADVANCED*: nece defeye tapdi, onu da cixarin. Tutaq ki,  ehsen, 10 defeye tapdin.
//         // *ADVANCED ADVANCED* :
//         //  eger addimin sayi 1 olanda olsun 1000 manat
//         //  eger addimlarin sayi 2,3,4,5 olarsa  olsun 750 manat
//         //  eger addimlarin sayi 6,7,8,9 olarsa  olsun 250 manat
//         //  eger addimlarin sayi 10+ olarsa  olsun -250 manat  (ozu bize pul versin)
//         // -------------------------------------------------------------------------------------------------------------------


//         Task - 21
//     1 - den verilen edede qeder olan ededlerin cemi.


//         Task - 22
// ekranda bu formada sekil cekin
//         ****
//   ***
//   **
//   *

//         Task - 23
//     1 - den verilen edede qeder ededlerin hasili -=> faktorial(5 != 1 * 2 * 3 * 4 * 5)

// Ramin Mammadzada, [20.02.2024 15: 55]
//     Task - 24
// prompt vasitesile direction(istiqamet) alin.eger up - dirsa, console - a yuxari get, right -> saga get, down -> asagi get, left -> sola get sozlerini cixarin.


//         Task - 25
// Body Mass Index(BMI)  calculator yaradin.Internetde axtara bilersiniz bunun haqqinda insanin boyu ve cekisi ile formalasan bir indexlemedir.Hesablama bu formada olur cekini(kq ile) bolursunuz boyun kvadratina(m ile), misal ucun:
// Cekisi 67 kq olan 1.65 m boya sahib adamin BMI bu formada hesablanir: 67 / (1.65 * 1.65) =  24.60
// Demeli bu adam ucun BMI 24.60 - dir.

// Aldigimiz netice 18.5 - den kicikdirse, adamin BMI - si azdir, ariqdir.
// Aldigimiz netice 25 - den kicikdirse, adamin BMI - si normal beden olcusune sahibdir.
// Aldigimiz netice 30 - den kicikdirse, adamin BMI - si kokdur.
// Qalan hallarda "obese" - dir.



//         Task - 26
// İkirəqəmli ədədi üçrəqəmli olana qədər artırın.
// İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
// Bu rəqəmi üçrəqəmli olana kimi 7 - ədədi qədər artırın.
// Son dəyəri konsola çıxarın.

//         Task - 27
// Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// Proqram N ədədini istifadəçidən soruşur.

//         Task - 28
// Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.

//         Task - 29
// Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.

//         Task - 30
// İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın.
// Proqram istifadəçidən ədəd daxil etməyi xahiş edir.Bundan sonra proqram konsolda bu rəqəmin
// bölünəni olan bütün üçrəqəmli ədədlərin cəmini çıxarır.