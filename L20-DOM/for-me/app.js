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

// const url = `https://jsonplaceholder.typicode.com/users`
// data = []
// axios.get(url).then((response)=>{
//     console.log(response.data[0]);
//     data = response.data
// })

// -----------------------------------------------------------------------------------------------------------

// const promise = new Promise((res, rej) => {
//     res('ruslan')
// })
// console.log(promise);

// -----------------------------------------------------------------------------------------------------------

// const promise = new Promise((res, rej) => {
//     res('ruslan')
// })
// promise.then((pakize)=>{
//     console.log(pakize);
// })

// -----------------------------------------------------------------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//         resolve('backendden data')
//         reject('ne error?!')
// })
// promise
//     .then((pakize) => {
//         console.log(pakize);
//     })
//     .catch((err) => {
//         console.log('erroru tapdim');
//         console.log(err);
//     })

// -----------------------------------------------------------------------------------------------------------

// async function a() {
//     return 'salam';
// }
// const text = a()
// console.log(text);

// -----------------------------------------------------------------------------------------------------------


// const url = `https://jsonplaceholder.typicode.com/users`
// async function a() {
//     const respons = await axios.get(url)
//     console.log(respons.data);
// }
// a()
// console.log('nee!');


// -----------------------------------------------------------------------------------------------------------


// const url = `https://jsonplaceholder.typicode.com/users`
// async function a() {
//     const { data } = await axios.get(url)
//     console.log(data);
// }
// a()
// console.log('nee!');

// -----------------------------------------------------------------------------------------------------------

const url = `https://jsonplaceholder.typicode.com/users`
async function a() {
    const { data } = await axios.get(url)
   return data
}
async function writeData(){
    const data = await a()
    console.log(data);
}
writeData()


console.log('nee!');

