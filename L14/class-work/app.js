const btn = document.querySelector('button')
btn.onclick = () => {
    if (btn.className.includes('active')) {
        btn.className = btn.className.replace('active', '')
    } else {

        btn.className = 'active'
    }

}