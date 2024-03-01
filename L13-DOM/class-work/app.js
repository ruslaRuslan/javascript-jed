// DOM -> Document Object Model (html dokumentinin obyekt modeli)
// console.log(document);
// console.dir(document.body.style.backgroundColor = prompt('isdediyin rengi yaz'))

// -------------------------------------------------------------
//<button onclick="rengDeyis()">click me</button> asqidakiler buna aitdir

// const rengDeyis = () => {
//     console.dir(document.body.style.backgroundColor = prompt('isdediyin rengi teyin et'))
// }


// ---------------------------------------------------------------
// function kopyala(){
//     navigator.clipboard.writeText(' ALI ❤ RUSLAN ')
// }


// console.log(document.getElementById('container'));
// console.dir(document.getElementById('container'))
// --------------------------------------------------------------
document.getElementById('container').innerHTML = prompt('yaz')
// ______________________________________________________________


// <div id="container">bura yaz</div> asaqidakiler buna aitdir
const container = document.getElementById('container')

container.innerText = prompt('yaz')
container.style.color = prompt('isdediyin rengi tekste teyin et')

const con = document.querySelector("")   //ilk secdiyi
const cons = document.querySelectorAll("") //butun secdikleri
input.value = prompt('ad yaz ')

const input = document.querySelector('input')
const getValue = () => {
    console.log(input.value);
}
