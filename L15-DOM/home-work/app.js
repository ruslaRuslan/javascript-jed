// T1: chat application yazirsan: window-da yazanda p-nin icerisinde yazilsin

// const pElement = document.querySelector('p')

// let m = ''
// window.onkeydown = (element) => {
//     m += element.key
//     pElement.innerHTML = m
// }
// -----------------------------------------------------------------------------------

// T2. bubble partlatmaq. 10 eded sar olsun, uzerinde gelende partlasin



const buble = document.createElement('div')
buble.className = 'buble'
document.body.prepend(buble)
buble.onmouseenter = () => {
    buble.remove()
}



const buble2 = document.createElement('div')
buble2.className = 'buble'
document.body.prepend(buble2)
buble2.onmouseenter = () => {
    buble2.remove()
}


const buble3 = document.createElement('div')
buble3.classList.add('buble')
document.body.prepend(buble3)
buble3.onmouseenter = () => {
    buble3.remove()
}

const buble4 = document.createElement('div')
buble4.classList.add('buble')
document.body.prepend(buble4)
buble4.onmouseenter = () => {
    buble4.remove()
}

const buble5 = document.createElement('div')
buble5.classList.add('buble')
document.body.prepend(buble5)
buble5.onmouseenter = () => {
    buble5.remove()
}

const buble6 = document.createElement('div')
buble6.classList.add('buble')
document.body.prepend(buble6)
buble6.onmouseenter = () => {
    buble6.remove()
}

const buble7 = document.createElement('div')
buble7.classList.add('buble')
document.body.prepend(buble7)
buble7.onmouseenter = () => {
    buble7.remove()
}

const buble8 = document.createElement('div')
buble8.classList.add('buble')
document.body.prepend(buble8)
buble8.onmouseenter = () => {
    buble8.remove()
}


const buble9 = document.createElement('div')
buble9.classList.add('buble')
document.body.prepend(buble9)
buble9.onmouseenter = () => {
    buble9.remove()
}

const buble10 = document.createElement('div')
buble10.classList.add('buble')
document.body.prepend(buble10)
buble10.onmouseenter = () => {
    buble10.remove()
}

// T3. img elave et. uzerine gelende "zoom" yazsam, sekili 2 defe boyutsun