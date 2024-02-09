
// const friends = ['ali', 'ruslan', 'renat', 12, () => { }, { ad: 'test' }]  //bunlar massiv ve array adlanir bezende matriks-de deyilir
// console.log(friends);
// console.log('qehraman'[0]); //q
// console.log(friends[0][1]); //l
// console.log(friends[1][1]); //u
// console.log(friends[1][1]); //u
// console.log(friends[5].ad); //test


// const friends = ['ali', 'ruslan', 'renat']
// friends[0] = 'ahmad'
// console.log(friends[0]); //ahmad
// ---------------------------------------------------------------------------------------------------------------------------------------


// const car = {
//     ad: 'ali'
// }
// car.ad = 'ahmad'
// console.log(car.ad); //ahmad

// massiv ozude bir obyektdit
// string metodlarinin coxu massivde var

// ---------------------------------------------------------------------------------------------------------------------------------------





// Massiv ozu de bir obyektdir!
// const friends = ['ali', 'ruslan', 'renat', 'ramin', 'idris']

// T1. 'renat' elementinin index-ni tap;
// function findFriends(name) {
//     const friends = ['ali', 'ruslan', 'renat', 'ramin', 'idris']
//     let index = friends.indexOf(name)
//     console.log(index);
//     return index
// }
// findFriends('renat')
// ---------------------------------------------------------------------------------------------------------------------------------------


// T2. 'idris' elementi bu massive daxildirse, ekrana "Idris bizim dostumuzdur" cumlesini cixar. Yoxdursa, "Idris abi burda yoxdur" cixart.


// function findFriends(name) {
//     const friends = ['ali', 'ruslan', 'renat', 'ramin', 'idris']
//     if (name === (friends[4])) {
//         return `${friends[4]} bizim dostumuzdur`;
//     }
//     return `${friends[4]} abi burda yoxdur`
// }
// console.log(findFriends('renat'));
// console.log(findFriends('ali'));
// console.log(findFriends('idris'));

// ---------------------------------------------------------------------------------------------------------------------------------------

// T3. concat funksiyasi vasitesile bura yeni dostlar elave et: samil, sada Bunu yeni massive menimset -> friends2

// function findFriends2() {
//     let name = 'samil';
//     let result = name.concat('sada');
//     console.log(result);
//     return result;
// }
// findFriends2();

// ---------------------------------------------------------------------------------------------------------------------------------------

// T4. massivden ortadaki 2 elementi gotur (slice ile) (renat ve ramin elementlerini)

// const friends = ['ali', 'ruslan', 'renat', 'ramin', 'idris']
// let result = friends.slice(2, 4);
// console.log(result);
// ---------------------------------------------------------------------------------------------------------------------------------------


// T5. bu massivle verilen massivi birlesdir (concat vasitesile)
// const friends = ['ali', 'ruslan', 'renat', 'ramin', 'idris'];
// const enemies = ['alion', 'greenheart', 'javascript', 'react'];
// let result = friends.concat(enemies)
// console.log(result);

// ---------------------------------------------------------------------------------------------------------------------------------------


// const friends = ['ali', 'ruslan', 'renat', 'ramin', 'idris']
// console.log(friends.length)

// ---------------------------------------------------------------------------------------------------------------------------------------

// const friends = ['ali', 'ruslan', 'renat', 'ramin', 'idris']

// const name = 'alineymet'
// for (let i = 0; i < name.length; i++) {
//     // console.log(i);
//     // console.log(name[0]);
//     console.log(name[i]);

// }

// ---------------------------------------------------------------------------------------------------------------------------------------

// const friends = ['ali', 'ruslan', 'renat', 'ramin', 'idris']

// const name = 'alineymet'
// for (let i = 0; i < friends.length; i++) {

//     console.log(friends[i]); //massivde olan butun adlari verecek 

//     console.log(friends[i][0].toUpperCase()) //massivde olan butun adlarin birinci herifini boyudup verir
// }


// ---------------------------------------------------------------------------------------------------------------------------------------


// itarable -> uzerinden loop ede bileceyimiz (string, array)
// const name = 'alineymet';
// for (let herf of name) {
//     console.log(herf);
// }

// ---------------------------------------------------------------------------------------------------------------------------------------

// Bunlar obyekte islemir

// const friends = ['ali', 'ruslan', 'renat', 'ramin', 'idris']
// for (const element of friends) {
//     console.log(element.toLocaleUpperCase());
// }

// ---------------------------------------------------------------------------------------------------------------------------------------

const friends = ['ali', 'ruslan', 'renat', 'ramin', 'idris']

// sondan elave etmek -> push()
// friends.push('test')
// console.log(friends);

// ___________________________________

// evvelden elave etmek -> unshift()
// friends.unshift('MIMI')
// console.log(friends);

// ___________________________________

// sondan simek olar -> pop()
// friends.pop()
// console.log(friends);
// ___________________________________

// evvelden silmek olar -> shift()

// friends.shift()
// console.log(friends);


// ---------------------------------------------------------------------------------------------------------------------------------------



// 1. Massiv yaradin.  olcusunu 5e menimsedin ve prompt-la massivi number-lerle doldurun.

// let massiv = [];
// for (let i = 1; i <= 5; i++) {
//     let number = parseFloat(prompt('Massivin ' + (i) + '. elementlerini daxil edin:'))
//     massiv.push(number)
// }
// console.log(massiv);




// 2. Funksiya yazin ki, massivde olan butun elementlerin hasilini ekrana cixarsin.



// 3. multiply(a,b,c) funksiyasi yaradin. Men ona istediyim sayda argument versem bele islemelidir, hasilini geri qaytarmalidir.









