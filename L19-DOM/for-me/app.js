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

// const url = `https://www.ruslan.com`
// fetch(url)
//     .then((respons) => respons.json())
//     .then((data) => console.log(data))
//     .catch((err) => {
//         document.body.innerHTML += ('<p style="font-size: 2rem; color: red;">error cixdi</p>')
//     })

// ________________________________________________________________________________________________________

// const promiseObject = new Promise((resolve, reject)=>{
//     resolve('data geldi')
// })
// console.log(promiseObject);

// ________________________________________________________________________________________________________

// const promiseObject = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('data geldi')
//     }, 1000);
// })
// console.log(promiseObject);

// ________________________________________________________________________________________________________

// const promiseObject = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('data geldi')
//     }, 1000);
//     setTimeout(() => {
//         reject('internet erroru')
//     }, 1500);
// })
// promiseObject
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// ________________________________________________________________________________________________________


// const promise = axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
// console.log(promise);

// ________________________________________________________________________________________________________

// axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
//     .then((respons) => {
//         console.log(respons);
//     })

// ________________________________________________________________________________________________________

// axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
//     .then((respons) => {
//         console.log(respons.data.meals[0]);
//     })

// ________________________________________________________________________________________________________

// axios.get('https://www.themea.com/api/json/v1/1/random.php')
//     .then((respons) => {
//         console.log(respons.data.meals[0]);
//     })
//     .catch(() => {
//         console.log('sefdi');
//     })

// ________________________________________________________________________________________________________


// axios.get('https://www.themea.com/api/json/v1/1/random.php')
//     .then((respons) => {
//         console.log(respons.data.meals[0]);
//     })
//     setTimeout(() => {
//         console.log('proqrama davam');
//     }, 2000);
// ________________________________________________________________________________________________________


// axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
//     .then((respons) => {
//         console.log(respons.data.meals[0]);
//     })
//     .catch(() => {
//         console.log('neyniyisen?!');
//     })
//     .then(() => {
//         console.log('proqrama davam');
//     })
//     .then(() => {
//         console.log('proqrama davam2');
//     })
// ________________________________________________________________________________________________________

// let dataEsas = ''
// axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
//     .then((respons) => {
//         const data = respons.data.meals[0];
//         dataEsas = data
//     })
//     .catch(() => {
//         console.log('neyniyisen?!');
//     })
//     .then(() => {
//         console.log('proqrama davam');
//     })
//     .then(() => {
//         console.log('proqrama davam2');
//     })
//     .then(() => {
//         console.log(dataEsas);
//     })



// ________________________________________________________________________________________________________

// function writeData(data) {
//     document.body.innerHTML += data.strMeal

// }

// axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
//     .then((respons) => {
//         const data = respons.data.meals[0];
//         writeData(data)
//     })
//     .catch(() => {
//         console.log('neyniyisen?!');
//     })
//     .then(() => {
//         console.log('proqrama davam');
//     })
//     .then(() => {
//         console.log('proqrama davam2');
//     })

// ________________________________________________________________________________________________________



    function writeData(data) {
        document.body.innerHTML += data.strMeal
    
    }
    
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((respons) => {
            const data = respons.data.meals[0];
            writeData(data)
        })
        .catch(() => {
            console.log('neyniyisen?!');
        })
        .then((ad) => {
            console.log('proqrama davam', ad);
        })
       