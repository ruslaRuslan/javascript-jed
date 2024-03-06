// setTimeout - bir defe isi gorur 
// setInterval - her defesinde isi gorur

// setTimeout(() => {
//     console.log('Ali');
// }, 5000) // 5000 miili saniyeden sonra (5 saniyeden sonra ) "Ali" gostereceh 

// // ----------------------------------------------------------------------------------

// const id = setTimeout(() => {
//     console.log('Ali');
// }, 3000) //her 3 saniyeden bir "Ali" gostereceh
// const button = document.querySelector('button')

// button.onclick = () => {
//     clearTimeout(id)
// }  //button-a klik edende setInterval-da olan prosesi dayandirir

// // ----------------------------------------------------------------------------------

// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

// const h1 = document.querySelector('h1')
// const removeBtn = document.querySelector('button')
// const userNameFromLocaleStorage = localStorage.getItem('userName')
// if (userNameFromLocaleStorage) {

//     h1.textContent = userNameFromLocaleStorage
// } else {
//     h1.textContent = getName()
// }


// removeBtn.onclick = () => {
//     localStorage.removeItem('userName')
// }

// function getName() {
//     const ad = prompt('adi daxi edin')
//     localStorage.setItem("userName", ad)
//     return ad
// }

// ------------------------------------------------------------------------------------