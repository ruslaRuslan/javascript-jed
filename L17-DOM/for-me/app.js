// function User(name, age) {
//     this.name = name
//     this.age = age
// }

// asagidaki yuxardakiynen eynidi amma bezi usdunlukleri  var (obyekt yonlu proqramlasdirma )
// class User {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

// }
// const ali = new User('Ruslan', 12)
// console.log(ali.name); // Ruslan
// // constractor 
// // obyekt yaradilan constractor obyektsiz yaratmaq mumkun deyil

// -----------------------------------------------------------------------------------

// class User {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     tellName() {
//         console.log(`My name is ${this.name}`);
//     }
// }
// const ali = new User('Ruslan', 12)
// ali.tellName() //My name is Ruslan

// -----------------------------------------------------------------------------------


// class User {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     tellName = function () {
//         console.log(`My name is ${this.name}`);
//     }
// }
// const ali = new User('Ruslan', 12)
// ali.tellName() //My name is Ruslan

// -----------------------------------------------------------------------------------

// class Human {
//     constructor(name, surname, age) {
//         this.name = name
//         this.age = age
//         this.surname = surname
//     }
//     tellName = function () {
//         console.log(`My name is ${this.name}`);
//     }
//     hhd() {
//         console.log(`My dear, ${this.name} HBD to you`);
//         this.age++
//     }
// }
// class User extends Human {
//     constructor(username, surname, name, age, isOnline) {
//         super(name, surname, age)
//         this.username = username
//         this.isOnline = this.isOnline
//     }

// }
// const ali = new User('Ruslan', 'Zeynalov', 'Gahraman', 12, true)
// ali.tellName() //My name is Gahraman
// console.log(ali.age);//12
// ali.hhd()   //My dear, Gahraman HBD to you
// console.log(ali.age); //13

// -----------------------------------------------------------------------------------

// statik metodlar

// class Calculator {
//     constructor(a, b) {
//         this.a = a
//         this.b = b
//     }
//     sum() {
//         console.log(this.a + this.b);
//     }
// }
// const cal = new Calculator(12, 23)
// cal.sum() //35
// // tovsiye olunmayan kod

// -----------------------------------------------------------------------------------


// class Calculator {
//     static sum(a, b) {
//         console.log(a + b);
//     }
// }
// Calculator.sum(23, 12) // 35
// // tovsiye olunan kod

// -----------------------------------------------------------------------------------

// field: field-ler iki yere bolunur
// 1. instance-in fieldlari
// 2.class-in fieldlari

// class Calculator {

//     static sum(a, b) {
//         console.log(a + b);
//     }
//     test(){
//         console.log('test');
//     }
// }
// Calculator.sum(23, 12) // 35
// const a = new Calculator()
// a.test() //test
// -----------------------------------------------------------------------------------
// Array.prototype.isEmpty = function () {
//     return this.length === 0

// }
// const arr = [1, 4, 56, 7, 78, 3, 5, 6, 7]

// console.log(arr.isEmpty());


// const arr2 = []
// console.log(arr2.isEmpty()); //true

// -----------------------------------------------------------------------------------

// class NewArray extends Array {
//     isEmpty() {
//         return this.length === 0
//     }
// }

// const arr = new NewArray(1, 4, 56, 7, 78, 3, 5, 6, 7)

// console.log(arr.isEmpty()); //false


// const arr2 = new NewArray()
// console.log(arr2.isEmpty()); //true


// -----------------------------------------------------------------------------------


// Array.prototype.isEmpty = function () {
//     return this.length === 0
// }
// String.prototype.toCapitalCase = function () {
//     return this.replace(this[0], this[0].toUpperCase())
// }
// const ad = 'alion'
// console.log(ad.toCapitalCase());

// -----------------------------------------------------------------------------------

// let ad = prompt('adin daxil et:')
// try {
//     console.log(ad.toUpperCase());
// } catch (err) {
//     console.log('error cixdi');
//     console.log(err);
// } 
// console.log('heyat davam edir');

// -----------------------------------------------------------------------------------

// const hesab = {
//     parol: "Ruslan",
//     hesab: 7500
// }
// const pass = prompt('passwordu daxil et:')
// if (pass === hesab.parol){
//     console.log('pullar cixir'); 
//     console.log('kart cixir'); 
// }else{
//     throw new Error('parol sefdir!')
// }

// -----------------------------------------------------------------------------------

// const hesab = {
//     parol: "Ruslan",
//     hesab: 7500
// }
// const pass = prompt('passwordu daxil et:')

// try {
//     if (pass === hesab.parol) {
//         console.log('pullar cixir');
//     } else {
//         throw new Error('parol sefdir!')
//     }
// } catch (err) {
//     console.log(err.message);

// } finally {
//     console.log('kart cixir');
// }

// -----------------------------------------------------------------------------------

// window.onerror = function (message, url, line, col, error) {
//     console.log(message, url, line, col, error);
// }
// console.log(ad);