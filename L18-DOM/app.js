// setTimeout(() => {

//     console.log('a')
// }, 1);
// console.log('b')
// console.log('c')

// asinxrom
// -------------------------------------------------------------------------------------------------------------

// asinxromun icrasi
// Promise -> soz vermek

// 1. pending -> gozleme
// 2. rejected-> imtina
// 3.fulffilled -> yerine yetirildi

// endpoint*, api, url, link
// const url = `https://jsonplaceholder.typicode.com/users`
// const data = fetch(url)
// console.log(data);
// bu promise-dir burda isimizi hell etmir

// -------------------------------------------------------------------------------------------------------------


// // asinxromun icrasi
// // Promise -> soz vermek

// // 1. pending -> gozleme
// // 2. rejected-> imtina
// // 3.fulffilled -> yerine yetirildi

// // endpoint*, api, url, link
// const url = `https://jsonplaceholder.typicode.com/users`
// fetch(url)
//     .then((respons) => {
//         console.log(respons);
//     })
//     .catch((err) => {
//         console.log('err', err);
//     })
// console.log('ne?');
// // bu promise-dir 

// -------------------------------------------------------------------------------------------------------------


// // asinxromun icrasi
// // Promise -> soz vermek

// // 1. pending -> gozleme
// // 2. rejected-> imtina
// // 3.fulffilled -> yerine yetirildi

// // endpoint*, api, url, link
// const url = `https://jsonplaceholder.typicode.com/users`
// // promise chaining -> promis zenciri
// fetch(url)
//     .then((respons) => {
//         return respons.json()
//     })
//     .then((data) => {
//         console.log(data);
//         return 'Ruslan'
//     })
//     .then((ad)=>{
//         console.log(ad);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// console.log('ne?');

// asinxromun icrasi
// Promise -> soz vermek

// 1. pending -> gozleme
// 2. rejected-> imtina
// 3.fulffilled -> yerine yetirildi

// -------------------------------------------------------------------------------------------------------------


