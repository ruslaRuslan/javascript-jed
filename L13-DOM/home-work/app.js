// const calculyator = () => {
//     let num1 = document.getElementById('num1');
//     let num2 = document.getElementById('num2');
//     let operator = document.getElementById('operator')
//     let result;

//     switch (operator.value) {
//         case '+':
//             result = num1.value + num2.value;
//             break;
//         case '-':
//             result = num1.value - num2.value;
//             break;
//         case '*':
//             result = num1.value * num2.value;
//             break;
//         case '/':
//             result = num1.value / num2.value;
//             break;
//         default:
//             result = 'Operator teyin edin'
//     }
//     alert(result);
// }

// ---------------------------------------------------------------------------------------------------------------------------------------
// 4 ədəd button olsun. Hansına clickləsəm bodynin rəngi o rəngdə olsun.
// elementi querySelector ile alin. Ve onun onclick propertysinden istifade edin. onClick property-si bir funksiya alir

// function changeClr(color) {
//     document.body.style.backgroundColor = color
//     // console.dir(red)
// }

// ---------------------------------------------------------------------------------------------------------------------------------------


// Bir input yaradin.Hemin input - a 10px ile 100px araliginda bir deyer yaza bilim ve goster button - una clickleyenden sonra yazdigim deyer, asagida olan cevrenin width ve height - i olsun.
// Ve en asagida yazilan sahede  bu cevrenin olcusu haqqinda melumatlar verilsin.Sahesi uzunlugu ve s.
//     pi = 3 goturun.ya da Math.PI ile isleyin.

//         Dustur: cevrenin uzunlugu: 2 * pi * r
// Cevrenin sahesi: pi * r *


// const calculateCircle = () => {
//     const widthANDheight = document.getElementById('widthANDheight').value
//     let kruq = document.getElementById('daire')
//     kruq.style.width = widthANDheight + 'px'
//     kruq.style.height = widthANDheight + 'px'
//     let uzunluq = document.getElementById('uzunluq')
//     let sahe = document.getElementById('sahe')
//     uzunluq.textContent = widthANDheight * Math.PI
//     sahe.textContent = widthANDheight * widthANDheight * Math.PI / 4
//     console.dir(sahe)
//     console.dir(uzunluq)
//     console.dir(kruq)
// }

// ---------------------------------------------------------------------------------------------------------------------------------------


// #task
// randomBackgroundImage funksionalligi elave edin.Sayti her defesinde refresh edende arxa fon shekili ferqli olsun. (5 eded sekil goturun, random formada body - nin background - image - ne verin)







// ---------------------------------------------------------------------------------------------------------------------------------------

// #task
// HTML - de id - si root olan element yaradin.JS vasitesile  prompt - dan tag adini ve icerisindeki sozu alin.Daha sonra hemin tag ve icerisindeki sozu root - a yazdirin.Mes: eger tag - a p, metne salam yazsam, root - un icerisinde < p > salam</p > olmus olsun.

// Root elementini seç
const rootElement = document.getElementById('root');

// Kullanıcıdan tag adını ve içeriğini al
const tag = prompt("Tag adını girin (örneğin: p, h1, div):");
const content = prompt("İçeriği girin:");

// Yeni bir element oluştur
const newElement = document.createElement(tag);

// Elementin içeriğini ayarla
newElement.textContent = content;

// Root elementine yeni elementi ekle
rootElement.appendChild(newElement);





