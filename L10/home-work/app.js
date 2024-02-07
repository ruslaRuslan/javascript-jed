// // repeatedSymbolCounter('ALIONALI', 'A') // return 2 -> must be done with for loop!!!!
// const repeatedSymbolCounter = (a, b) => {
//     let result = 0;
//     for (let i = 0; i <= a.length; i++) {
//         if (a[i] === b) {
//             result++;
//         }
//     }
//     return result;
// }
// console.log(repeatedSymbolCounter('ALIONALI', 'A'));

//-------------------- bunu ele yazmaliyam ki balacada 'a' olsun

// ----------------------------------------------------------------------------------------------------------------------------------------

// capitalize(str) -> alion -=> Alion

// const capitalize = (str) => {
//     let result = str.charAt(0).toUpperCase() + str.slice(1)
//     console.log(result);
//     return result;
// }
// capitalize('alion');


// ----------------------------------------------------------------------------------------------------------------------------------------




// // snakeToKebab(str) -=> SNAKE_CASE to kebab-case -=> BU_TEST_UCUNDUR -> bu-test-ucundur      YARIMCIX IS!!!!!!

// nameFormat(str) —> Alion GreenHeart-=> Alion G.

// const nameFormat = (str) => {
//     const words = str.split(' ');
//     const result = `${words[0]} ${words[1].charAt(0)}`;
//     console.log(result);
//     return result;
// }
// nameFormat('Alion GreenHeart ');
// nameFormat('Ruslan Zeynalov ');
// nameFormat('Gahraman Zeynalov ');


// _------------------------------------------------------------

// Funksiya yaradin, ilk characterimizi deyisek: ilkHerfiDeyis(soz, ilkHerf)
// ilkHerfiDeyis('alion', "A") // Alion

// ilkHerfiDeyis = (word, onceWord) => {
//     const newWord = onceWord + word.slice(1);
//     console.log(newWord);
//     return newWord;
// }
// ilkHerfiDeyis('alion', 'A')


// ———————————
// 1. Write a JavaScript function to split a sentence (JS funksiyasi yazin, cumle verilir, cumledeki sozleri ayirsin).

// function splitSentence(sentence) {
//     const wordsArray = sentence.split(' ');
//     console.log(wordsArray);
//     return wordsArray;
// }
// splitSentence('Write a JavaScript function to split a sentence (JS funksiyasi yazin, cumle verilir, cumledeki sozleri ayirsin).');

// 2. Write a JavaScript function to convert a string in abbreviated form. (Alion GreenHeart -> Alion G.)

// const nameFormat = (str) => {
//     let words = str.split(' ');
//     const result = `${words[0]} ${words[1].charAt(0)}`
//     console.log(result);
//     return result;
// }
// nameFormat('Alion GreenHeart ');
// nameFormat('Ruslan Zeynalov');
// nameFormat('Gahraman Zeynalov');

// -----------------------------------------------------------------------------------------------------------------------------------------



// 3. removeCharacterFromString("Alion","A") -> "lion" . bele bir funksiya yazin, sozden character silme. Alion sozu verdik ve A characteri verdik, sozden A-ni sildi.



// function removeCharacterFromString(word, charToRemove) {
//     const result = word.replace(charToRemove, '');
//     console.log(result);
//     return result;
// }
// removeCharacterFromString('Alion', 'l');



// -----------------------------------------------------------------------------------------------------------------------------------------

// 4. verify gmail address. (gmail addressleri sonu @gmail.com ile bitmelidir abcdf@gmail.com meselen)


// let gmail = prompt('Emaili daxil edin')
// if (gmail.endsWith('gmail.com')) {
//     console.log(`${gmail} gmail.com`);
// }
// else {
//     console.log('yalnis!!!! Emaili daxil edin !');
// }


// -----------------------------------------------------------------------------------------------------------------------------------------

// 1. Normalda Bazar ertesinden Cumeye qeder ders olur. Ele bir funksiya qurun ki, bize alert-le desin bu gun derse getmeliyik ya yox.

// let today = new Date().getDay();
// if (today >= 1 && today <= 5) {
//     alert("Bu gün dərsə getməlisiniz")
// } else {
//     alert("Bu gün dərs yoxdur.")
// }

// -----------------------------------------------------------------------------------------------------------------------------------------


// 2. Bu gunki tarixi document.write ile html-e yazin.

// let today = new Date();
// document.write(today);

// -----------------------------------------------------------------------------------------------------------------------------------------


// 3. *ADVANCED* Bu gun heftenin hansi gunudur, onun adini avtomatik document-e yazin. (obyektlerden istifade ede bilersiniz)


// let today = new Date().getDay();
// if (today === 0) {
//     document.write('Bazar')
// } else if (today === 1) {
//     document.write('Bazar ertəsi')
// } else if (today === 2) {
//     document.write('Çərşənbə axşamı')
// } else if (today === 3) {
//     document.write('Çərşənbə')
// } else if (today === 4) {
//     document.write('Cümə axşamı')
// } else if (today === 5) {
//     document.write('Cümə')
// } else if (today === 6) {
//     document.write('Şənbə')
// } else {
//     document.write("")
// }



// 4. *ADVANCED* Bu ay hansi aydir adini document-e yazin. (obyektden istifade ede bilersiniz)

// let month = new Date().getMonth()
// if (month === 0) {
//     document.write('Yanvar')
// } else if (month === 1) {
//     document.write('Fevral')
// } else if (month === 2) {
//     document.write('Mart')
// } else if (month === 3) {
//     document.write('Aprel')
// } else if (month === 4) {
//     document.write('May')
// } else if (month === 5) {
//     document.write('Iyun')
// } else if (month === 6) {
//     document.write('Iyul')
// } else if (month === 7) {
//     document.write('Avqust')
// } else if (month === 8) {
//     document.write('Sentyabr')
// } else if (month === 9) {
//     document.write('Oktyabr')
// } else if (month === 10) {
//     document.write('Noyabr')
// } else if (month === 11) {
//     document.write('Dekabr')
// } else {
//     document.write("Yalnis ay!")
// }


// 5. Ezrail proqrami: user-den yasini sorusun. Ve omrune nece il qalib ona alert-le bildirin. Tutaq ki, insanlar ucun maksimum yas 77 ildir. (meselen, 60 yas yazsa 17 ili qalib 🥺)
//
// let Ezrail = prompt("yasinizi yazin zehmet olmasa")
// let result = 77 - Ezrail
// console.log(`${result} ili qalib 🥺`);

// 6. Userin yasini sorusun. ve bele bir statistika yazin: doguldugu vaxtdan bu gune nece il, ay, gun, saat, deqiqe, saniye kecib. (heresini ayrica) meselen,
// kecen il sayi: 23,
// kecen ay sayi: 234
// kecen gun sayi: 6974sdt
// ve s.


// const userBirthDateString = prompt("Введите свою дату рождения в формате YYYY-MM-DD:");
// const userBirthDate = new Date(userBirthDateString);
// if (isNaN(userBirthDate.getTime())) {
//     console.error("Некорректная дата рождения. Пожалуйста, введите дату в правильном формате.");
// } else {
//     const currentDate = new Date();
//     const timeDifference = currentDate - userBirthDate;
//     const years = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
//     const months = Math.floor((timeDifference % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
//     const days = Math.floor((timeDifference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
//     const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
//     const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
//     const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);
//     console.log(`Прошло ${years} лет, ${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд.`);
// }
// ---------------------------------------------------------------------------------------------------------------------------------------


// 6. Userin yasini sorusun. ve bele bir statistika yazin: doguldugu vaxtdan bu gune nece il, ay, gun, saat, deqiqe, saniye kecib. (heresini ayrica) meselen,
// kecen il sayi: 23,
// kecen ay sayi: 234
// kecen gun sayi: 6974sdt
// ve s.

// const userBirthDateString = prompt('Doguldugunuz tarixi teyin edin');
// const userBirthDate = new Date(userBirthDateString);
// if (isNaN(userBirthDate.getTime())) {
//     console.error('Dogum tarixini duzgun teyin edin')
// } else {
//     const currentDate = new Date();
//     const timeDifference = currentDate - userBirthDate;
//     console.log(timeDifference);
//     const seconds = parseInt(timeDifference / 1000);
//     const minutes = parseInt(seconds / 60);
//     const hours = parseInt(minutes / 60 + 1);
//     const days = parseInt(hours / 24 );
//     const months = parseInt(days / 30);
//     const years = parseInt(days / 365.25);
//     console.log(`Прошло ${years} лет, ${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд.`);
// }

// ---------------------------------------------------------------------------------------------------------------------------------------

// const userBirthDateString = prompt('Doguldugunuz tarixi teyin edin');
// const userBirthDate = new Date(userBirthDateString);
// if (isNaN(userBirthDate.getTime())) {
//     console.error('Dogum tarixini duzgun teyin edin')
// } else {
//     const currentDate = new Date();
//     const timeDifference = currentDate - userBirthDate;
//     console.log(timeDifference);
//     const seconds = parseInt(timeDifference / 1000);
//     const minutes = parseInt(seconds / 60);
//     const hours = parseInt(minutes / 60);
//     const days = parseInt(hours / 24 - 1);
//     const years = parseInt(days / 365.25);
//     const months = parseInt(years * 12 + 1);
//     console.log(`Прошло ${years} лет, ${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд.`);
// }

// ---------------------------------------------------------------------------------------------------------------------------------------


// Task. Funksiya yarat. Ona argument olaraq ad gonderecem, onun ilk ve son herfini boyudub, return etsin. 
// firstLastUpper("alion") // AlioN

// function firstLastUpper(name) {
//     let result = name.charAt(0).toUpperCase() + name.slice(1, -1) + name.slice(-1).toUpperCase()
//     console.log(result);
//     return result
// }
// firstLastUpper('alion')
// firstLastUpper('ruslan')
// firstLastUpper('ahmad')

// ---------------------------------------------------------------------------------------------------------------------------------------

// const firstLastUpperV1 = (name) => {
//     let first = name[0].toUpperCase();
//     last = name[name.length - 1].toUpperCase();
//     let middle = name.slice(1, -1).toLowerCase()
//     result = first + middle + last;
//     return result;
// }
// console.log(firstLastUpperV1('renat'));
// console.log(firstLastUpperV1('ali'));
// console.log(firstLastUpperV1('isabala'));
// console.log(firstLastUpperV1('ramin'));

// ---------------------------------------------------------------------------------------------------------------------------------------

// const firstLastUpperV2 = (name) => {
//     let upper = name.toUpperCase();
//     let middle = upper.slice(1, -1);
//     let result = upper.replace(middle, middle.toLowerCase());
//     return result;
// }
// console.log(firstLastUpperV2('reNat'));
// console.log(firstLastUpperV2('ali'));
// console.log(firstLastUpperV2('isABAla')); 
// console.log(firstLastUpperV2('ramin')); 

// ---------------------------------------------------------------------------------------------------------------------------------------
// symbolCounter("sAlam menim adim renatdir, men javascriptde nifret edirem, zarafat edirem o benim tek askimdi :)" "a" )
// 10. Cunki 10 eded 'a' var.

// const symbolCounterV1 = (text, symbol) => {
//     result = 0;
//     for (let i = 0; i <= text.length; i++) {
//         if (text[i] === symbol) {
//             result++
//         }
//     }
//     return result
// }
// console.log(symbolCounterV1("sAlam menim adim renatdir, men javascriptde nifret edirem, zarafat edirem o benim tek askimdi :)", "a"));


// ---------------------------------------------------------------------------------------------------------------------------------------


// symbolCounter("sAlam menim adim renatdir, men javascriptde nifret edirem, zarafat edirem o benim tek askimdi :)" "a" )
// 10. Cunki 10 eded 'a' var.


// const symbolCounterV1 = (text, symbol) => {
//     result = 0;
//     for (const herf of text) {
//         if (herf === symbol) {
//             result++
//         }
//     }
//     return result
// }
// console.log(symbolCounterV1("sAlam menim adim renatdir, men javascriptde nifret edirem, zarafat edirem o benim tek askimdi :)", "a"));

// ---------------------------------------------------------------------------------------------------------------------------------------

// const SymbolCounter = (text, symbol) => text.length - text.replaceAll(symbol, '').length;
// console.log(SymbolCounter("sAlam menim adim renatdir, men javascriptde nifret edirem, zarafat edirem o benim tek askimdi :)", "a"))



// Task1. Sozde saitlerin sayini tapan funksiya yaz (saitler: a,e,i,o,u)

const sayitFunction = (text) => {
    const vowels = 'aeiouAEIOU';
    let result = 0;

    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i])) {
            result++
        }
    }
    console.log(result);
    return result;
}

sayitFunction('Hello my friend. How are you?')



// Task2. Cumlede her sozun ilk herfini boyuden funksiya yaz. (salam abi necesen -> Salam Abi Necesen)

const boyukHerf = (big) => {
    let words = big.split(' ')
    let result = `${words[0].charAt(0).toUpperCase() + words[0].slice(1)} ${words[1].charAt(0).toUpperCase() + words[1].slice(1)} ${words[2].charAt(0).toUpperCase() + words[2].slice(1)}`
    console.log(result);
    return result
}
boyukHerf('zeynalov ruslan mehman')



// Task3. Cumlede sozlerin sayini tapan funksiya yazin. (heyy necesen -> 2 )

const CumledeSozlerinSayi = (str) => {
    let words = str.split(' ')
    let result = words.length;
    console.log(result);
    return result;
}
CumledeSozlerinSayi('Salam melim senin cox uzun saclarin var ')

// Task4. Verilen sozde eded varsa "Bu sozde eded var", yoxdursa "Bu sozde eded yoxdur" geri qaytarsin.

const SozdeEded = (number) => {
    for (let i = 0; i < number.length; i++) {
        if (number[i] >= '0' && number[i] <= '9') {
            return 'Bu sozde eded var'
        }
    }
    return 'Bu sozde eded yoxdur'
}
console.log(SozdeEded('Salam nece yasin var?'));
console.log(SozdeEded(' 15 yasim var'));




// Task5. Cumledeki butun bosluqlari silin. (salam abi necesen -> salamabinecesen)
