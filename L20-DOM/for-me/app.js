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

const url = `https://jsonplaceholder.typicode.com/users`
fetch(url)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log('error', error);
    })
console.log('ne?'); // "ne?" asinxron-du
// resolve -> hell etmek
