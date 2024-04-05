const domains = [
    {
        id: 0, name: 'baki.az',
        owner: {
            name: 'ali',
            age: 17,
            gender: "man",
            job: 'fe'
        }
    },
    {
        id: 1, name: 'fe.az',
        owner: {
            name: 'aydan',
            age: 15,
            gender: "woman",
            job: 'be'
        }
    },
    {
        id: 2, name: 'fs.com',
        owner: {
            name: 'tesla',
            age: 15,
            gender: "woman",
            job: 'fs'
        }
    },
    {
        id: 3, name: 'zoo.com',
        owner: {
            name: 'zabilia',
            age: 20,
            gender: "man",
            job: 'qa'
        }
    },
    {
        id: 4, name: 'zatachivak.com',
        owner: {
            name: 'pakitotunak',
            age: 28,
            gender: "man",
            job: 'designer'
        }
    },
]



// 1. document-e baki.az - ali - man  yazdirmalisiniz. [forEach]

// domains.forEach((domain) => {
//     if (domain.name === 'baki.az') {
//         document.write(`${domain.name} - ${domain.owner.name} - ${domain.owner.gender} `)
//     }
// })

// ---------------------------------------------------------------------------------------------------------------------------------------

// 2. gender-i woman olan domain-leri massive yigin. Massivi console-a yazdirin. (filter)

// let womanDomains = domains.filter((domain) => {
//     return domain.owner.gender === 'woman'
// })
// console.log(womanDomains)

// ---------------------------------------------------------------------------------------------------------------------------------------


// 3. id-si 3 olan domaini tapin. (find)


// const foundId3 = domains.find((domain) => {
//     return domain.id === 3
// })
// console.log(foundId3.owner)

// _____________________________________________________________________________________________________________________________________


// chatGBT -> kodu

// const foundDomain = domains.find((domain) => {
//     return domain.id === 3;
// });

// if (foundDomain) {
//     console.log(foundDomain.owner);
// } else {
//     console.log('Домен с указанным id не найден.');
// }


// ---------------------------------------------------------------------------------------------------------------------------------------


// 4. owner-nin adi 'a' ile biten domain-leri massive yigin. (filter, endsWith)

// const ownerFilter = domains.filter((domain) => domain.owner.name.endsWith('a'))
// console.log(ownerFilter);

// ---------------------------------------------------------------------------------------------------------------------------------------


// 5. domain-lerin sahiblerinin adlari oldugu massiv yaradin. (map) ['ali', 'aydan', 'tesla', 'zabilia', 'pakitotunak']


// const domainsMap = domains.map((domain) => domain.owner.name)
// console.log(domainsMap)

// ---------------------------------------------------------------------------------------------------------------------------------------


// 6. owner-nin yasi (15-20) arasi olan (15den boyuk, 20den kicik) domain-leri tapin. (filter)

// const domainsFilter = domains.filter((domain) => {
//     if (domain.owner.age > 15 && 20 >= domain.owner.age) {
//         return true
//     }
//     return false
// })
// console.log(domainsFilter)


// ---------------------------------------------------------------------------------------------------------------------------------------


// 7. owner-inin job-u designer olan domainin index-ni tapin. (findIndex)

const designerDomains = domains.findIndex((domain) => domain.owner.job === 'designer')
console.log('Index of the designer domain:', designerDomains);

// ---------------------------------------------------------------------------------------------------------------------------------------


// 8. ancaq owner-lerinin melumatlarinin oldugu massiv yaradin. (map)

// 9. .com ile biten domain-leri tapin. (filter)

// 10. .az ile biten domain-lerin owner-larinin adlari oldugu massiv yaradin. (filter, map)

// 11. .az ile biten domain-lerin owner-larinin yaslarinin cemini hesablayin (filter, forEach)

// 12. en uzun ada malik olan domain-i tapin (forEach)

// 13. en yasli owner-e sahib olan domain-i tapin. (forEach)

// 14. ozunun ve ya owner-nin adinda n olan domain-leri tapin. (filter)

// 15. domainin esas hissesi (.com-a qeder olan hissesi) oz owner-nin job-una beraber olan domain-leri tapin. (filter)

