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

function calculate() {
    let expression = document.getElementById('input_calculyator').value;
    let result = eval(expression);
    document.getElementById('result').textContent = result;
}


