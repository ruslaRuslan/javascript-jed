// const images = [
//     "https://kartinki.pics/uploads/posts/2022-03/1646756682_4-kartinkin-net-p-kartinki-s-tekstom-so-smislom-4.jpg",

//     "https://cache.desktopnexus.com/thumbseg/2019/2019237-bigthumbnail.jpg",

//     "https://cache.desktopnexus.com/thumbseg/285/285475-bigthumbnail.jpg",

//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKkG0_MbNtz8hVJ3d8jYdq7jVnAkfAi4V2JPcIf5q84uCb1zf04i-uaF_5taWEXsGVCNk&usqp=CAU",

//     "https://i.pinimg.com/736x/4b/c7/82/4bc782c53c9007994ac362258824900e.jpg"

// ]

// const randomIndex = parseInt(Math.random() * 5)
// document.body.style.backgroundImage = `url("${images[randomIndex]}")`
// console.log(randomIndex);

// document.body.style.backgroundImage = `url("${images[0]}")` //bir sekli secmek ucun
// ---------------------------------------------------------------------------------------------------------------------------------------


const inputAd = document.getElementById('ad')
const goster = document.getElementById('goster')
const boyuk = document.getElementById('boyuk')
const kicik = document.getElementById('kicik')
const ilkHerifBoyuk = document.getElementById('ilkHerifBoyuk')

const calculator = () => {
const value = inputAd.value
boyuk.textContent = value.toUpperCase()
kicik.textContent = value.toLowerCase()
ilkHerifBoyuk.textContent = value[0].toUpperCase() + value.slice(1).toLowerCase()
}