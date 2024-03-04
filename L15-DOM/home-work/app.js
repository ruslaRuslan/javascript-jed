// T1: chat application yazirsan: window-da yazanda p-nin icerisinde yazilsin

const pElement = document.querySelector('p')

let m = ''
window.onkeydown = (element) => {
    m += element.key
    pElement.innerHTML = m
}

// T2. bubble partlatmaq. 10 eded sar olsun, uzerinde gelende partlasin



// T3. img elave et. uzerine gelende "zoom" yazsam, sekili 2 defe boyutsun