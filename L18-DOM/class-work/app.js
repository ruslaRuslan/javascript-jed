const url = `https://jsonplaceholder.typicode.com/users` // endpoint (REST API)
// REST API -> backend ile front-end arasinda olan elaqeni temin edir!
fetch(url)
    .then((respons) => respons.json())
    .then((data) =>{
        console.log(data);
    })

