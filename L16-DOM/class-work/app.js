// // destructure
// const human = {
//     ad: 'Ruslan',
//     age: 23
// }

// function write(obj){
//     console.log(`${obj.ad} ${obj.age}`);
// }
// write(human) //Ruslan 23
// -----------------------------------------------------------------------------------

// destructure 2 
const human = {
    ad: 'Ruslan',
    age: 23,
    doing() { }
}

function write({ ad, age }) {
    console.log(`${ad} ${age}`);
}
write(human) //Ruslan 23
