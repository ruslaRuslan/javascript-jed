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


// const obj = {
//     ad: 'ruslan',
//     yas: 23,
//     doing: () => {
//         console.log('salam');
//     },
//     car: undefined,
//     test: null
// }

// // obj -> json -> newObj
// // doing? car? test?
// const json = JSON.stringify(obj)
// console.log(json);

// const newObj = JSON.parse(json)
// console.log(newObj);
// -------------------------------------------------------------------------------------------------------------

// RESTful -> REST API

// AJAX -> Asynchronous JavaScript And Xml

// const url = `https://jsonplaceholder.typicode.com/users`
// const xhr = new XMLHttpRequest()

// xhr.open('GET', url)
// xhr.send()
// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//         console.log(xhr.response);
//     }

// }

// -------------------------------------------------------------------------------------------------------------


// const url = `https://jsonplaceholder.typicode.com/users`
// const xhr = new XMLHttpRequest()

// xhr.open('GET', url)
// xhr.send()
// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//         const data = JSON.parse(xhr.responseText)
//         console.log(data);
//     }

// }

// -------------------------------------------------------------------------------------------------------------

// const url = `https://jsonplaceholder.typicode.com/users`
// fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     })

// -------------------------------------------------------------------------------------------------------------


// const url = `https://jsonplaceholder.typicode.com/users`
// axios.get(url)
//     .then(({ data }) => {
//         console.log(data);
//     })

// -------------------------------------------------------------------------------------------------------------


// const url = `https://jsonplaceholder.typicode.com/users`
// async function a() {
//     const { data } = await axios.get(url)
//     console.log(data);
// }
// a()

// -------------------------------------------------------------------------------------------------------------

const url = `https://jsonplaceholder.typicode.com/users`
const xhr = new XMLHttpRequest()

xhr.open('GET', url)
xhr.send()

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        const users = JSON.parse(xhr.responseText)
        users.forEach((user) => {
            document.write(user.name)
            document.write(`<br/>`)
            document.write(user.username)
            document.write(`<br/>`)
            document.write(`<hr/>`)
        })
    }
}


