// // json file istifade
// // json stringify, parse
// // fetch

// const obj = {
//     ad: 'Ruslan',
//     yas: 23
// }
// JSON.stringify(obj)
// const json_variant = `{"ad":"Ruslan", "yas":23}`

// // clear clarify
// // minimum minify
// // sring stringify
// ---------------------------------------------------------------------------------------------------------



// json file istifade
// json stringify, parse
// fetch

// const url = `https://www.themealdb.com/api/json/v1/1/random.php`
// fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     })

//_________________________________________________________________________________________________________

// const url = `https://www.themealdb.com/api/json/v1/1/random.php`
// fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         const yemek = data.meals[0]
//         console.log(yemek);
//     })

//_________________________________________________________________________________________________________

// console.log('A'); //A
// console.log('B'); //B
// console.log('C'); //C
// sinxron proqramlasdirma -> synchronous programming

//_________________________________________________________________________________________________________

// asinxron proqramlasdirma -> asynchronous programming

// console.log('A');
// setTimeout(() => {
//     console.log('B');
// }, 1000); console.log('C');

//_________________________________________________________________________________________________________

// ayin 22-si saat 2-de atciliqda
// pending -> gozleme
// fulfilled -> yerine yetirildi  
// reject -> iptal edildi

// const url = `https://www.themealdb.com/api/json/v1/1/random.php`
// const data = fetch(url)
// console.log(data);

//_________________________________________________________________________________________________________

// Promise -> soz vermek
// const url = `https://www.themealdb.com/api/json/v1/1/random.php`

// fetch(url).then((respons) => respons.json()).then((data) => console.log(data))
// fetch().then(() => { }).catch(() => { }).finally()
// console.log('Ruslan')

// ________________________________________________________________________________________________________

const url = `https://www.themealdb.com/api/json/v1/1/random.php`

fetch(url).then((respons) => respons.json()).then((data) => console.log(data))
console.log('Ruslan')
