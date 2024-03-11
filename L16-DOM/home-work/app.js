let myNodeList = document.getElementsByTagName('li')
let i;
for (i = 0; i < myNodeList.length; i++) {
    let span = document.createElement('span')
    span.textContent = "❌"
    span.className = 'close'
    myNodeList[i].appendChild(span)
}

let list = document.querySelector('ul')
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'li') {
        ev.target.classList.toggle('checked')
    }
}, false)

function newElement() {
    let li = document.createElement('li')
    let inputValue = document.getElementById('myInput').value
    let t = document.createTextNode(inputValue)
    li.appendChild(t)
    if (inputValue === '') {
        alert('You must write something')
    } else {
        document.getElementById('myUl').appendChild(li)
    }
    document.getElementById('myInput').value = ''
    let span = document.createElement('span')
    span.textContent = "❌"
    span.className = 'close'
    span.onclick = function(){
        console.log(this);
        this.parentElement.remove()
    }
    li.appendChild(span)

   
}

