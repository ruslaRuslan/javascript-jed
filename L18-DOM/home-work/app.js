const url = `https://jsonplaceholder.typicode.com/users` // endpoint (REST API)
const root = document.getElementById('root')
fetch(url)
    .then((respons) => respons.json())
    .then((data) => {
        data.forEach((user) => {
            const p = document.createElement('p')
            p.textContent = user.name
            root.appendChild(p)
        });
    })

