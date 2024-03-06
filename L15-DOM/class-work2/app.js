// setTimeout -
// setInterval -

// setTimeout(() => {
//     console.log('Ali');
// }, 5000) // 5000 miili saniyeden sonra (5 saniyeden sonra ) "Ali" gostereceh
// // ----------------------------------------------------------------------------------

const id = setInterval(() => {
    console.log('Ali');
}, 3000)
const button = document.querySelector('button')

button.onclick = () => {
    clearInterval(id)
}
// // ----------------------------------------------------------------------------------
