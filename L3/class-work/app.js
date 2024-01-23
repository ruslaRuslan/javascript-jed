// let a = 1;
// let b = 2;
// let c = 12 + (b = 6 + (a = 9 - b))
// alert(a); // 7
// alert(b) // 13
// alert(c); // 25




// let a = 6
// a = 12 - (a += 8)
// a//




// alert(5 > 4); // true +
// alert("apple" > "pineapple"); // false +
// alert("2" > "12"); // true +
// alert(undefined == null); // NaN -
// alert(undefined === null); // NaN - 
// alert(null == " 0 "); // false +
// alert(null === +"0"); // false +



// let name = prompt("Ad yazin");
// if(name == 'Ruslan'){
//     console.log("bu menem Ruslan")
// }
// else{
//     console.log("bu men deylem. Men Ruslanam")
// }


// let login = prompt('Введите логин');
// if(login === "Админ"){
//     let password = prompt('Введите пароль')
//     if(password === ""){
//         alert('Отменено')
//     }
//     else{
//         alert('Я вас не знаю')
//     }   
// }




// let i = 1
// while (i < 100){
//     i++
//     console.log(i)
// }


// let randomEded = Math.floor(Math.random() * 100)
// console.log(randomEded)


let ureyimdekiEded = Math.floor(Math.random() * 100 + 1)
let say = 1
let isdivadeciCavab = +prompt('Eded Nedi?')
while(isdivadeciCavab !== ureyimdekiEded){
    say++
    if(isdivadeciCavab > ureyimdekiEded){
        isdivadeciCavab = +prompt('Biraz asagi')
    }else{
        isdivadeciCavab = +prompt('Biraz yuxari')
    }
}
console.log(`Ededi tapdin: ${isdivadeciCavab}`)


