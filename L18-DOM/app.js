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


// // endpoint*, api, url, link
// const url = `https://jsonplaceholder.typicode.com/users`

// axios.get(url).then((resp) => {
// console.log(resp);
// })

// -------------------------------------------------------------------------------------------------------------



// endpoint*, api, url, link
// const url = `https://jsonplaceholder.typicode.com/users`

// axios.get(url).then((resp) => {
// console.log(resp.data);
// })

// -------------------------------------------------------------------------------------------------------------



// endpoint*, api, url, link
// const url = `https://jsonplaceholder.typicode.com/users`

// axios.get(url).then(({data}) => {
// console.log(data);
// })

// -------------------------------------------------------------------------------------------------------------

// endpoint*, api, url, link
// const url = `https://jsonplaceholder.typicode.com/users`

// axios.get(url).then((response) => {
//     console.log(response.data[0]);
// })

// -------------------------------------------------------------------------------------------------------------

// promise yaratmaq
// const promise = new Promise((res, rej) => {
//     res('salam')
// })
// console.log(promise);
// -------------------------------------------------------------------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//     resolve('salam')
// })
// promise.then((pakize) => {
//     console.log(pakize);
// })

// -------------------------------------------------------------------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('backendden data geldi')
//     }, 1000)
//     setTimeout(() => {
//         reject('ne eror!')
//     }, 400);
// })
// promise.then((pakize) => {
//     console.log(pakize);
// }).catch((eror) => {
//     console.log('eroru tapdim ve tutdum');
//     console.log(eror);
// })


// -------------------------------------------------------------------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//     resolve('backendden data geldi')
//     reject('ne eror!')
// })
// promise
//     .then((pakize) => {
//         console.log(pakize);
//     }).catch((eror) => {
//         console.log('eroru tapdim ve tutdum');
//         console.log(eror);
//     })

// -------------------------------------------------------------------------------------------------------------

// async function a(){
//     console.log('Ruslan');
// }
// a() //Ruslan
// console.log('SALAMLAR OLSUN'); 

// -------------------------------------------------------------------------------------------------------------

// async function a(){
//     return 'Ruslan'
// }
// const txt = a()
// console.log(txt); //promise olacax

// -------------------------------------------------------------------------------------------------------------

// axios.get(url).then((resp)=>{}) asaqidakiler bularin daha yaxsi formasidi

// function a() {
//     setTimeout(() => {
//         console.log('Ruslan');
//     }, 100);
// }
// a()

// console.log('SALAMLAR');

// -------------------------------------------------------------------------------------------------------------

// axios.get(url).then((resp)=>{}) asaqidakiler bularin daha yaxsi formasidi

const url = `https://jsonplaceholder.typicode.com/users`

async function a() {
    const {data} = await axios.get(url)
    console.log(data);
}
a()

console.log('neee');