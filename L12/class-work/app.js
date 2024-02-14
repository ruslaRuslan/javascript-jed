// array's ESA methods

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']
// // JED.Fronted.fe10.forEach((ad, index, arr) => { })
// fe10.forEach((ad, i, array) => {
//     console.log(`${i + 1}. ${ad} `);
//     array.push(ad.concat('elave edildi.'))
//     console.log('this is array', array);
// })
// console.log(fe10);

// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', { ad: 'sada' }, 'sabina']
// // JED.Fronted.fe10.forEach((ad, index, arr) => { })
// fe10.forEach((ad, i, array) => {
//     console.log(`${i + 1}. ${ad}`);
//     if (i === 2) {
//         ad.ad = 'hamza'
//         console.log(array);

//     }
// });
// console.log(fe10);

// _______________________________________________________________________________________________________________________________________


// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']
// fe10.reverse()
// console.log(fe10);

// _______________________________________________________________________________________________________________________________________


/*
1. arrayin ES6 (esmascript 2015) methods
forEach+, filter+, find+, findIndex, map, every+, some+, reduce*

2. hamsi: eyni arqument olaraq function yeni, callback alir:
(ArraydekiElement, ElementIndex, MassiveReferanse)=>{}
arr.forEach(elem, index, arr) =>  )

3. loop uzerinden isleyir:
callback butun elementler ucun isdifade olunur.

4. original massivi deyismir yeni massivi geri gonderir.
arr = arr.map((elem, index, arr)=>) arrayi deyismek ucun bele etmelisen!
*/

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']

// forEach -> sadece sede loop etmekdir.

// fe10.forEach((elem, index)=>{
//     document.write(`${index + 1}-ci element. ${elem} <br/>`)
// })
// document.write ↓
// 1-ci element. ali
// 2-ci element. muhtar
// 3-ci element. sada
// 4-ci element. sabina
// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']

// forEach -> sadece sede loop etmekdir.

// const a = fe10.forEach((elem, index)=>{
//     document.write(`${index + 1}-ci element. ${elem} <br/>`)
// })
// console.log(a);  // undefined
// ---------------------------------------------------------------------------------------------------------------------------------------


// every


// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']
// const result = fe10.every((elem, ind) => {
//     const shert = elem.length < 20
//     return shert;
// })
// console.log(result);  //true

// _______________________________________________________________________________________________________________________________________


// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']
// const result = fe10.every((elem, ind) => {
//     const shert = elem.length < 6
//     return shert;
// })
// console.log(result);  //false

// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']
// const result = fe10.every((elem, ind) => elem.length < 6)
// console.log(result);  //false
// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']
// const result = fe10.every((elem, ind) => true)
// console.log(result);   //true

// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina']
// const result = fe10.every((elem, ind) => elem)
// console.log(result);   //true

// _______________________________________________________________________________________________________________________________________


// falsy 0, Nan, '', false, undefined, null
// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const result = fe10.every((elem, index) => 2)
// console.log(result);  //true

// _______________________________________________________________________________________________________________________________________


// falsy 0, Nan, '', false, undefined, null
// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const result = fe10.every((elem, index) => elem)
// console.log(result);  //false

// _______________________________________________________________________________________________________________________________________

// // falsy 0, Nan, '', false, undefined, null
// const fe10 = ['ali', 'muhtar', 'sada', 'sabina','']
// const result = fe10.every((elem, index) => index)
// console.log(result);  //false

// cunki birinci 0-dan baslayir, 0-da falsy-di

// _______________________________________________________________________________________________________________________________________

// falsy 0, Nan, '', false, undefined, null
// const fe10 = ['ali', 'muhtar', 'sada', 'sabina','']
// const result = fe10.every((elem, index) => index)
// console.log(result); 

// ---------------------------------------------------------------------------------------------------------------------------------------

// some

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina','']
// const result = fe10.some((elem, index) => index)
// console.log(result)   //true

// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina','']
// const result = fe10.some((elem, index) => 0)
// console.log(result)  //false



// ---------------------------------------------------------------------------------------------------------------------------------------

// find

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.find((elem) => elem[0] === 's')
// console.log(user);

// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.find((elem) => elem.length > 2)
// console.log(user); //ali

// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.find((elem, index) => index)
// console.log(user)   //muhtar
// 'ali' falsy-di deye 'muhtar' goturdu, cunki 0-falsy-di

// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.find((elem, index) => index - 1)
// console.log(user) //ali
// cunki 1-den 1 cixdix ve 0-ci adi cixardi

// _______________________________________________________________________________________________________________________________________


// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.find((elem, index) => 0)
// console.log(user)  //undefined
// cunki 0 falsy-di


// _______________________________________________________________________________________________________________________________________

// const fe10 = [null, 'ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.find((elem, index) => 1)
// console.log(user) //null 
//0-dan basqa ve -0-dan basqa hansi reqem ve ededi  yazsaq null verecek, 0 ve -0-da ise undefined verecek


// ---------------------------------------------------------------------------------------------------------------------------------------


// findIndex

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.findIndex((elem, index) => elem.length > 5)
// console.log(user) //1

// ---------------------------------------------------------------------------------------------------------------------------------------

// filter

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.filter((elem, index) => elem.length > 5)
// console.log(user) //['muhtar', 'sabina']

// _______________________________________________________________________________________________________________________________________

// const suCen = ['s', 'q','s','q','s' , 'q','s','q','s', 'q','s','q','s']
// const caydan = suCen.filter((molekul) => molekul === 's')
// console.log(caydan) //['s', 's', 's', 's', 's', 's', 's']

// _______________________________________________________________________________________________________________________________________


// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.filter((elem, index) => elem[0] === 'm')
// console.log(user)   //['muhtar']
// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', '']
// const user = fe10.filter((elem, index) => elem[0] === 's')
// console.log(user) //['sada', 'sabina']

// _______________________________________________________________________________________________________________________________________



// const fe10 = ['ali', 'muhtar', 'sada', 'sabina', 'aliabbas','alineymet', 'alisahib', 'alidadas', 'behruz']
// const user = fe10.filter((elem, index) => elem[0] === 'a')
// console.log(user)  //['ali', 'aliabbas', 'alineymet', 'alisahib', 'alidadas']

// _______________________________________________________________________________________________________________________________________


// const fe10 = ['ali', 'aslan','muhtar', 'sada', 'sabina', 'aliabbas','alineymet', 'alisahib', 'alidadas', 'behruz']

// const startsWithAli = fe10.filter((elem) => elem.toLocaleLowerCase().startsWith('ali'))
// console.log(startsWithAli) //['ali', 'aliabbas', 'alineymet', 'alisahib', 'alidadas']
// En yaxsi metod bu metotdur

// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'aslan', 'muhtar', 'sada', 'sabina', 'aliabbas', 'alineymet', 'alisahib', 'alidadas', 'behruz']

// const startsWithAli = fe10.filter((elem) => elem.slice(0, 3) === 'ali')
// console.log(startsWithAli) //['ali', 'aliabbas', 'alineymet', 'alisahib', 'alidadas']

// _______________________________________________________________________________________________________________________________________

// const fe10 = ['ali', 'aslan', 'muhtar', 'sada', 'sabina', 'aliabbas', 'alineymet', 'alisahib', 'alidadas', 'behruz']

// const startsWithAli = fe10.filter((elem) => elem.slice(0, 3).toLocaleLowerCase() === 'ali')
// console.log(startsWithAli) //['ali', 'aliabbas', 'alineymet', 'alisahib', 'alidadas']

// _______________________________________________________________________________________________________________________________________


// const fe10 = ['ali', 'aslan', 'bali', 'muhtar', 'sada', 'sabina', 'aliabbas', 'alineymet', 'alisahib', 'alidadas', 'behruz']

// const startsWithAli = fe10.filter((elem) => elem.includes('ali'))
// console.log(startsWithAli) //['ali', 'bali', 'aliabbas', 'alineymet', 'alisahib', 'alidadas']

// _______________________________________________________________________________________________________________________________________





// T1. uzunlugu 5,6 ve ya 7-ye beraber olan yeni massive yigin; [filter]

// const fe10 = ['ali', 'aslan', 'bali', 'muhtar', 'sada', 'sabina', 'aliabbas', 'alineymet', 'alisahib', 'alidadas', 'behruz']

// const task1 = fe10.filter((name) => name.length >= 5 && name.length <= 7)
// console.log(task1);


// ---------------------------------------------------------------------------------------------------------------------------------------


// T2. sonu i ile ve uzunlugu 4-e beraber olan ilk elementi tapin; [find]

// const fe10 = ['ali', 'aslan', 'bali', 'muhtar', 'sada', 'sabina', 'aliabbas', 'alineymet', 'alisahib', 'alidadas', 'behruz']

// const task1 = fe10.find((name) => name.endsWith('i') && name.length === 4)
// console.log(task1);

// ---------------------------------------------------------------------------------------------------------------------------------------


// T3. Butun adlar-da a herfi varmi? [every]

// const fe10 = ['ali', 'aslan', 'bali', 'muhtar', 'sada', 'sabina', 'aliabbas', 'alineymet', 'alisahib', 'alidadas', 'behruz']

// const task3 = fe10.every((name) => name.includes('a'))
// console.log(task3);

// ---------------------------------------------------------------------------------------------------------------------------------------


// T4. Alman turist: Sizin adlarinizda z herfi isdifafe olunurmu[some]

// const fe10 = ['ali', 'aslan', 'bali', 'muhtar', 'sada', 'sabina', 'aliabbas', 'alineymet', 'alisahib', 'alidadas', 'behruz']

// const task4 = fe10.some((name) => name.includes('z'))
// console.log(task4);

// ---------------------------------------------------------------------------------------------------------------------------------------

// const fe10 = ['ali', 'aslan', 'bali', 'muhtar', 'sada', 'sabina', 'aliabbas', 'alineymet', 'alisahib', 'alidadas', 'behruz']

// // bashHerifler = ['a', 'a', 'r', 'm', 's', 'b']
// // mapper
// // map

// const yeniArr = fe10.map((element, i) => element[0].toUpperCase() )
// console.log(yeniArr);

// _______________________________________________________________________________________________________________________________________


// const fe10 = ['ali', 'aslan', 'bali', 'muhtar', 'sada', 'sabina', 'aliabbas', 'alineymet', 'alisahib', 'alidadas', 'behruz']

// // bashHerifler = ['a', 'a', 'r', 'm', 's', 'b']
// // mapper
// // map


// const yeniArr = fe10.map((name) => `<h1> ${name} </h1>` )
// console.log(yeniArr);

// _______________________________________________________________________________________________________________________________________


// const fe10 = ['ali', 'aslan', 'bali', 'muhtar', 'sada', 'sabina', 'aliabbas', 'alineymet', 'alisahib', 'alidadas', 'behruz']

// // bashHerifler = ['a', 'a', 'r', 'm', 's', 'b']
// // mapper
// // map


// const yeniArr = fe10.map((name) => `<h1 style="color:red;" > ${name} </h1>` )
// document.write(yeniArr);

// ---------------------------------------------------------------------------------------------------------------------------------------


// const users = [
//     {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//         }
//       },
//       "phone": "1-770-736-8031 x56442",
//       "website": "hildegard.org",
//       "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//       }
//     },
//     {
//       "id": 2,
//       "name": "Ervin Howell",
//       "username": "Antonette",
//       "email": "Shanna@melissa.tv",
//       "address": {
//         "street": "Victor Plains",
//         "suite": "Suite 879",
//         "city": "Wisokyburgh",
//         "zipcode": "90566-7771",
//         "geo": {
//           "lat": "-43.9509",
//           "lng": "-34.4618"
//         }
//       },
//       "phone": "010-692-6593 x09125",
//       "website": "anastasia.net",
//       "company": {
//         "name": "Deckow-Crist",
//         "catchPhrase": "Proactive didactic contingency",
//         "bs": "synergize scalable supply-chains"
//       }
//     },
//     {
//       "id": 3,
//       "name": "Clementine Bauch",
//       "username": "Samantha",
//       "email": "Nathan@yesenia.net",
//       "address": {
//         "street": "Douglas Extension",
//         "suite": "Suite 847",
//         "city": "McKenziehaven",
//         "zipcode": "59590-4157",
//         "geo": {
//           "lat": "-68.6102",
//           "lng": "-47.0653"
//         }
//       },
//       "phone": "1-463-123-4447",
//       "website": "ramiro.info",
//       "company": {
//         "name": "Romaguera-Jacobson",
//         "catchPhrase": "Face to face bifurcated interface",
//         "bs": "e-enable strategic applications"
//       }
//     },
//     {
//       "id": 4,
//       "name": "Patricia Lebsack",
//       "username": "Karianne",
//       "email": "Julianne.OConner@kory.org",
//       "address": {
//         "street": "Hoeger Mall",
//         "suite": "Apt. 692",
//         "city": "South Elvis",
//         "zipcode": "53919-4257",
//         "geo": {
//           "lat": "29.4572",
//           "lng": "-164.2990"
//         }
//       },
//       "phone": "493-170-9623 x156",
//       "website": "kale.biz",
//       "company": {
//         "name": "Robel-Corkery",
//         "catchPhrase": "Multi-tiered zero tolerance productivity",
//         "bs": "transition cutting-edge web services"
//       }
//     },
//     {
//       "id": 5,
//       "name": "Chelsey Dietrich",
//       "username": "Kamren",
//       "email": "Lucio_Hettinger@annie.ca",
//       "address": {
//         "street": "Skiles Walks",
//         "suite": "Suite 351",
//         "city": "Roscoeview",
//         "zipcode": "33263",
//         "geo": {
//           "lat": "-31.8129",
//           "lng": "62.5342"
//         }
//       },
//       "phone": "(254)954-1289",
//       "website": "demarco.info",
//       "company": {
//         "name": "Keebler LLC",
//         "catchPhrase": "User-centric fault-tolerant solution",
//         "bs": "revolutionize end-to-end systems"
//       }
//     },
//     {
//       "id": 6,
//       "name": "Mrs. Dennis Schulist",
//       "username": "Leopoldo_Corkery",
//       "email": "Karley_Dach@jasper.info",
//       "address": {
//         "street": "Norberto Crossing",
//         "suite": "Apt. 950",
//         "city": "South Christy",
//         "zipcode": "23505-1337",
//         "geo": {
//           "lat": "-71.4197",
//           "lng": "71.7478"
//         }
//       },
//       "phone": "1-477-935-8478 x6430",
//       "website": "ola.org",
//       "company": {
//         "name": "Considine-Lockman",
//         "catchPhrase": "Synchronised bottom-line interface",
//         "bs": "e-enable innovative applications"
//       }
//     },
//     {
//       "id": 7,
//       "name": "Kurtis Weissnat",
//       "username": "Elwyn.Skiles",
//       "email": "Telly.Hoeger@billy.biz",
//       "address": {
//         "street": "Rex Trail",
//         "suite": "Suite 280",
//         "city": "Howemouth",
//         "zipcode": "58804-1099",
//         "geo": {
//           "lat": "24.8918",
//           "lng": "21.8984"
//         }
//       },
//       "phone": "210.067.6132",
//       "website": "elvis.io",
//       "company": {
//         "name": "Johns Group",
//         "catchPhrase": "Configurable multimedia task-force",
//         "bs": "generate enterprise e-tailers"
//       }
//     },
//     {
//       "id": 8,
//       "name": "Nicholas Runolfsdottir V",
//       "username": "Maxime_Nienow",
//       "email": "Sherwood@rosamond.me",
//       "address": {
//         "street": "Ellsworth Summit",
//         "suite": "Suite 729",
//         "city": "Aliyaview",
//         "zipcode": "45169",
//         "geo": {
//           "lat": "-14.3990",
//           "lng": "-120.7677"
//         }
//       },
//       "phone": "586.493.6943 x140",
//       "website": "jacynthe.com",
//       "company": {
//         "name": "Abernathy Group",
//         "catchPhrase": "Implemented secondary concept",
//         "bs": "e-enable extensible e-tailers"
//       }
//     },
//     {
//       "id": 9,
//       "name": "Glenna Reichert",
//       "username": "Delphine",
//       "email": "Chaim_McDermott@dana.io",
//       "address": {
//         "street": "Dayna Park",
//         "suite": "Suite 449",
//         "city": "Bartholomebury",
//         "zipcode": "76495-3109",
//         "geo": {
//           "lat": "24.6463",
//           "lng": "-168.8889"
//         }
//       },
//       "phone": "(775)976-6794 x41206",
//       "website": "conrad.com",
//       "company": {
//         "name": "Yost and Sons",
//         "catchPhrase": "Switchable contextually-based project",
//         "bs": "aggregate real-time technologies"
//       }
//     },
//     {
//       "id": 10,
//       "name": "Clementina DuBuque",
//       "username": "Moriah.Stanton",
//       "email": "Rey.Padberg@karina.biz",
//       "address": {
//         "street": "Kattie Turnpike",
//         "suite": "Suite 198",
//         "city": "Lebsackbury",
//         "zipcode": "31428-2261",
//         "geo": {
//           "lat": "-38.2386",
//           "lng": "57.2232"
//         }
//       },
//       "phone": "024-648-3804",
//       "website": "ambrose.net",
//       "company": {
//         "name": "Hoeger LLC",
//         "catchPhrase": "Centralized empowering task-force",
//         "bs": "target end-to-end models"
//       }
//     }
//   ]

// const personalInfos = users.map((user)=>{
//     const obj = {
//         id: user.id,
//         name: user.name,
//         username: user.username
//     }
//     return obj;
// })
// console.log(personalInfos);

// _______________________________________________________________________________________________________________________________________


// const users = [
//     {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//         }
//       },
//       "phone": "1-770-736-8031 x56442",
//       "website": "hildegard.org",
//       "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//       }
//     },
//     {
//       "id": 2,
//       "name": "Ervin Howell",
//       "username": "Antonette",
//       "email": "Shanna@melissa.tv",
//       "address": {
//         "street": "Victor Plains",
//         "suite": "Suite 879",
//         "city": "Wisokyburgh",
//         "zipcode": "90566-7771",
//         "geo": {
//           "lat": "-43.9509",
//           "lng": "-34.4618"
//         }
//       },
//       "phone": "010-692-6593 x09125",
//       "website": "anastasia.net",
//       "company": {
//         "name": "Deckow-Crist",
//         "catchPhrase": "Proactive didactic contingency",
//         "bs": "synergize scalable supply-chains"
//       }
//     },
//     {
//       "id": 3,
//       "name": "Clementine Bauch",
//       "username": "Samantha",
//       "email": "Nathan@yesenia.net",
//       "address": {
//         "street": "Douglas Extension",
//         "suite": "Suite 847",
//         "city": "McKenziehaven",
//         "zipcode": "59590-4157",
//         "geo": {
//           "lat": "-68.6102",
//           "lng": "-47.0653"
//         }
//       },
//       "phone": "1-463-123-4447",
//       "website": "ramiro.info",
//       "company": {
//         "name": "Romaguera-Jacobson",
//         "catchPhrase": "Face to face bifurcated interface",
//         "bs": "e-enable strategic applications"
//       }
//     },
//     {
//       "id": 4,
//       "name": "Patricia Lebsack",
//       "username": "Karianne",
//       "email": "Julianne.OConner@kory.org",
//       "address": {
//         "street": "Hoeger Mall",
//         "suite": "Apt. 692",
//         "city": "South Elvis",
//         "zipcode": "53919-4257",
//         "geo": {
//           "lat": "29.4572",
//           "lng": "-164.2990"
//         }
//       },
//       "phone": "493-170-9623 x156",
//       "website": "kale.biz",
//       "company": {
//         "name": "Robel-Corkery",
//         "catchPhrase": "Multi-tiered zero tolerance productivity",
//         "bs": "transition cutting-edge web services"
//       }
//     },
//     {
//       "id": 5,
//       "name": "Chelsey Dietrich",
//       "username": "Kamren",
//       "email": "Lucio_Hettinger@annie.ca",
//       "address": {
//         "street": "Skiles Walks",
//         "suite": "Suite 351",
//         "city": "Roscoeview",
//         "zipcode": "33263",
//         "geo": {
//           "lat": "-31.8129",
//           "lng": "62.5342"
//         }
//       },
//       "phone": "(254)954-1289",
//       "website": "demarco.info",
//       "company": {
//         "name": "Keebler LLC",
//         "catchPhrase": "User-centric fault-tolerant solution",
//         "bs": "revolutionize end-to-end systems"
//       }
//     },
//     {
//       "id": 6,
//       "name": "Mrs. Dennis Schulist",
//       "username": "Leopoldo_Corkery",
//       "email": "Karley_Dach@jasper.info",
//       "address": {
//         "street": "Norberto Crossing",
//         "suite": "Apt. 950",
//         "city": "South Christy",
//         "zipcode": "23505-1337",
//         "geo": {
//           "lat": "-71.4197",
//           "lng": "71.7478"
//         }
//       },
//       "phone": "1-477-935-8478 x6430",
//       "website": "ola.org",
//       "company": {
//         "name": "Considine-Lockman",
//         "catchPhrase": "Synchronised bottom-line interface",
//         "bs": "e-enable innovative applications"
//       }
//     },
//     {
//       "id": 7,
//       "name": "Kurtis Weissnat",
//       "username": "Elwyn.Skiles",
//       "email": "Telly.Hoeger@billy.biz",
//       "address": {
//         "street": "Rex Trail",
//         "suite": "Suite 280",
//         "city": "Howemouth",
//         "zipcode": "58804-1099",
//         "geo": {
//           "lat": "24.8918",
//           "lng": "21.8984"
//         }
//       },
//       "phone": "210.067.6132",
//       "website": "elvis.io",
//       "company": {
//         "name": "Johns Group",
//         "catchPhrase": "Configurable multimedia task-force",
//         "bs": "generate enterprise e-tailers"
//       }
//     },
//     {
//       "id": 8,
//       "name": "Nicholas Runolfsdottir V",
//       "username": "Maxime_Nienow",
//       "email": "Sherwood@rosamond.me",
//       "address": {
//         "street": "Ellsworth Summit",
//         "suite": "Suite 729",
//         "city": "Aliyaview",
//         "zipcode": "45169",
//         "geo": {
//           "lat": "-14.3990",
//           "lng": "-120.7677"
//         }
//       },
//       "phone": "586.493.6943 x140",
//       "website": "jacynthe.com",
//       "company": {
//         "name": "Abernathy Group",
//         "catchPhrase": "Implemented secondary concept",
//         "bs": "e-enable extensible e-tailers"
//       }
//     },
//     {
//       "id": 9,
//       "name": "Glenna Reichert",
//       "username": "Delphine",
//       "email": "Chaim_McDermott@dana.io",
//       "address": {
//         "street": "Dayna Park",
//         "suite": "Suite 449",
//         "city": "Bartholomebury",
//         "zipcode": "76495-3109",
//         "geo": {
//           "lat": "24.6463",
//           "lng": "-168.8889"
//         }
//       },
//       "phone": "(775)976-6794 x41206",
//       "website": "conrad.com",
//       "company": {
//         "name": "Yost and Sons",
//         "catchPhrase": "Switchable contextually-based project",
//         "bs": "aggregate real-time technologies"
//       }
//     },
//     {
//       "id": 10,
//       "name": "Clementina DuBuque",
//       "username": "Moriah.Stanton",
//       "email": "Rey.Padberg@karina.biz",
//       "address": {
//         "street": "Kattie Turnpike",
//         "suite": "Suite 198",
//         "city": "Lebsackbury",
//         "zipcode": "31428-2261",
//         "geo": {
//           "lat": "-38.2386",
//           "lng": "57.2232"
//         }
//       },
//       "phone": "024-648-3804",
//       "website": "ambrose.net",
//       "company": {
//         "name": "Hoeger LLC",
//         "catchPhrase": "Centralized empowering task-force",
//         "bs": "target end-to-end models"
//       }
//     }
//   ]

// const personalInfos = users.map((user)=>({
    
//         id: user.id,
//         name: user.name,
//         username: user.username
    
   
// }))
// console.log(personalInfos);