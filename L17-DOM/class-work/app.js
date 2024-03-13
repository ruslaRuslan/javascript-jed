// eror handling, try/catch, class
// const ali = {
//     ad: 'ali',
//     age: 24
// }

// const ruslan = {
//     ad: 'ruslan',
//     age: 23
// }
// const isa = {
//     ad: 'ali',
//     age: 26
// }
// yuxaridakilerin evezine asagidakileri yazmaz olar

// function createHuman(ad, age) {
//     const obj = {
//         ad,
//         age
//     }
//     return obj
// }
// const ali = createHuman('ali', 21)

// -------------------------------------------------------------------------------------------------------------

// function createHuman(ad, age) {
//     const obj = {
//         ad,
//         age
//     }
//     return obj
// }
// const ali = createHuman('ali', 21)

// OOP -> object oriented programming (OYP)-> obyekt yonlu proqramlasdirma
// class, object (blueprint) -> qelibi

// ruslan, ali -> Insan
// toplan -> It

// -------------------------------------------------------------------------------------------------------------

class Human {
    constructor(ad, age, job = 'jobless') {
        this.ad = ad //this -> bu class-dan torenen yeni obyekti gosterir
        this.age = age
        this.job = job
        this.doing = () => {
            console.log(`${ad} is coding...`);
        }
    }

}
// OOP -> class hecnedir, class her seydir!

const ali = new Human('ali', 12, 'developer')
const ruslan = new Human('ruslan', 23, 'student')
const ramin = new Human('ramin', 14)

console.log(ali); // Human {ad: 'ali', age: 12, doing: ƒ}
ali.doing() // ali is coding...
console.log(ruslan); //// Human {ad: 'ruslan', age: 23, doing: ƒ}
ruslan.doing() // ruslan is coding...
console.log(ramin) //Human {ad: 'ramin', age: 14, job: 'jobless', doing: ƒ}
// constructor -> class-dan obyekt yaradir!

// yazdim yazmadim her constuctor-un class-i olacax class-iz constructor yoxdur! (constructor-suz class yoxdur, constructor-suz class hecnedir)

