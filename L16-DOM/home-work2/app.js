let button = document.getElementById('button')

button.showText = () => {
    let input = document.querySelector('input').value
    let span = document.querySelector('span')
    span.textContent += input + ' '
    document.querySelector('input').value = ''
    span.style.display = 'inline'

}

let button2 = document.getElementById('button2')

button2.onclick = () => {
    let span = document.querySelector('span')
    span.textContent = ''
}



