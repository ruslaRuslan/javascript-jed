
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

// // ___________________________________________________________________________________________________________________________________________________________________


// const getFullName = () => human.username + ' | ' + human.name

// console.log(getFullName());

// // ___________________________________________________________________________________________________________________________________________________________________


// const getAddress = () => human.address.street + ' |' + human.address.suite + ' ' + human.address.city + '  ' + human.address.zipcode + '  ' + human.address.geo

// console.log(getAddress())
// // ___________________________________________________________________________________________________________________________________________________________________


// const getGeoLocation = () => human.phone + ' | ' + human.website


// console.log(getGeoLocation())
// // ___________________________________________________________________________________________________________________________________________________________________

// const getPhone = () => human.phone

// console.log(getPhone())
// // ___________________________________________________________________________________________________________________________________________________________________


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




//-------------------------------------------------------------------------------------task-07---------------------------------------------------------------------------

// function deletedProperty(propertyName, obj) {
//     if (obj.hasOwnProperty(propertyName)) {
//         delete obj[propertyName];
//         console.log(`Property "${propertyName}" deleted succesfully.`);
//     } else {
//         console.log(`Property "${propertyName}" does not exist in the object.`);
//     }
// }

// const myObject = { ad: 'Ali', soyad: 'Isiyev', yas: 23 };

// deletedProperty('soyad', myObject);
// console.log(myObject)
// // ____________________________________________________________________________________________________________________________________________________________________



//-------------------------------------------------------------------------------------task-08---------------------------------------------------------------------------

// function countProperties(obj) {
//     return Object.keys(obj).length;
// }
// const myObject = { ad: 'Ali', soyad: 'Isiyev', yas: 23, cinsiyet: 'kisi' };
// const propertyCount = countProperties(myObject);
// console.log(`Object has ${propertyCount} properties.`);
// // ____________________________________________________________________________________________________________________________________________________________________


//-------------------------------------------------------------------------------------task-08---------------------------------------------------------------------------

// const countProperties = (obj) => {
//     let count = 0;
//     for (const key in obj) {
//         count++
//     }
//     return count
// }
// const myObject = { ad: 'Ali', soyad: 'Isiyev', yas: 23, cinsiyet: 'kisi', dosdu: 'Ruslan' };
// const propertyCount = countProperties(myObject);
// console.log(propertyCount)
// // ____________________________________________________________________________________________________________________________________________________________________


//-------------------------------------------------------------------------------------task-09---------------------------------------------------------------------------

// const calculator = {
//     ed1: 0,
//     ed2: 0,

//     read: function () {
//         this.ed1 = parseFloat(prompt("Birinci ededi daxil edin."));
//         this.ed2 = parseFloat(prompt("Ikinci ededi daxil edin."));
//     },

//     sum: function () {
//         console.log(`Summ: ${this.ed1 + this.ed2}`);
//     },

//     mul: function () {
//         console.log(`Summ: ${this.ed1 * this.ed2}`);
//     },

//     div: function () {
//         if (this.ed2 !== 0) {
//             console.log(`Summ: ${this.ed1 + this.ed2} `);
//         } else {
//             console.log(`Divide by zero!`)
//         }
//     },

//     sub: function () {
//         console.log(`Summ: ${this.ed1 - this.ed2}`);
//     }

// };

// calculator.read()
// calculator.sum()
// calculator.mul()
// calculator.div()
// calculator.sub()
// // ____________________________________________________________________________________________________________________________________________________________________



//-------------------------------------------------------------------------------------task-10---------------------------------------------------------------------------


// function Car(model, year, owner) {
//     this.model = model;
//     this.year = year;
//     this.owner = owner;
// }
// Car.prototype.drive = function () {
//     console.log(`${this.owner} nin ${this.year} model ${this.model} markalı mashın surur. `)
// };
// Car.prototype.brake = function () {
//     console.log(`${this.owner} nin ${this.year} model ${this.model} markali mashin deyandirilir`)
// };
// const myCar = new Car('Zapi', 2022, 'Ali');

// myCar.drive();
// myCar.brake();
// // ____________________________________________________________________________________________________________________________________________________________________









