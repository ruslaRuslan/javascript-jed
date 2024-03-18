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

const url = `https://www.themealdb.com/api/json/v1/1/random.php`
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const yemek = data.meals[0]
        console.log(yemek);
    })