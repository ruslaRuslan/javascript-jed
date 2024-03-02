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

// const btn = document.querySelector('button')

// const func = () => {
//     console.log('salam');
// }



// const func2 = () => {
//     alert('salam')
// }

// const func3 =  () => { // #jpsd 
//     console.log('heyyy@@22222!!!');
// }

// // addEventListener
// btn.addEventListener('click', () => {
//     console.log('heyyy!!!');
// })

// btn.addEventListener('click', func3) //#jpsd bura func3 - un referansi elave olunur - (yani func3-e menimsetdiyimiz prosess)
// btn.addEventListener('click', () => {
//     alert('RUSLAN!!!!!!');
// })

// btn.removeEventListener('click', func3) //#jpsd bura func3 - un referansi elave olunur - (yani func3-e menimsetdiyimiz prosess)


// -----------------------------------------------------------------------------04----------------------------------------------------


// -----------------------------------------------------------------------------05----------------------------------------------------

// _________________________________________________________________________________________________________________________________
// const btn = document.querySelector('button')
// btn.onclick = (e) => {
//     e.target.style.backgroundColor = 'red'; //dinamikdi 
//     btn.style.backgroundColor = 'red'; //dinam deyil dinamik olani yazmax tovsiye olunur
// }
// _________________________________________________________________________________________________________________________________

// const btn = document.querySelector('button')

// function makeTextRed(e) {
//     e.target.style.color = 'red'
// }
// // btn.onclick = makeTextRed // 1 defe klikleyende isleyir
// // btn.ondblclick = makeTextRed // 2 defe klikleyende isleyir
// btn.oncontextmenu = makeTextRed // mishin sag knopkasini klikleyende isleyir


// -----------------------------------------------------------------------------05----------------------------------------------------


// -----------------------------------------------------------------------------06----------------------------------------------------



// const btn = document.querySelector('button')
// const div = document.querySelector('div')


// function makeTextRed(e) {
//     e.target.style.color = 'red'
// }

// window.onmousemove = (event) => {
//     div.style.width = '20px'
//     div.style.height = '20px'
//     div.style.top = (event.y - 10) + 'px'
//     div.style.left = (event.x - 10) + 'px'
// }

// window.onclick = (e) => {
// div.style.width = '30px'
// div.style.height = '30px'

// }

// -----------------------------------------------------------------------------06----------------------------------------------------


// -----------------------------------------------------------------------------07----------------------------------------------------

// const btn = document.querySelector('button')
// const div = document.querySelector('div')


// function makeTextRed(e) {
//     e.target.style.color = 'red'
// }

// window.onmousemove = (event) => {
//     div.style.width = '20px'
//     div.style.height = '20px'
//     div.style.top = (event.y - 10) + 'px'
//     div.style.left = (event.x - 10) + 'px'
// }

// window.onclick = (e) => {
//     div.style.width = '30px'
//     div.style.height = '30px'
//  setTimeout(() => {
//     div.style.width = '20px'
//     div.style.height = '20px'
//  }, 100);

// }



// -----------------------------------------------------------------------------07----------------------------------------------------

// const btn = document.querySelector('button')
// const div = document.querySelector('div')


// function makeTextRed(e) {
//     e.target.style.color = 'red'
// }

// window.onmousemove = (event) => {
//     div.style.width = '20px'
//     div.style.height = '20px'
//     div.style.top = (event.y - 10) + 'px'
//     div.style.left = (event.x - 10) + 'px'
// }

// window.onclick = (e) => {
//     div.style.transform = "scale(1.5)"
//     setTimeout(() => {
//         div.style.transform = "scale(0.75)"
   
//     }, 100);

// }


// -----------------------------------------------------------------------08------------------------------------------------------------


// window.onkeyup = ()=>{
//     console.log('salam');
// }

// ______________________________________________________________________________________________________________________________



// -----------------------------------------------------------------------------08----------------------------------------------------



// -----------------------------------------------------------------------------09----------------------------------------------------





// -----------------------------------------------------------------------------09----------------------------------------------------
