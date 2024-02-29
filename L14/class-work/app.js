// -----------------------------------------------------------------------01-----------------------------------------------------------------
// const btn = document.querySelector('button')
// btn.onclick = () => {
//     if (btn.className.includes('active')) {
//         btn.className = btn.className.replace('active', '')
//     } else {

//         btn.className = 'active'
//     }

// }
// ____________________________________________________________________________________________________________________________________
// const btn = document.querySelector('button')
// btn.onclick = () => {
//     if (btn.classList.contains('active')) {
//         btn.classList.remove('active')
//     } else {
//         btn.classList.add('active')
//     }
// }

// ____________________________________________________________________________________________________________________________________


// const btn = document.querySelector('button')
// btn.onclick = () => {
//     btn.classList.toggle('active')
// }

// -----------------------------------------------------------------------01-----------------------------------------------------------------


// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_



// -----------------------------------------------------------------------02-----------------------------------------------------------------

// const btn = document.querySelector('button')
// const ModeContainer = document.getElementById('ModeContainer')

// btn.onclick = () => {
//     ModeContainer.classList.toggle('dark')
// }


// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_


// -----------------------------------------------------------------------03-----------------------------------------------------------------


// const btn = document.querySelector('button')
// const ModeContainer = document.getElementById('ModeContainer')
// const colorElement = document.getElementById('color')

// colorElement.onchange = (e) => {
//     ModeContainer.style.backgroundColor =e.target.value
// }

// btn.onclick = () => {
//     ModeContainer.classList.toggle('dark')
// }


// -----------------------------------------------------------------------03-----------------------------------------------------------------

// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_


// -----------------------------------------------------------------------04-----------------------------------------------------------------

// const ModeContainer = document.getElementById('ModeContainer')
// const btn = document.querySelector('button')

// btn.onclick = () => {
//     // ModeContainer.innerHTML += `<img width="200" height="150" src="./kitten.jpg" alt="">` //bu yalnisdi sadece yoxlamaq ve bimek ucun yazdim

//     const newImg = document.createElement('img')
//     newImg.src = './kitten.jpg'
//     newImg.alt = 'Cat at zoo'
//     ModeContainer.appendChild(newImg)

// }

// -----------------------------------------------------------------------04-----------------------------------------------------------------

// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_


// -----------------------------------------------------------------------05-----------------------------------------------------------------


// const ModeContainer = document.getElementById('ModeContainer')
// const btn = document.querySelector('button')

// const images = [
//     './kitten.jpg', './international-cat-day-2022-all-you-need-to-know-about-date-significance-history.webp', './фото youtube.png', './WhatsApp Image 2024-01-28 at 01.34.44_269571a6.jpg', './images.jpeg'
// ]

// btn.onclick = () => {
//     const pakizeninVerdiyiRandomIndex = Math.floor(Math.random() * images.length)
//     const newImg = document.createElement('img')
//     newImg.src = images[pakizeninVerdiyiRandomIndex]
//     newImg.alt = 'Cat at zoo'
//     ModeContainer.appendChild(newImg)

// }

// -----------------------------------------------------------------------05-----------------------------------------------------------------


// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_



// -----------------------------------------------------------------------06-----------------------------------------------------------------


// const ModeContainer = document.getElementById('ModeContainer')
// const btn = document.querySelector('button')

// const images = [
//     './kitten.jpg', './international-cat-day-2022-all-you-need-to-know-about-date-significance-history.webp', './фото youtube.png', './WhatsApp Image 2024-01-28 at 01.34.44_269571a6.jpg', './images.jpeg'
// ]

// btn.onclick = () => {
//     const pakizeninVerdiyiRandomIndex = Math.floor(Math.random() * images.length)
//     const newImg = document.createElement('img')
//     newImg.src = images[pakizeninVerdiyiRandomIndex]
//     newImg.onclick = () => {
//         newImg.remove()
//     }
//     newImg.alt = 'Cat at zoo'
//     ModeContainer.appendChild(newImg)

// }

// -----------------------------------------------------------------------06-----------------------------------------------------------------


// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_


// -----------------------------------------------------------------------07-----------------------------------------------------------------


// const ModeContainer = document.getElementById('ModeContainer')
// const btn = document.querySelector('button')

// const images = [
//     './kitten.jpg', './international-cat-day-2022-all-you-need-to-know-about-date-significance-history.webp', './фото youtube.png', './WhatsApp Image 2024-01-28 at 01.34.44_269571a6.jpg', './images.jpeg'
// ]

// btn.onclick = () => {
//     const pakizeninVerdiyiRandomIndex = Math.floor(Math.random() * images.length)
//     const newImg = document.createElement('img')
//     newImg.src = images[pakizeninVerdiyiRandomIndex]
//     newImg.onclick = () => {
//         ModeContainer.removeChild(newImg)

//     }
//     newImg.alt = 'Cat at zoo'
//     ModeContainer.appendChild(newImg)

// }



// -----------------------------------------------------------------------07-----------------------------------------------------------------


// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_


// -----------------------------------------------------------------------08-----------------------------------------------------------------

const ModeContainer = document.getElementById('ModeContainer')
const btn = document.querySelector('button')


const input = document.querySelector('input')


ModeContainer.onsubmit =(e)=>{
    e.preventDefault()
    console.log('subbmited');
}

input.onchange = (event) => {
    console.log(event);
}


// -----------------------------------------------------------------------08-----------------------------------------------------------------
