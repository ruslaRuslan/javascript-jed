
// ----------------------------------------------------------------------------------------------------------------------------------------
// let i = 0
// function a() {
//     i++
//     if (i < 5) {
//         a()
//     }
//     console.log('salam', i)
// }

// a()


// console salam 5
//         salam 5
//         salam 5
//         salam 5
//         salam 5
// recursion - adlanir
// ________________________________________________________________________________________________________________________________________



// ----------------------------------------------------------------------------------------------------------------------------------------
// let i = 0
// function a() {
//     i++
//     console.log('salam', i)
//     if (i < 5) {
//         a()
//     }
// }

// a()

// console salam 1
//         salam 2
//         salam 3
//         salam 4
//         salam 5
// recursion - adlanir
// ________________________________________________________________________________________________________________________________________



// ----------------------------------------------------------------------------------------------------------------------------------------
// a()
// function a(){
//     console.log('salam')
// }
// function b(){

// }
// function ruslan(){

// }
// console.log(window)
// a()

// hoisting - adlanir
// ________________________________________________________________________________________________________________________________________


// ----------------------------------------------------------------------------------------------------------------------------------------
// Expressions -> ifede
// to express -> ifade etmek

// funksiya ifadesi
// let a = function(){
//     console.log('function expressions')
// }
// a()
// ________________________________________________________________________________________________________________________________________


// ----------------------------------------------------------------------------------------------------------------------------------------
// callBack funksiyasi
// function makeDouble(number){
//     console.log(number * 2)
// }
// const test = makeDouble(2)

// console.log(test) //4
// ________________________________________________________________________________________________________________________________________




// ----------------------------------------------------------------------------------------------------------------------------------------

// function makeDouble(number) {
//     return number * 2
// }
// const test = makeDouble(8)

// console.log(test) // 16
// ________________________________________________________________________________________________________________________________________



// ----------------------------------------------------------------------------------------------------------------------------------------

// function makeDouble(number) {
//     return 'Ruslan'
// }
// const test = makeDouble()

// console.log(test) // Ruslan
// ________________________________________________________________________________________________________________________________________



// ----------------------------------------------------------------------------------------------------------------------------------------
// function pakize(number) {

//     return function () {
//         console.log(number * 2)

//     }

// }
// const test = pakize(4)
// test()
// consul  8
// JS-de funksiyadan funksiyanii return ede bilirik.....!
// ________________________________________________________________________________________________________________________________________




// ----------------------------------------------------------------------------------------------------------------------------------------

// function pakize() {

//     return '😆'

// }
// const test = pakize(4)
// console.log(test)  //😆
// ________________________________________________________________________________________________________________________________________



// ----------------------------------------------------------------------------------------------------------------------------------------
// function pakize() {

//     return function () {
//         console.log('Salam')
//     }

// }
// pakize()() //consul Salam
// ________________________________________________________________________________________________________________________________________


// ----------------------------------------------------------------------------------------------------------------------------------------
// function pakize(ed1, ed2) {

//     return function (ad) {
//         console.log(`${ad}, cemin budur: ${ed1 + ed2}`)
//     }

// }
// const cem = pakize(5, 4)
// cem('Ruslan')

// ________________________________________________________________________________________________________________________________________


// ----------------------------------------------------------------------------------------------------------------------------------------
// callBack 
// function a(b) {
//     console.log(b)
// }
// a('Ruslan')     //consul Ruslan
// ________________________________________________________________________________________________________________________________________



// ----------------------------------------------------------------------------------------------------------------------------------------
// function a(b) {
//     b()
// }

// a(
//     function () {
//         console.log('Salam') // Salam
//     }
// )
// ________________________________________________________________________________________________________________________________________



// ----------------------------------------------------------------------------------------------------------------------------------------

// function cem(ed1, ed2, callBack) {
//     let netice = ed1 + ed2
//     callBack(netice)
// }
// // anonymous function -> adsiz funksiya
// cem(12, 23, function (pakize) {
//     console.log(pakize)      //35
// })                    
// ________________________________________________________________________________________________________________________________________




// ----------------------------------------------------------------------------------------------------------------------------------------

// function cem(ed1, ed2) {
//     function callBack(pakize) {
//         console.log(pakize)       //35
//     }
//     let netice = ed1 + ed2
//     callBack(netice)    
// }

// cem(12, 23)   

// ________________________________________________________________________________________________________________________________________



// ----------------------------------------------------------------------------------------------------------------------------------------

// function cem(a, b) {
//     return a + b
// }

// const cem = (a, b) => {
//     return a + b
// }
// const cem = (a, b) => a + b
// const cixma = (a, b) => a - b
// const vurma = (a, b) => a * b
// const bolme = (a, b) => a / b

// let a = cem(12, 23)
// let b = cixma(12, 23)

// console.log(a)
// console.log(b)




// const a = function () { }      // function expression
// const b = () => { }            // function expression 
// ________________________________________________________________________________________________________________________________________





// ----------------------------------------------------------------------------------------------------------------------------------------

// const cem   = (a, b) => a + b
// const cixma = (a, b) => a - b
// const vurma = (a, b) => a * b
// const bolme = (a, b) => a / b


// console.log(cem(12, 23))       // 35
// console.log(cixma(12, 23))     // -11
// ________________________________________________________________________________________________________________________________________


// ----------------------------------------------------------------------------------------------------------------------------------------
// const cem = (a, b) => {
//     return a + b
// }
// const cixma = (a, b) => a - b
// const vurma = (a, b) => a * b
// const bolme = (a, b) => a / b
// const getNumber = () => +prompt('Ededi daxil edin')


// let ed1 = getNumber()
// let ed2 = getNumber()


// console.log(cem(12, 23))

// 35

// ________________________________________________________________________________________________________________________________________





// ----------------------------------------------------------------------------------------------------------------------------------------

// km mile cevirsin
// const kmToMile = (km) => {
//     return km * 1.61215678898
// }

// console.log(kmToMile(10));

// ________________________________________________________________________________________________________________________________________





// ----------------------------------------------------------------------------------------------------------------------------------------

// const kmToMile = (km) => km * 1.61215678898
// console.log(kmToMile(10));

// ________________________________________________________________________________________________________________________________________







// ----------------------------------------------------------------------------------------------------------------------------------------

// const kmToMile = (km) => console.log(km * 1.61215678898)
// kmToMile(10)

// ________________________________________________________________________________________________________________________________________


// ----------------------------------------------------------------------------------------------------------------------------------------

// 2 dene funksiya: 
// formalMan('Ruslan')        //Mr. Ruslan
// formalWoman ("Pakize")     // Mrs. Pakize


// const formalMan = (ad) => `Mr. ${ad}`
// const formalWoman = (ad) => `Mrs. ${ad}`

// console.log(formalMan(`Ruslan`))
// console.log(formalWoman(`Alina`))
// ________________________________________________________________________________________________________________________________________


// ----------------------------------------------------------------------------------------------------------------------------------------
// error function 

// const makeFormal = (cins) => {
//     if (cins === 'K') {
//         return (ad) => `Mr. ${ad}`
//     }
//     else if (cins === 'Q') {
//         return (ad) => `Mrs. ${ad}`
//     }
// }

// const formalMan = makeFormal('K')
// const formalWoman = makeFormal('Q')

// console.log(formalMan(`Ruslan`))
// console.log(formalWoman(`Alina`))
// ________________________________________________________________________________________________________________________________________


// ----------------------------------------------------------------------------------------------------------------------------------------



// const formal = (isMan, ad) => isMan ? `Mr. ${ad}` : `Mrs.${ad}`;

// let isIntiqamAli = false;
// console.log(formal(true, 'Ruslan'));
// console.log(formal(false, 'Alina'));

// ________________________________________________________________________________________________________________________________________



// let age = prompt("Сколько вам лет?", 18);
// let welcome;
// if (age < 18) {
//     welcome = function () {
//         alert("Привет");
//     };
// } else {
//     welcome = function () {
//         alert("Здравствуйте")
//     }
// }
// welcome()





// let age = prompt("Сколько вам лет?", 18);
// let welcome = (age < 18) ?
// function () { alert("Привет") } : function() {alert ("Здравствуйте")}
// welcome()






// let sum = (a, b) => a + b;
// alert(sum(1, 2))    // 3





// let double = n => n * 2;
// alert( double(3))  //6





// let sayHi = () => alert("Hello");
// sayHi()        // Hello





// let age = prompt("Сколько вам лет?", 18);
// let welcome = (age < 18) ? () => alert('Привет') : () => alert("Здравствуйте!")
// welcome()





// let sum = (a,b) => {
//     let result = a + b
//     return result; 
// }
// alert( sum(1,2))  //3








// function ask(question, yes, no) {
//     if(confirm(question)) yes()
//     else no()
// }

// ask(
//     "Вы согласны?",
//     function() { alert('Вы согласились');},
//     function() { alert('Вы отменили выполнение');}

// )





// alert("После этого сообщения ждите ошибку")
// [1,2].forEach(alert)





// let userName = prompt("Введите имя", "Алиса")
// let isTeaWanted = confirm("Вы хотите чаю?")
// alert("Посетитель: " + userName)
// alert("Чай:" + isTeaWanted)














//---------------------------------------------------------------------task-01-------------------------------------------------------------

// function logGreeting() {
//     let name = "Adınız"
//     console.log(name + " is a JS developer")
// }
// logGreeting()
// ________________________________________________________________________________________________________________________________________



//---------------------------------------------------------------------task-02-------------------------------------------------------------

// function logUserActivity(userName){
//    console.log(userName)
// }
// logUserActivity("Ruslan")
// logUserActivity("Ali")
// logUserActivity("Shamil")
// ________________________________________________________________________________________________________________________________________

//---------------------------------------------------------------------task-03-------------------------------------------------------------

// function maxNumber(a, b, c) {
//     let number = Math.max(a, b, c)
//     console.log('ən böyük ədəd: ' + number)
// }
// maxNumber(12, 23, 20);
// maxNumber(85, 23, 27);
// maxNumber(32, 30, 43);
// ________________________________________________________________________________________________________________________________________



//---------------------------------------------------------------------task-04-------------------------------------------------------------






// ________________________________________________________________________________________________________________________________________












//---------------------------------------------------------------------task-05-------------------------------------------------------------


// function minNumber(a, b) {
//     let number = Math.min(a, b)
//     console.log('ən kicik ədəd: ' + number)
// }
// minNumber(88,23)
// minNumber(80,96)



// ________________________________________________________________________________________________________________________________________




//---------------------------------------------------------------------task-06-------------------------------------------------------------

// function concatenateStrings(stringOne, stringTwo){
//     return stringOne + stringTwo
// }
// let result = concatenateStrings('Hi ' + 'brother')
// console.log(result)
// ________________________________________________________________________________________________________________________________________



//---------------------------------------------------------------------task-08-------------------------------------------------------------

// function isEven(){
//     let num = prompt("Напишите число которое делится на 2")
//     if(num % 2 === 0){
//         console.log(num + " Делится на 2")
//     }
//     else{
//         console.log("Неправильный ответ! Напишите число которое делится на 2")
//     }
// }
// isEven()


//---------------------------------------------------------------------task-08------------------------------------------------------------

// function isEven(num) {

//     if (num % 2 === 0) {
//         console.log(num + " Делится на 2")
//     }
//     else {
//         console.log(`Неправильный ответ! ${num} не делится на 2`)
//     }
// }

// isEven(8)
// isEven(9)

// ______________________________________________________________________________________________________________________________________



//---------------------------------------------------------------------task-09------------------------------------------------------------
// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0){
//             return false
//         }
//     }

//     return true
// }

// console.log(isPrime(7))
// console.log(isPrime(1))
// console.log(isPrime(0))
// ________________________________________________________________________________________________________________________________________














