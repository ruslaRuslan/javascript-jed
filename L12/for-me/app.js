// #task object

const calculator = {
    read: function () {
        const num1 = +prompt('eded1-i daxil edin:')
        const num2 = +prompt('eded2-i daxil edin:')
        calculator.num1 = num1
        calculator.num2 = num2

    },
    sum: function () {
        calculator['read']()
        console.log(calculator['num1'] + calculator['num2']);
    },
    multyply: function () {

    },
    divide: function () {

    },
    subtract: function () {

    },

}
calculator.sum()

// Calculyator obyekti yaradin. 5 metodu olsun: read(), sum(),multiply(),divide(),subtract()


// read() -> prompt - la 2 eded alsin, ve onlari calculator - da property kimi yada saxlasin,


// qalanlari da neticeni console - a cixartsin.


// istifade edeceyiniz seylerden biri de [] dynamic property - dir, ya da this.



