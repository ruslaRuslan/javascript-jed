// ---------------------------------------------------01--------------------------------------------------------
// Calculator obyekti yaradin. 5 methodu olsun: read(), sum(), multiply(), divide(), subtract()
// read() -> prompt-la 2 eded alsin, ve onlari calculator-da proeprty kimi yadda saxlasin,
// qalanlari da neticeni console-a cixarsin.

// istifade edeceyiniz seylerden biri de   [ ] dynamic property-dir, ya da this.

class Calculator {
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2
    }
    read() {
        this.num1 = +prompt('birinci eded ya reqem')
        this.num2 = +prompt('ikinci eded ya reqem')
    }
    sum() {
        return this.num1 + this.num2
    }
    multiply() {
        return this.num1 * this.num2

    }
    divide() {
        return this.num1 / this.num2
    }
    subtract() {
        return this.num1 - this.num2
    }
}

const calculator = new Calculator()
calculator.read()
console.log('sum', calculator.sum());
console.log('multiply', calculator.multiply());
console.log('divide', calculator.divide());
console.log('subtract', calculator.subtract());




