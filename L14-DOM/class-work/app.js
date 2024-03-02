// -------------------------------------------------------------------01-----------------------------------------------------------------

// const root = document.getElementById('root')
// const button = document.querySelector('button')

// button.onclick = () => {
// root.classList.add('red')
// root.classList.add('active')
// }

// button.oncontextmenu = ()=>{
//     root.classList.remove('red')

// }

// -------------------------------------------------------------------01-----------------------------------------------------------------


// -------------------------------------------------------------------02-----------------------------------------------------------------


// const root = document.getElementById('root')
// const button = document.querySelector('button')

// button.onclick = () => {
//     root.classList.toggle('red')
// }


// -------------------------------------------------------------------02-----------------------------------------------------------------


// -------------------------------------------------------------------03-----------------------------------------------------------------

const root = document.getElementById('root')
const button = document.querySelector('button')

const img = document.createElement('img')
img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg'
img.classList.add('lion')
root.append(img)

button.onclick = () => {
img.remove()
}

// -------------------------------------------------------------------03-----------------------------------------------------------------
