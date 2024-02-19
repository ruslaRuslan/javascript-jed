// string, array (methodlari)

// repeatedSymbolCounter('AKIONAKI', 'A') // return 2 -> must be done with for loop!!!!

// 1-ci versiya
// function repeatedSymbolCounter(string, symbol) {
//     let result = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === symbol) {
//             result++
//         }
//     }
//     return result
// }
// console.log(repeatedSymbolCounter('ALIONALI', 'A'));

// _______________________________________________________________________________________________________________________________________

// 2-ci versiya
// function repeatedSymbolCounter2(string, symbol) {
//     let result = 0;
//     for (let dovr of string) {
//         if (dovr === symbol) {
//             result++
//         }
//     }
//     return result
// }
// console.log(repeatedSymbolCounter2('ALIONALI', 'A'));

// _______________________________________________________________________________________________________________________________________

// 3-ci versiya
// const repeatedSymbolCounter3 = (string, symbol) => string.length - string.replaceAll(symbol, '').length
// console.log(repeatedSymbolCounter3('ALIONALI', 'A'));


// ---------------------------------------------------------------------------------------------------------------------------------------

// task02
// 1-ci versiya

// const ilkHerifDeyis = (string, symbol) => symbol.concat(string.slice(1, string.length))
// console.log(ilkHerifDeyis('aLIONALI', 'A'));

// _______________________________________________________________________________________________________________________________________


// 2-ci versiya
// const ilkHerifDeyisV1 = (string, symbol) => string.replace(string[0], symbol);
// console.log(ilkHerifDeyisV1('aLIONALI', 'A'));

// ---------------------------------------------------------------------------------------------------------------------------------------

// task03
// verify gmail addres. (gmail addresleri sonu @gmail.com ile bitmelidir, ve ondan evvel en azi 5 simvol olmalidir. abcdfgnail.com meselen)

// 1-ci versiya
// const validateGmail = (gmail) => gmail.endsWith('@gmail.com') && gmail.length >= 15

// console.log(validateGmail('ali@gmail.com'))
// console.log(validateGmail('ruslan@gmail.com'));

// _______________________________________________________________________________________________________________________________________

// 2-ci versiya

// let parol = prompt(`parolu daxil et, zehmet olmasa, minumum 6 herfden ibaret olsun, ve parolun icerisinde en azi 1 boyuk, 1 kicik, herf, 1 reqem olmalidir.`)

// const validatePassword = (password) => {
//     if (parol.length < 6) {
//         return false
//     }
//     let containsNumber = false;
//     let containsLowerSymbol = false;
//     let containsUpperSymbol = false;
//     for (let i = 0; i < password.length; i++) {
//         const asciiCode = password.charCodeAt(i)
//         if (48 <= asciiCode && asciiCode <= 57) {
//             containsNumber = true;

//         }

//         if (65 <= asciiCode && asciiCode <= 90) {
//             containsUpperSymbol = true;

//         }
//         if (97 <= asciiCode && asciiCode <= 122) {
//             containsLowerSymbol = true;

//         }
//     }
//     return containsNumber && containsLowerSymbol && containsUpperSymbol

// }
// console.log(validatePassword(parol));

// _______________________________________________________________________________________________________________________________________

// 3-ci versiya
// let parol = prompt(`parolu daxil et, zehmet olmasa, minumum 6 herfden ibaret olsun, ve parolun icerisinde en azi 1 boyuk, 1 kicik, herf, 1 reqem olmalidir.`)

// const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/

// console.log(mediumRegex.test(parol));

// ---------------------------------------------------------------------------------------------------------------------------------------

// task-04

// 1-ci versiya

// const bugun = new Date().getDay()

// switch (bugun) {
//     case 0:
//         document.write('bazar');
//         break
//     case 1:
//         document.write('bazar ertesi');
//         break
//     case 2:
//         document.write('cersenbe axsami');
//         break
//     case 3:
//         document.write('cersenbe');
//         break
//     case 4:
//         document.write('cume ertesi');
//         break
//     case 5:
//         document.write('cume');
//         break
//     case 6:
//         document.write('senbe');
//         break
// }

// _______________________________________________________________________________________________________________________________________

// 2-ci versiya

// const bugun = new Date().getDay()
// const hefteninGunleri = ['bazar', 'bazar ertesi', 'cersenbe axsami', 'cersenbe', 'cume axsami', 'cume', 'senbe' ]
// document.write(hefteninGunleri[bugun])

// _______________________________________________________________________________________________________________________________________


// 3-ci versiya

// const bugun = new Date().getDay()
// const obj = {
//     0: 'bazar',
//     1: 'bazar ertesi',
//     2: 'cersenbe axsami',
//     3: 'cersenbe',
//     4: 'cume axsami',
//     5: 'cume',
//     6: 'senbe',
// }
// document.write(obj[bugun])

// ---------------------------------------------------------------------------------------------------------------------------------------

// task-05

// const users = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     },
//     {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         "email": "Julianne.OConner@kory.org",
//         "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//             "geo": {
//                 "lat": "29.4572",
//                 "lng": "-164.2990"
//             }
//         },
//         "phone": "493-170-9623 x156",
//         "website": "kale.biz",
//         "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//         }
//     },
//     {
//         "id": 5,
//         "name": "Chelsey Dietrich",
//         "username": "Kamren",
//         "email": "Lucio_Hettinger@annie.ca",
//         "address": {
//             "street": "Skiles Walks",
//             "suite": "Suite 351",
//             "city": "Roscoeview",
//             "zipcode": "33263",
//             "geo": {
//                 "lat": "-31.8129",
//                 "lng": "62.5342"
//             }
//         },
//         "phone": "(254)954-1289",
//         "website": "demarco.info",
//         "company": {
//             "name": "Keebler LLC",
//             "catchPhrase": "User-centric fault-tolerant solution",
//             "bs": "revolutionize end-to-end systems"
//         }
//     },
//     {
//         "id": 6,
//         "name": "Mrs. Dennis Schulist",
//         "username": "Leopoldo_Corkery",
//         "email": "Karley_Dach@jasper.info",
//         "address": {
//             "street": "Norberto Crossing",
//             "suite": "Apt. 950",
//             "city": "South Christy",
//             "zipcode": "23505-1337",
//             "geo": {
//                 "lat": "-71.4197",
//                 "lng": "71.7478"
//             }
//         },
//         "phone": "1-477-935-8478 x6430",
//         "website": "ola.org",
//         "company": {
//             "name": "Considine-Lockman",
//             "catchPhrase": "Synchronised bottom-line interface",
//             "bs": "e-enable innovative applications"
//         }
//     },
//     {
//         "id": 7,
//         "name": "Kurtis Weissnat",
//         "username": "Elwyn.Skiles",
//         "email": "Telly.Hoeger@billy.biz",
//         "address": {
//             "street": "Rex Trail",
//             "suite": "Suite 280",
//             "city": "Howemouth",
//             "zipcode": "58804-1099",
//             "geo": {
//                 "lat": "24.8918",
//                 "lng": "21.8984"
//             }
//         },
//         "phone": "210.067.6132",
//         "website": "elvis.io",
//         "company": {
//             "name": "Johns Group",
//             "catchPhrase": "Configurable multimedia task-force",
//             "bs": "generate enterprise e-tailers"
//         }
//     },
//     {
//         "id": 8,
//         "name": "Nicholas Runolfsdottir V",
//         "username": "Maxime_Nienow",
//         "email": "Sherwood@rosamond.me",
//         "address": {
//             "street": "Ellsworth Summit",
//             "suite": "Suite 729",
//             "city": "Aliyaview",
//             "zipcode": "45169",
//             "geo": {
//                 "lat": "-14.3990",
//                 "lng": "-120.7677"
//             }
//         },
//         "phone": "586.493.6943 x140",
//         "website": "jacynthe.com",
//         "company": {
//             "name": "Abernathy Group",
//             "catchPhrase": "Implemented secondary concept",
//             "bs": "e-enable extensible e-tailers"
//         }
//     },
//     {
//         "id": 9,
//         "name": "Glenna Reichert",
//         "username": "Delphine",
//         "email": "Chaim_McDermott@dana.io",
//         "address": {
//             "street": "Dayna Park",
//             "suite": "Suite 449",
//             "city": "Bartholomebury",
//             "zipcode": "76495-3109",
//             "geo": {
//                 "lat": "24.6463",
//                 "lng": "-168.8889"
//             }
//         },
//         "phone": "(775)976-6794 x41206",
//         "website": "conrad.com",
//         "company": {
//             "name": "Yost and Sons",
//             "catchPhrase": "Switchable contextually-based project",
//             "bs": "aggregate real-time technologies"
//         }
//     },
//     {
//         "id": 10,
//         "name": "Clementina DuBuque",
//         "username": "Moriah.Stanton",
//         "email": "Rey.Padberg@karina.biz",
//         "address": {
//             "street": "Kattie Turnpike",
//             "suite": "Suite 198",
//             "city": "Lebsackbury",
//             "zipcode": "31428-2261",
//             "geo": {
//                 "lat": "-38.2386",
//                 "lng": "57.2232"
//             }
//         },
//         "phone": "024-648-3804",
//         "website": "ambrose.net",
//         "company": {
//             "name": "Hoeger LLC",
//             "catchPhrase": "Centralized empowering task-force",
//             "bs": "target end-to-end models"
//         }
//     }
// ]

// users.forEach((element) => {
//     document.write(` <br/>
// No: ${element.id}
// Username: ${element.username} <br/>
// Email: ${element.email}<br/>
// Company Name: ${element.company.name}<br/>
// <hr/>
// `)
// })

// ---------------------------------------------------------------------------------------------------------------------------------------

// task-05
// const users = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     },
//     {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         "email": "Julianne.OConner@kory.org",
//         "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//             "geo": {
//                 "lat": "29.4572",
//                 "lng": "-164.2990"
//             }
//         },
//         "phone": "493-170-9623 x156",
//         "website": "kale.biz",
//         "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//         }
//     },
//     {
//         "id": 5,
//         "name": "Chelsey Dietrich",
//         "username": "Kamren",
//         "email": "Lucio_Hettinger@annie.ca",
//         "address": {
//             "street": "Skiles Walks",
//             "suite": "Suite 351",
//             "city": "Roscoeview",
//             "zipcode": "33263",
//             "geo": {
//                 "lat": "-31.8129",
//                 "lng": "62.5342"
//             }
//         },
//         "phone": "(254)954-1289",
//         "website": "demarco.info",
//         "company": {
//             "name": "Keebler LLC",
//             "catchPhrase": "User-centric fault-tolerant solution",
//             "bs": "revolutionize end-to-end systems"
//         }
//     },
//     {
//         "id": 6,
//         "name": "Mrs. Dennis Schulist",
//         "username": "Leopoldo_Corkery",
//         "email": "Karley_Dach@jasper.info",
//         "address": {
//             "street": "Norberto Crossing",
//             "suite": "Apt. 950",
//             "city": "South Christy",
//             "zipcode": "23505-1337",
//             "geo": {
//                 "lat": "-71.4197",
//                 "lng": "71.7478"
//             }
//         },
//         "phone": "1-477-935-8478 x6430",
//         "website": "ola.org",
//         "company": {
//             "name": "Considine-Lockman",
//             "catchPhrase": "Synchronised bottom-line interface",
//             "bs": "e-enable innovative applications"
//         }
//     },
//     {
//         "id": 7,
//         "name": "Kurtis Weissnat",
//         "username": "Elwyn.Skiles",
//         "email": "Telly.Hoeger@billy.biz",
//         "address": {
//             "street": "Rex Trail",
//             "suite": "Suite 280",
//             "city": "Howemouth",
//             "zipcode": "58804-1099",
//             "geo": {
//                 "lat": "24.8918",
//                 "lng": "21.8984"
//             }
//         },
//         "phone": "210.067.6132",
//         "website": "elvis.io",
//         "company": {
//             "name": "Johns Group",
//             "catchPhrase": "Configurable multimedia task-force",
//             "bs": "generate enterprise e-tailers"
//         }
//     },
//     {
//         "id": 8,
//         "name": "Nicholas Runolfsdottir V",
//         "username": "Maxime_Nienow",
//         "email": "Sherwood@rosamond.me",
//         "address": {
//             "street": "Ellsworth Summit",
//             "suite": "Suite 729",
//             "city": "Aliyaview",
//             "zipcode": "45169",
//             "geo": {
//                 "lat": "-14.3990",
//                 "lng": "-120.7677"
//             }
//         },
//         "phone": "586.493.6943 x140",
//         "website": "jacynthe.com",
//         "company": {
//             "name": "Abernathy Group",
//             "catchPhrase": "Implemented secondary concept",
//             "bs": "e-enable extensible e-tailers"
//         }
//     },
//     {
//         "id": 9,
//         "name": "Glenna Reichert",
//         "username": "Delphine",
//         "email": "Chaim_McDermott@dana.io",
//         "address": {
//             "street": "Dayna Park",
//             "suite": "Suite 449",
//             "city": "Bartholomebury",
//             "zipcode": "76495-3109",
//             "geo": {
//                 "lat": "24.6463",
//                 "lng": "-168.8889"
//             }
//         },
//         "phone": "(775)976-6794 x41206",
//         "website": "conrad.com",
//         "company": {
//             "name": "Yost and Sons",
//             "catchPhrase": "Switchable contextually-based project",
//             "bs": "aggregate real-time technologies"
//         }
//     },
//     {
//         "id": 10,
//         "name": "Clementina DuBuque",
//         "username": "Moriah.Stanton",
//         "email": "Rey.Padberg@karina.biz",
//         "address": {
//             "street": "Kattie Turnpike",
//             "suite": "Suite 198",
//             "city": "Lebsackbury",
//             "zipcode": "31428-2261",
//             "geo": {
//                 "lat": "-38.2386",
//                 "lng": "57.2232"
//             }
//         },
//         "phone": "024-648-3804",
//         "website": "ambrose.net",
//         "company": {
//             "name": "Hoeger LLC",
//             "catchPhrase": "Centralized empowering task-force",
//             "bs": "target end-to-end models"
//         }
//     }
// ]

// const getUserName = (username) => obj = users.find((user) => user.name === username)

// console.log(getUserName('Leanne Graham'));
// console.log(getUserName('Clementina DuBuque'));

// ---------------------------------------------------------------------------------------------------------------------------------------

// task-05
// lazimlilar
const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]

// 1-ci versiya

// const lazimlilar = users.map((user) => {
//     let obj = {
//         id: user.id,
//         name: user.name,
//         username: user.username,
//         email: user.email,
//     }
//     return obj;
// })
// console.log(lazimlilar);

// _______________________________________________________________________________________________________________________________________

// 2-ci versiya

// const lazimlilar = users.map(({ id, name, username, email }) => {
//     let obj = {
//         id: id,
//         name: name,
//         username: username,
//         email: email,
//     }
//     return obj;
// })
// console.log(lazimlilar);

// _______________________________________________________________________________________________________________________________________


// 3-ci versiya

const lazimlilar = users.map(({ id, name, username, email }) => ({ id, name, username, email }))
console.log(lazimlilar);