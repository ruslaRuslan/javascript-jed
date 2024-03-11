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

class Calculator {
    static sum(a, b) {
        console.log(a + b);
    }
}
Calculator.sum(23, 12) // 35
// tovsiye olunan kod