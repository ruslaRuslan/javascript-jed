// setTimeout(() => {
//     console.log('a');
// }, 0);
// console.log('b');
// console.log('c');
// sinxrom proqramlasdirma

// -----------------------------------------------------------------------------------------------------------

// Promise -> soz vermek
// 1. pending   -> gozleme
// 2. rejected  -> imtina
// 3. fulfilled -> yerine yetirildi

// endpoint *, api, url, link
// const url = `https://jsonplaceholder.typicode.com/users`
// const data = fetch(url)
// console.log(data);
// -----------------------------------------------------------------------------------------------------------

// const url = `https://jsonplaceholder.typicode.com/users`
// fetch(url)
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log('error', error);
//     })
// console.log('ne?'); // "ne?" asinxron-du
// // resolve -> hell etmek

// -----------------------------------------------------------------------------------------------------------


// const url = `https://jsonplaceholder.typicode.com/users`
// // promise chaning
// fetch(url)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log('error', error);
//     })
// console.log('ne?'); // "ne?" asinxron-du
// // resolve -> hell etmek

// -----------------------------------------------------------------------------------------------------------

// const url = `https://jsonplaceholder.typicode.com/users`
// // promise chaning
// fetch(url)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//         return 'Ruslan'
//     })
//     .then((ad) => {
//         console.log(ad);
//     })
//     .catch((error) => {
//         console.log('error', error);
//     })
// console.log('ne?'); // "ne?" asinxron-du
// // resolve -> hell etmek

// -----------------------------------------------------------------------------------------------------------

// const url = `https://jsonplaceholder.typicode.com/users`
// // promise chaning
// fetch(url)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//         // return 'Ruslan'
//     })
//     .then((pakize) => {
//         console.log(pakize);
//     })
//     .catch((error) => {
//         console.log('error', error);
//     })
// console.log('ne?'); // "ne?" asinxron-du
// // resolve -> hell etmek

// -----------------------------------------------------------------------------------------------------------


// const url = `https://jsonplaceholder.typicode.com/users`

// axios.get(url).then((respons)=>{
//     console.log(respons);
// })

// -----------------------------------------------------------------------------------------------------------

// const url = `https://jsonplaceholder.typicode.com/users`

// axios.get(url).then((respons)=>{
//     console.log(respons.data);
// })

// -----------------------------------------------------------------------------------------------------------

// const url = `https://jsonplaceholder.typicode.com/users`

// axios.get(url).then(({data})=>{
//     console.log(data);
// })

// -----------------------------------------------------------------------------------------------------------

const url = `https://jsonplaceholder.typicode.com/users`
data = []
axios.get(url).then((response)=>{
    console.log(response.data[0]);
    data = response.data
})

