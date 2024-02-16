// 1. let arr = ['c', 'a', 't', ' ', 'd', 'o', 'g', ' ', 'a', 'p', 'p', 'l', 'e', ' ', 'f', 'i', 'n', 'e']
// yeni array yaradin ki, soz tersine duzulsun. // ['f','i','n','e', ' ','a','p','p','l','e',' ','d','o','g',' ','c','a','t']
// sozler arasinda bosluq var.


// let arr = ['c', 'a', 't', ' ', 'd', 'o', 'g', ' ', 'a', 'p', 'p', 'l', 'e', ' ', 'f', 'i', 'n', 'e'];
// let reversedArr = arr.join('').split(' ').reverse().join(' ').split('')
// console.log(reversedArr);
// __________________________________________________________________________________________________________________________________________

// let arr = ['c', 'a', 't', ' ', 'd', 'o', 'g', ' ', 'a', 'p', 'p', 'l', 'e', ' ', 'f', 'i', 'n', 'e'];
// let reversedArr = []

// arr.join('').split(' ').reverse().join(' ').split('').forEach(letter => reversedArr.push(letter))

// console.log(reversedArr);


// ------------------------------------------------------------------------------------------------------------------------------------------


// 2. let arr = [1, 4, 7, 2, 0, -4, -6, -3, 0, -8, -2, 8, 0, 0, 3, 0, 1, 2, -5] arrayi verilib.Sifirlari en axira duzun.


// let arr = [1, 4, 7, 2, 0, -4, -6, -3, 0, -8, -2, 8, 0, 0, 3, 0, 1, 2, -5];

// let zeros = arr.filter((element, index, array) => element === 0)
// let NonZeros = arr.filter((element) => element !== 0)
// let result = NonZeros.concat(zeros)
// console.log(result);

// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

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

// Task1. Get all users whose zip code is less than or equal to 50000.


// const getUsersWithPostalCodeLessThan50000 = (users) => {
//     return users.filter((user) => user.address.zipcode <= 50000)

// }
// console.log(getUsersWithPostalCodeLessThan50000(users));

// ------------------------------------------------------------------------------------------------------------------------------------------


// Task2. Get all users whose email ends with '.net'.

// const usersWhoseEmailEndsWith = (users) => {
//     let result = users.filter((element) => {
//        return element.email.endsWith('.net')
//     })
//     return result
// }
// console.log(usersWhoseEmailEndsWith(users));

// ------------------------------------------------------------------------------------------------------------------------------------------


// Task3. Get an array of objects containing only the name and email of users whose name starts with 'C'.

// const arrayOfObjectsContaining = (users) => {
//     return users.filter((user) => {
//         return user.name.startsWith('C');
//     }).map((user) => {
//         return { name: user.name, email: user.email }
//     })
// }
// console.log(arrayOfObjectsContaining(users));



// ------------------------------------------------------------------------------------------------------------------------------------------


// Task4. Get an array of all user names in uppercase.

// const arrayOfAllUserNames = (users) => {
//     return users.map((user) => {
//        return user.name
//     })

// }
// console.log(arrayOfAllUserNames(users));
// ------------------------------------------------------------------------------------------------------------------------------------------


// Task5. Get the total number of users in the array.

// const totalNumberOfUsers = (users) => {
//     return users.length
// }
// console.log(totalNumberOfUsers(users));


// ------------------------------------------------------------------------------------------------------------------------------------------


// Task6. Get the sum of all user IDs.

// const sumOfAllUserIDs = (users) => {
//     let result = 0;
//     users.forEach((user) => {
//         result += user.id
//     })
//     return result
// }
// console.log(sumOfAllUserIDs(users));

// ------------------------------------------------------------------------------------------------------------------------------------------


// Task7. Get the user with the highest ID.

// userWithTheHighestID = (users) => {
//     users.sort((user, user2) => {
//         return user2.id - user.id
//     })
//     return users[0]
// }
// console.log(userWithTheHighestID(users));

// ------------------------------------------------------------------------------------------------------------------------------------------


// Task8. Get an array of all user names sorted in alphabetical order.

// let result = users.sort((a, b) => a.username.localeCompare(b.username))
// console.log(result);

// __________________________________________________________________________________________________________________________________________

// let result = users.sort((a, b) => {
//     return a.username < b.username ? -1 : 1;
// })
// console.log(result);
// ------------------------------------------------------------------------------------------------------------------------------------------


// Task9. Get an array of users whose name starts with the letter 'P'.

// const arrayOfUsersWhoseNameStarts = (users, index) => {
//     return users.filter((user) => {
//         return user.name.startsWith('P')
//     })

// }
// console.log(arrayOfUsersWhoseNameStarts(users));

// ------------------------------------------------------------------------------------------------------------------------------------------


// Task10. Get an array of users whose email contains the string 'org'.

// const usersWithEmailContainingOrg = (users) => {
//     let result = users.filter((user) => {
//         return user.email.includes('org')
//     })
//     return result
// }
// console.log(usersWithEmailContainingOrg(users));

// ------------------------------------------------------------------------------------------------------------------------------------------


// Task11. Get an array of users whose phone number starts with the area code '1-770'.


// Task12. Get an array of all user addresses as strings.


// Task13. Get an array of all user cities.


// Task14. Get an array of all user names in lowercase.


// Task15. Get the average length of all user names.


// Task16. Get an array of all user IDs multiplied by 2.


// Task17. Get the total number of characters in all user names.





