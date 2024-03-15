// ---------------------------------------------------01--------------------------------------------------------

// Calculator obyekti yaradin. 5 methodu olsun: read(), sum(), multiply(), divide(), subtract()
// read() -> prompt-la 2 eded alsin, ve onlari calculator-da proeprty kimi yadda saxlasin,
// qalanlari da neticeni console-a cixarsin.

// istifade edeceyiniz seylerden biri de   [ ] dynamic property-dir, ya da this.

// class Calculator {
//     constructor(num1, num2) {
//         this.num1 = num1
//         this.num2 = num2
//     }
//     read() {
//         this.num1 = +prompt('birinci eded ya reqem')
//         this.num2 = +prompt('ikinci eded ya reqem')
//     }
//     sum() {
//         return this.num1 + this.num2
//     }
//     multiply() {
//         return this.num1 * this.num2

//     }
//     divide() {
//         return this.num1 / this.num2
//     }
//     subtract() {
//         return this.num1 - this.num2
//     }
// }

// const calculator = new Calculator()
// calculator.read()
// console.log('sum', calculator.sum());
// console.log('multiply', calculator.multiply());
// console.log('divide', calculator.divide());
// console.log('subtract', calculator.subtract());


// ---------------------------------------------------02--------------------------------------------------------

// Car constructor-u yaradin. Biz hemin constructor-u cagiranda onun modelini, istehsal ilini, sahibini verek. Ve elbette, masinin surmek, tormozlamaq kimi methodlari olmalidir ki, onlari da verin. Meselen, surmek methodunu cagirsam ekrana,  ali zapi markali masinina qaz verir.

// class Car {
//     constructor(model, year, owner, stop, drive) {
//         this.model = model;
//         this.year = year;
//         this.owner = owner;
//         this.stop = stop;
//         this.drive = drive
//     }
//     surmek() {
//         console.log(`${this.owner} ${this.model} markali masina ${this.drive} verir`);
//     }
//     dayandirmaq() {
//         console.log(`${this.owner} ${this.model} markali masini ${this.stop}`);
//     }
// }
// const car = new Car("zapi", 2023, "ali", "dayandirir", "qaz")
// car.surmek()
// car.dayandirmaq()