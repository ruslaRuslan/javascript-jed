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

let human = {
    ad: "ruslan",
    age: 23,
    enemy: null,
    doing: () => {
        console.log('salam');
    },
    friends: [
        "isa",
        "ramin",
        "sukran",
        "ali"
    ],
    bestFriends: [
        "sebine",
        "sada"
    ],

}
const strigJsonHuman = JSON.stringify(human)
console.log(strigJsonHuman);
