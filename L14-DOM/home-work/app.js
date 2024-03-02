const body = document.body;
body.style.backgroundColor = ' black ';
body.style.color = '#fff'



const root = document.getElementById('root')

const divMain = document.createElement('div')
divMain.classList.add('d-flex')



const card1 = document.createElement('div')
const img = document.createElement('img')
const h = document.createElement('h2')
const p1 = document.createElement('p')
// p1.classList.add('center') 
h.classList.add('center') 
card1.classList.add('avto')
p1.classList.add('center')
p1.innerHTML = 'developer'
h.innerHTML = 'Ali'
img.src = './ali.jpg'
img.classList.add('withAndHeight')
card1.append(img, h, p1)
divMain.append(card1)




const card2 = document.createElement('div')
const img2 = document.createElement('img')
const h2 = document.createElement('h2')
const p2 = document.createElement('p')
h2.classList.add('center')
p2.classList.add('center')
card2.classList.add('avto')
p2.innerHTML = 'test2'
h2.innerHTML = 'bedbext_developer'
img2.src = './bedbext_developer.jpg'
img2.classList.add('withAndHeight')
card2.append(img2, h2, p2)
divMain.append(card2)




const card3 = document.createElement('div')
const img3 = document.createElement('img')
const h3 = document.createElement('h2')
const p3 = document.createElement('p')
h3.classList.add('center') 
p3.classList.add('center') 
card3.classList.add('avto')
p3.innerHTML = 'test3'
h3.innerHTML = 'duman'
img3.src = './duman.jpg'
img3.classList.add('withAndHeight')
card3.append(img3, h3, p3)
divMain.append(card3)



const card4 = document.createElement('div')
const img4 = document.createElement('img')
const h4 = document.createElement('h2')
const p4 = document.createElement('p')
h4.classList.add('center')
p4.classList.add('center')
card4.classList.add('avto')
p4.innerHTML = 'test4'
h4.innerHTML = 'js_oyrenen_shexs'
img4.src = './js_oyrenen_shexs.jpg'
img4.classList.add('withAndHeight')
card4.append(img4, h4, p4)
divMain.append(card4)






const card6 = document.createElement('div')
const img6 = document.createElement('img')
const h6 = document.createElement('h2')
const p6 = document.createElement('p')
h6.classList.add('center')
p6.classList.add('center')
card6.classList.add('avto')
p6.innerHTML = 'test5'
h6.innerHTML = 'qarli_daglar'
img6.src = './qarli_daglar.jpg'
img6.classList.add('withAndHeight')
card6.append(img6, h6, p6)
divMain.append(card6)



const card7 = document.createElement('div')
const img7 = document.createElement('img')
const h7 = document.createElement('h2')
const p7 = document.createElement('p')
h7.classList.add('center')
p7.classList.add('center')
card7.classList.add('avto')
p7.innerHTML = 'test6'
h7.innerHTML = 'qoca_cinar'
img7.src = './qoca_cinar.jpg'
img7.classList.add('withAndHeight')
card7.append(img7, h7, p7)
divMain.append(card7)


const card8 = document.createElement('div')
const img8 = document.createElement('img')
const h8 = document.createElement('h2')
const p8 = document.createElement('p')
h8.classList.add('center')
p8.classList.add('center')
card8.classList.add('avto')
p8.innerHTML = 'test7'
h8.innerHTML = 'visselka'
img8.src = './visselka.jpg'
img8.classList.add('withAndHeight')
card8.append(img8, h8, p8)
divMain.append(card8)





const card5 = document.createElement('div')
const img5 = document.createElement('img')
const h5 = document.createElement('h2')
const p5 = document.createElement('p')
h5.classList.add('center')
p5.classList.add('center')
card5.classList.add('avto')
p5.innerHTML = 'test8'
h5.innerHTML = 'novxani'
img5.src = './novxani.jpg'
img5.classList.add('withAndHeight')
card5.append(img5, h5, p5)
divMain.append(card5)

root.append(divMain)