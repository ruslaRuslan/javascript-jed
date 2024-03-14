// data format ->
// email ruslan@gmail.com
// password 1234

// xml
// <email> ruslan@gmail.com </email>
// <password> 1234 </password>

// JSON -> javascript object notation

// {
// "email": "ruslan@gmail.com"
// "password": 1234
// }
// bunlari yazmasaqda olar amma JSON-da yazmaliyiq

// ruslan
// [
// (email) ~ ('ruslan@gmail.com'),     
// ]

//------------------------------------------------------------------------------------------------------------- 

// let human = {
//     ad: "ruslan",
//     age: 23,
//     enemy: undefined
// }
// const strigJsonHuman = JSON.stringify(human)
// console.log(strigJsonHuman);

//------------------------------------------------------------------------------------------------------------- 


// let human = {
//     ad: "ruslan",
//     age: 23,
//     enemy: null
// }
// const strigJsonHuman = JSON.stringify(human)
// console.log(strigJsonHuman);

//------------------------------------------------------------------------------------------------------------- 

// let human = {
//     ad: "ruslan",
//     age: 23,
//     enemy: null,
//     doing: () => {
//         console.log('salam');
//     }

// }
// const strigJsonHuman = JSON.stringify(human)
// console.log(strigJsonHuman);

//------------------------------------------------------------------------------------------------------------- 

// let human = {
//     ad: "ruslan",
//     age: 23,
//     enemy: null,
//     doing: () => {
//         console.log('salam');
//     },
//     friends: [
//         "isa",
//         "ramin",
//         "sukran",
//         "ali"
//     ],
//     bestFriends: [
//         "sebine",
//         "sada"
//     ],

// }
// const strigJsonHuman = JSON.stringify(human)
// console.log(strigJsonHuman);

//------------------------------------------------------------------------------------------------------------- 

// let human = {
//     ad: "ruslan",
//     age: 23,
//     enemy: null,
//     doing: () => {
//         console.log('salam');
//     },
//     friends: [
//         "isa",
//         "ramin",
//         "sukran",
//         "ali"
//     ],
//     bestFriends: [
//         "sebine",
//         "sada"
//     ],
// }
// const strigJsonHuman = JSON.stringify(human)

// const obj = JSON.parse(strigJsonHuman)

// console.log(obj);

//------------------------------------------------------------------------------------------------------------- 

// const url = `https://jsonplaceholder.typicode.com/users/`

// fetch(url).then((respons) => {
//     console.log(respons);
// })

//------------------------------------------------------------------------------------------------------------- 


// const url = `https://jsonplaceholder.typicode.com/users/`

// fetch(url).then((respons) => {
//     return respons.json()
// })
//     .then((users) => {
//         console.log(users);
//         users.forEach((user) => {
//             document.write(
//                 `<h1> ${user.id}.${user.name}</h1>
//                  <h2>${user.username}</h2>
//                  <p>${user.company.name}</p>
//                  <hr/>
//                 `)

//         })
//     })


//------------------------------------------------------------------------------------------------------------- 



const url = `https://jsonplaceholder.typicode.com/users/`

fetch(url).then((respons) => respons.json())
    .then((users) => {
        console.log(users);
        users.forEach((user) => {
            document.write(
                `<h1> ${user.id}.${user.name}</h1>
                 <h2>${user.username}</h2>
                 <p>${user.company.name}</p>
                 <hr/>
                `)

        })
    })
