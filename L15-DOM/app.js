// event-driven programming  
// bir obyektimiz var hansi ki "event" obyekti bize verir

// triggered
// event fired - en cox istifade olunan-di
// handle -> hell etmek, yani bir nov ohtesinen gelmek

// -----------------------------------------------------------------------------01----------------------------------------------------



// const btn = document.querySelector('button')

// btn.onclick = () => {
// console.log('SALAM'); // fired sayilir
// }

// -----------------------------------------------------------------------------01----------------------------------------------------




// -----------------------------------------------------------------------------02----------------------------------------------------

// function showMessage(){
//     console.log('heyyy'); // handle bir nov hell etmek 
// }


// -----------------------------------------------------------------------------02----------------------------------------------------



// -----------------------------------------------------------------------------03----------------------------------------------------

// function changeColor(color) {
//     document.body.style.backgroundColor = color
// }

// -----------------------------------------------------------------------------03----------------------------------------------------


// -----------------------------------------------------------------------------04----------------------------------------------------

const btn = document.querySelector('button')

const func = () => {
    console.log('salam');
}



const func2 = () => {
    alert('salam')
}

const func3 =  () => { // #jpsd 
    console.log('heyyy@@22222!!!');
}

// addEventListener
btn.addEventListener('click', () => {
    console.log('heyyy!!!');
})

btn.addEventListener('click', func3) //#jpsd bura func3 - un referansi elave olunur - (yani func3-e menimsetdiyimiz prosess)
btn.addEventListener('click', () => {
    alert('RUSLAN!!!!!!');
})

btn.removeEventListener('click', func3) //#jpsd bura func3 - un referansi elave olunur - (yani func3-e menimsetdiyimiz prosess)


// -----------------------------------------------------------------------------04----------------------------------------------------
