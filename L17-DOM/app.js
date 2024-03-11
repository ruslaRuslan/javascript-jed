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

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    tellName() {
        console.log(`My name is ${this.name}`);
    }
}
const ali = new User('Ruslan', 12)
ali.tellName() //My name is Ruslan
