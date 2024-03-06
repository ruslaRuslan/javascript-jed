// setTimeout -
// setInterval -

// setTimeout(() => {
//     console.log('Ali');
// }, 5000) // 5000 miili saniyeden sonra (5 saniyeden sonra ) "Ali" gostereceh 

// // ----------------------------------------------------------------------------------

const id = setTimeout(() => {
    console.log('Ali');
}, 3000) //her 3 saniyeden bir "Ali" gostereceh
const button = document.querySelector('button')

button.onclick = () => {
    clearTimeout(id)
}  //button-a klik edende setInterval-da olan prosesi dayandirir

// // ----------------------------------------------------------------------------------
