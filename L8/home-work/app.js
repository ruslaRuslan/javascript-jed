
//-------------------------------------------------------------------------------------task-01--------------------------------------------------------------------------- 
// function prop2Taker(obj) { 
//         return obj['prop-2']; 
// }

// console.log(prop2Taker({ ad: 1, 'prop-2': 2 }));  
// console.log(prop2Taker({ 'prop-2': 'two', prop: 'test' }));

// ______________________________________________________________________________________________________________________________________________________________________


//-------------------------------------------------------------------------------------task-02--------------------------------------------------------------------------- 

// propertyTaker = (obj, propertyName) => obj[propertyName];


// console.log(propertyTaker({ country: 'Japan', continent: 'Asia' }, 'continent'));
// console.log(propertyTaker({ country: 'Sweden', continent: 'Europe' }, 'country'));
// console.log(propertyTaker({ name: 'Ali', age: 12 }, 'name'));

// ______________________________________________________________________________________________________________________________________________________________________




//-------------------------------------------------------------------------------------task-03--------------------------------------------------------------------------- 

//  existAndTruthy = (obj, propertyName) => propertyName in obj && obj[propertyName] 


// console.log(existAndTruthy({ a: 1, b: 2, c: 3 }, 'b'));
// console.log(existAndTruthy({ x: 'a', y: null, z: 'c' }, 'y'))
// console.log(existAndTruthy({ x: 'a', b: 'b', z: undefined, }, 'z'))

// ______________________________________________________________________________________________________________________________________________________________________



//-------------------------------------------------------------------------------------task-04--------------------------------------------------------------------------- 


// const human = {
//     "id": 1,

//     "name": "Leanne Graham",

//     "username": "Bret",

//     "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//         }
//     },

//     "phone": "1-770-736-8031 x56442",

//     "website": "hildegard.org",

//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }
// }


// const getID = () => human.id
// console.log(getID());

// // _________________________________________________________________________________________________________________________________________________________________


// const getFullName = () => human.username + ' | ' + human.name

// console.log(getFullName());

// // _________________________________________________________________________________________________________________________________________________________________


// const getAddress = () => human.address.street + ' |' + human.address.suite + ' ' + human.address.city + '  ' + human.address.zipcode + '  ' + human.address.geo

// console.log(getAddress())
// // _________________________________________________________________________________________________________________________________________________________________


// const getGeoLocation = () => human.phone + ' | ' + human.website


// console.log(getGeoLocation())
// // _________________________________________________________________________________________________________________________________________________________________

// const getPhone = () => human.phone

// console.log(getPhone())
// // _________________________________________________________________________________________________________________________________________________________________


// const getCompanyInfo = () => human.company.name + ' | ' + human.company.catchPhrase + ' | ' + human.company.bs

// console.log(getCompanyInfo())
// // ___________________________________________________________________________________________________________________________________________________________________




//-------------------------------------------------------------------------------------task-05--------------------------------------------------------------------------- 
// const divideByNumber = (divisor) =>  number =>  number / divisor;
// const divideByFive = divideByNumber(5);
// console.log(divideByFive(5))
// console.log(divideByFive(10))
// // ___________________________________________________________________________________________________________________________________________________________________


//-------------------------------------------------------------------------------------task-06--------------------------------------------------------------------------- 

// let obj = { ad: 'Ali' }
// let obj2 = { ...obj }
// obj.ad = 'Ruslan'
// console.log(obj.ad)
// console.log(obj2.ad)

// // ____________________________________________________________________________________________________________________________________________________________________













