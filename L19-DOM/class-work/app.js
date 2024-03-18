// sinxrom
// A
// B
// C
// asinxron


// asinxron 1 ve 3 / sinxrom ise 1, 2 ve 3 ardicil

// 1. xemir
// 2. yayirsan, icerisine cem
// 3.sobani qizmaqa qoyusan - bloklanmaq

// sinxrom kodlar biri birilerini bloklayirlar...
// asinxrom kodlar biri birilerini bloklamirlar



// for (let i = 0; i < 100; i++) {
//     let j = i ** i + i ** i
// }
// console.log('salam'); //belede "salam" isliyecek



// let j = 0
// for (let i = 0; i < 100000000; i++) {
//     j += i ** i + i ** i
// }
// console.log(j);
// console.log('salam'); // "salam" cixmayacaq cunki sonsuz dovr edecek, "salam" bloklanip
// ------------------------------------------------------------------------------------------------------

// asinxrom kodlar promise-ile olur (asinxrom-un promise hallari)

// Promise [soz vermek] 
// soz vermeyin nece hali var:
// Ruslan saat 3-cu gun saat 12-de dersimiz var
// 1. hemin vaxta qeder gozleyisen -> pending
// 2. sozunu yerine yetirdi -> fulfilled
// 3. iptal olundu -> rejected

// Promise-nin 3 hali var  pending, fulfilled, rejected

// const url = `https://jsonplaceholder.typicode.com/users` // endpoint
// let data = fetch(url)
// console.log(data);

// _____________________________________________________________________________________________________________

// const url = `https://jsonplaceholder.typicode.com/users` // endpoint
// fetch(url).then((respons) => {
// console.log(respons);
// })

// _____________________________________________________________________________________________________________


// const url = `https://jsonplaceholder.typicode.com/users` // endpoint
// fetch(url).then((respons) => {
// console.log(respons.json());
// })

// _____________________________________________________________________________________________________________

// const url = `https://jsonplaceholder.typicode.com/users` // endpoint
// fetch(url).then((respons) => {
//     respons.json().then((data) => {
// console.log(data);
//     });
// }) // tovsiye olunmayan yol

// _____________________________________________________________________________________________________________


// const url = `https://jsonplaceholder.typicode.com/users` // endpoint
// fetch(url).then((respons) => {
//     respons.json()
//         .then((data) => {
//             console.log(data);
//         });
// }) // tovsiye olunmayan yol


// _____________________________________________________________________________________________________________

// const url = `https://jsonplaceholder.typicode.com/users`
// fetch(url)
//     .then(() => {
//         return 'RUSLAN'
//     })
//     .then((ad) => {
//         console.log(ad); // RUSLAN
//         return 12 + 23
//     })
//     .then((cem) => {
//         console.log(cem); // 35
//     })
// // tovsiye olunan kod 

// _____________________________________________________________________________________________________________


// const url = `https://jsonplaceholder.typicode.com/users` // endpoint
// fetch(url)
//     .then((respons) => respons.json())
//     .then((data) => console.log(data));
// // Promise-leri .then ile resolve edirik (resolve -> yani hell etmek cavabi gozlemek )

// _____________________________________________________________________________________________________________

// const url = `https://jsonplaceholder.typicode.com/users` // endpoint
// const data = axios.get(url)
// console.log(data);

// _____________________________________________________________________________________________________________


const url = `https://jsonplaceholder.typicode.com/users` // endpoint
axios.get(url)
    .then((response) => {
        console.log(response);
    })
// response bir obyektdi

//_____________________________________________________________________________________________________________
