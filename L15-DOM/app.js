// event-driven programming  
// bir obyektimiz var hansi ki "event" obyekti bize verir

// triggered
// event fired - en cox istifade olunan-di
// handle -> hell etmek, yani bir nov ohtesinen gelmek

const btn = document.querySelector('button')

btn.onclick = () => {
console.log('SALAM'); // fired sayilir
}