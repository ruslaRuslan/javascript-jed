// JavaScript Object Notation
// const ad = prompt('adini daxil et')
// const yas = +prompt('yasini daxil et')
// const obj = { ad, yas }
// const json = JSON.stringify(obj)
// console.log(json);


// -------------------------------------------------------------------------------------------------------------

// const ad = prompt('adini daxil et')
// const yas = +prompt('yasini daxil et')
// const obj = { ad, yas }
// const jsonFromBackend = `{"ad":"ruslan","yas":23}`
// const human = JSON.parse(jsonFromBackend)
// console.log(human);

// -------------------------------------------------------------------------------------------------------------


const obj = {
    ad: 'ruslan',
    yas: 23,
    doing: () => {
        console.log('salam');
    },
    car: undefined,
    test: null
}

// obj -> json -> newObj
// doing? car? test?
const json = JSON.stringify(obj)
console.log(json);

const newObj = JSON.parse(json)
console.log(newObj);


