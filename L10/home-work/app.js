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

// ----------------------------------------------------------------------------------------------------------------------------------------

//capitalize(str) -> alion -=> Alion

// const capitalize = (str) => {
//     let result = str.charAt(0).toUpperCase() + str.slice(1)
//     console.log(result);
//     return result;
// }
// capitalize('alion');


// ----------------------------------------------------------------------------------------------------------------------------------------




// // snakeToKebab(str) -=> SNAKE_CASE to kebab-case -=> BU_TEST_UCUNDUR -> bu-test-ucundur

// // nameFormat(str) —> Alion GreenHeart-=> Alion G.

// const nameFormat = (str) => {
//     const words = str.split(' ');
//         const result = `${words[0]} ${words[1].charAt(0)}`;
//         console.log(result);
//         return result;
// }

// nameFormat('Alion GreenHeart ');
// nameFormat('Ruslan Zeynalov');
// nameFormat('Gahraman Zeynalov');
// nameFormat('John');


// Funksiya yaradin, ilk characterimizi deyisek: ilkHerfiDeyis(soz, ilkHerf)
// ilkHerfiDeyis('alion', "A") // Alion

// ilkHerfiDeyis = (word, onceWord) => {
//     const newWord = onceWord + word.slice(1);
//     console.log(newWord);
//     return newWord;
// }
// ilkHerfiDeyis('ruslan', 'R')


// ———————————
// 1. Write a JavaScript function to split a sentence (JS funksiyasi yazin, cumle verilir, cumledeki sozleri ayirsin).

function splitSentence(sentence) {
    const wordsArray = sentence.split(' ');
    console.log(wordsArray);
    return wordsArray;
}
splitSentence('Write a JavaScript function to split a sentence (JS funksiyasi yazin, cumle verilir, cumledeki sozleri ayirsin).');

// 2. Write a JavaScript function to convert a string in abbreviated form. (Alion GreenHeart -> Alion G.)
// 3. removeCharacterFromString("Alion","A") -> "lion" . bele bir funksiya yazin, sozden character silme. Alion sozu verdik ve A characteri verdik, sozden A-ni sildi.
// 4. verify gmail address. (gmail addressleri sonu @gmail.com ile bitmelidir, ve ondan evvel en azi 5 simvol olmalidir. abcdf@gmail.com meselen)

// —————————
// 1. Normalda Bazar ertesinden Cumeye qeder ders olur. Ele bir funksiya qurun ki, bize alert-le desin bu gun derse getmeliyik ya yox.
// 2. Bu gunki tarixi document.write ile html-e yazin.
// 3. *ADVANCED* Bu gun heftenin hansi gunudur, onun adini avtomatik document-e yazin. (obyektlerden istifade ede bilersiniz)
// 4. *ADVANCED* Bu ay hansi aydir adini document-e yazin. (obyektden istifade ede bilersiniz)
// 5. Ezrail proqrami: user-den yasini sorusun. Ve omrune nece il qalib ona alert-le bildirin. Tutaq ki, insanlar ucun maksimum yas 77 ildir. (meselen, 60 yas yazsa 17 ili qalib 🥺)
// 6. Userin yasini sorusun. ve bele bir statistika yazin: doguldugu vaxtdan bu gune nece il, ay, gun, saat, deqiqe, saniye kecib. (heresini ayrica) meselen,
// kecen il sayi: 23,
// kecen ay sayi: 234
// kecen gun sayi: 6974
// ve s.