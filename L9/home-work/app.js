// const car = {model:'zapi',il:1969, olke: 'russiya'}
// T1. car obyekti yarat (model, il, olke)
// car2 yarat, ve kopyala (modeli ve il deyis)
// Her iki obyekti console-a cixart. 

const car = {
    model: 'zapi',
    il: 1969,
    olke: 'Azerbaycan'
}

car2 = { ...car }

car2 = {
    model: 'BMW',
    il: 2024,
}
console.log(car.model, car.il)
console.log(car2.model, car.il)



// -----------------------------------------------
// T2. Bir Arrow  funksiya yarat. Ona car obyektini verim. O console-a bele bir mesaj cixartsin:
// showInfo(car)
// -> zapi markali masin, 1969-da russiya-da istehsal olunub.


// -----------------------------------------------
// T3. showAge(car) // Verilen masinin 55 yasi var.


// -----------------------------------------------

// T4. car obyektine yeni bir property-e elave et. sahib: {ad:'Ruslan', soyad:'Zeynalov', dogumIl:2000}


// -----------------------------------------------

// T5. showOwner(car) // zapi markali masinin sahibi Zeynalov Ruslandir. O 2000-ci ilde dogulub.


// -----------------------------------------------

// T6. showAgeDifferences(car) // sahibinin dogum ili ile masinin il ferqi. (sahib 2000, zapi 1969) -> 31 il.


// -----------------------------------------------

// T7*. Yeni bir car3 obyekti yarat Spread (...) operatoru ile. Sahib melumatlarini deyis. (sahib: ali, isiyev, 1995)



// -----------------------------------------------

// T8. isEqual(car, car3) -> bu funksiya 2 obyekt alir, onlar beraberdirse, console-a "Bunlar eyni obyektlerdir " , eks halda "Bunlar ferqli obyektlerdir"



// -----------------------------------------------

// T9. isSameName(car, car2) -> bu funksiya 2 obyekt alir, obyektlerin modelleri eynidirse "Bunlar eyni modeldirler", eks halda "bunlar ferqli modeldirler" mesajini console-a cixarsin.




// -----------------------------------------------

// T10. isSameOwner(car, car3)-> bu funksiya 2 obyekt alir, obyektlerin sahiblerinin adlari eynidirse "Bunlar eyni adama mexsusdur", eks halda "bunlar ferqli adamlara mexsusdur" mesajini console-a cixarsin.


