// function quvvet(a, b) {
//     return Math.pow(a, b)   //eyni isi gorurler
//     // return a ** b        //eyni isi gorurler
// }
// console.log(quvvet(2, 5))
// _______________________________________________________________________________________________________________________________________


// const quvvet = Math.pow

// console.log(quvvet(2, 5))

// _______________________________________________________________________________________________________________________________________


// function quvvet() {
//     let ed1 = +prompt('ed1')
//     let ed2 = +prompt('ed2')
//     return Math.pow(ed1, ed2)

// }

// console.log(quvvet())

// _______________________________________________________________________________________________________________________________________




// const a = {
//     color: 'red',
//     name: 'Ruslan',
//     age: 12,
//     gender: true,
//     doing: function () {
//         console.log('Man=!true')
//     }

// }
// console.log(a)
// a.doing()
// console.log(a.name)
// console.log(a.color)
// console.log(a.age)


// _______________________________________________________________________________________________________________________________________



// let laptop = {
//     brand: 'Honor',
//     price: 4000
// }

// // laptop.price=laptop.price-200    //eyni isdiyir
// // laptop.price-=200                //eyni isdiyir
// console.log(laptop);

// _______________________________________________________________________________________________________________________________________





// let laptop = {
//     brand: 'Honor',
//     price: 4000,
//     reng: 'qirmizi',
// }

// delete laptop.reng

// console.log(laptop.reng)

// _______________________________________________________________________________________________________________________________________





// let laptop = {
//     brand: 'Honor',
//     price: 4000,
//     reng: 'qirmizi',
// }

// laptop.car = 'zapi'
// laptop.car = 'volvo'
// delete laptop.car
// console.log(laptop)


// _______________________________________________________________________________________________________________________________________


// let human = {
//     name: 'Ruslan',
//     age: 23,
//     car : 'BMW',
//     work: 'programmer',

// }

// for (let key in human) {
//     console.log(`${key} - ${human[key]}`)
// }

// _______________________________________________________________________________________________________________________________________




// let sadici = {
//     name: 'Ruslan',
//     age: 23,
//     car : 'BMW',
//     price: 50000,
// }

// let key = prompt('hansi propertini gormek isdeyirsen?')
// console.log(sadici[key])

// _______________________________________________________________________________________________________________________________________






// let gender = {
//     M: 'Mr. ',
//     W: 'Mrs. ',
// }

// let cins = prompt(`M yoxsa W?`);
// let ad = prompt('adini daxil et');

// console.log(`Hi, ${gender[cins]} ${ad}`)

// _______________________________________________________________________________________________________________________________________


// let gender = {
//     M: 'Mr. ',
//     W: 'Mrs. ',
// }

// function formal(name, cins) {
//     console.log(`Hi, ${gender[cins]} ${name}`)
// }

// formal('Ruslan', 'M')

// _______________________________________________________________________________________________________________________________________


// const formal = {
//     man: function (ad, age) {
//         console.log(`Hi, Mr. ${ad} You're ${age}`);
//     },
//     woman: function (ad) {
//         console.log(`Hi, Mrs. ${ad}`);
//     }

// }

// formal.man('Ruslan', '23')
// formal.woman('Alina')


// _______________________________________________________________________________________________________________________________________



// ---------------------------------------------------------VideoRecordPractice-----------------------------------------------------------

const logoGreetingV2 = (userName) => {
    console.log(`${userName} is a js senior`)
}
logoGreetingV2('Ruslan')
// _______________________________________________________________________________________________________________________________________


const logoGreetingV3 = (userName, job) => {
    console.log(`${userName} is a ${job}`)
}

logoGreetingV3('Ruslan', 'SENIOR JS')
// _______________________________________________________________________________________________________________________________________

// const andWithZero = () => {
//     for (let i = 100; i <= 1000; i++) {
//         if (i % 10 === 0) {
//             console.log(i)
//         }
//     }
// }
// andWithZero()


// _______________________________________________________________________________________________________________________________________


// let c = 0
// function andWithZero() {
//     for (let i = 100; i <= 1000; i+=10) {
//         c++
//         if (i % 10 === 0) {
//             console.log(i)
//         }
//     }
// }
// andWithZero()

// _______________________________________________________________________________________________________________________________________

// let num1 = 20;
// let sum = 0;
// let ikiBolunen = 0;

// let j = 0;
// for (i = 100; i <= 200; i++) {
//     j++
//     if (i % num1 === 0) {
//         ikiBolunen = i
//         break;
//     }
// }

// for (let i = ikiBolunen; i <= 999; i = i + num1) {
//     j++
//    console.log(i)
// }
// console.log(j)
// _______________________________________________________________________________________________________________________________________



function whoAmi(userType, name) {
    switch (userType) {
        case 'user':
            return `Hey, user, you're ${name}`;
        case 'admin':
            return `Mr. admin you're ${name}`;
        case 'guest':
            return `${name} idik you`;
        default:
            return `What the hell!`
    }
}

console.log(whoAmi('user', 'Ruslan'))
console.log(whoAmi('admin', 'Ruslan'))
console.log(whoAmi('guest', 'Ruslan'))
console.log(whoAmi('testiko', 'Ruslan'))





