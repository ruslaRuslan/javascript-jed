
// Возвращает количество гласных в заданной строке.

// Мы будем считать a, e, i, гласными для этой Ката (но не o) .uy

// Входная строка будет состоять только из строчных букв и/или пробелов.
let user = prompt('напишите слово или предложение (будет считать гласные a, e, i)')
const countVowels = (words) => {
    let vowels = ['a', 'e', 'i']
    let result = 0
    for (let char of words) {
        if (vowels.includes(char)) {
            result++
        }
    }
    return result
}
console.log( 'Клочество гласных в строке:', countVowels( `${user}`));