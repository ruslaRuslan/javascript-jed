// const btn = document.querySelector('button')
// btn.onclick = () => {
//     if (btn.className.includes('active')) {
//         btn.className = btn.className.replace('active', '')
//     } else {

//         btn.className = 'active'
//     }

// }
// ---------------------------------------------------------------------------------------------------------------------------------
const btn = document.querySelector('button')
btn.onclick = () => {
    if (btn.classList.contains('active')) {
        btn.classList.remove('active')
    } else {
        btn.classList.add('active')
    }
}






