// istifadecinin name-lerini cixartmaliyiq
// const url = `https://jsonplaceholder.typicode.com/users` // endpoint (REST API)
// const root = document.getElementById('root')
// fetch(url)
//     .then((respons) => respons.json())
//     .then((data) => {
//         data.forEach((user) => {
//             const p = document.createElement('p')
//             p.textContent = user.name
//             root.appendChild(p)
//         });
//     })
// -------------------------------------------------------------------------------------------------------------

// istifadecinin username-lerini cixartmaliyiq
// const url = `https://jsonplaceholder.typicode.com/users`

// const root = document.getElementById('root')
// fetch(url)
//     .then((respons) => respons.json())
//     .then((data) => {
//         data.forEach((user) => {
//             const p = document.createElement('p')
//             p.textContent = user.username
//             root.appendChild(p)
//         });
//     })

// -------------------------------------------------------------------------------------------------------------

// istifadecinin id-lerini ve name-lerini cixartmaliyiq

// const url = `https://jsonplaceholder.typicode.com/users`
// const root = document.getElementById('root')
// fetch(url)
//     .then((respons) => respons.json())
//     .then((data) => {
//         data.forEach((user) => {
//             const p = document.createElement('p')
//             p.textContent = `${user.id}  ${user.name}`
//             root.appendChild(p)
//         });
//     })

// -------------------------------------------------------------------------------------------------------------

// istifadecinin name-lerini ve company-lerinin name-lerini cixartmaliyiq


// const url = `https://jsonplaceholder.typicode.com/users`
// const root = document.getElementById('root')

// fetch(url)
//     .then((respons) => respons.json())
//     .then((data) => {
//         data.forEach((user) => {
//             const p = document.createElement('p')
//             p.innerHTML = `${user.name} <br/> <hr/> ${user.company.name }`

//             root.appendChild(p)
//         });
//     })

// -------------------------------------------------------------------------------------------------------------

// istifadecinin username-lerini ve email-lerini cixartmaliyiq


// const url = `https://jsonplaceholder.typicode.com/users`

// const root = document.getElementById('root')
// fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach((user) => {
//             const p = document.createElement('p')
//             p.innerHTML = `${user.username}   <br/> ${user.email} <hr/> `
//             root.appendChild(p)
//         });
//     })

// -------------------------------------------------------------------------------------------------------------

// istifadecinin name-lerini, id-lerini, username-lerini ve email-lerini cixartmaliyiq

// const url = `https://jsonplaceholder.typicode.com/users`
// const root = document.getElementById('root')

// root.style.cursor = 'pointer'

// fetch(url)
//     .then((respons) => respons.json())
//     .then((data) => {
//         data.forEach((user) => {
//             const p = document.createElement('p')
//             p.innerHTML = `${user.id}. ${user.name} <br/>  ${user.username} ${user.email} <hr/>`
//             root.appendChild(p)
//         });
//     })


