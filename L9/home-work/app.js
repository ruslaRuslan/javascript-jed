// // const car = {model:'zapi',il:1969, olke: 'russiya'}
// // T1. car obyekti yarat (model, il, olke)
// // car2 yarat, ve kopyala (modeli ve il deyis)
// // Her iki obyekti console-a cixart. 

// const car = {
//     model: 'zapi',
//     il: 1969,
//     olke: 'Russiya'
// }

// let car2 = { ...car }

// car2.model = 'BMW'
// car2.il = 2024
// console.log(car)
// console.log(car2)



//---------------------------------------------------------------------------------------------------------------------------------------
// // T2. Bir Arrow  funksiya yarat. Ona car obyektini verim. O console-a bele bir mesaj cixartsin:
// // showInfo(car)
// // -> zapi markali masin, 1969-da russiya-da istehsal olunub.

// const showInfo = (car) => console.log(`${car.model} markali masin, ${car.il}-da ${car.olke}-da istehsal olunub.`)
// showInfo(car)

// // ----------------------------------------------------------------------------------------------------------------------------------------

// // T3. showAge(car) // Verilen masinin 55 yasi var.

// const showAge = (car) => {
//     let result = 2024 - car.il;
//     console.log(`Verilen masinin ${result} yasi var`)
// }
// showAge(car)

// // ---------------------------------------------------------------------------------------------------------------------------------------
// // ---------------------------------------------------------------------------------------------------------------------------------------


// // T4. car obyektine yeni bir property-e elave et. sahib: {ad:'Ruslan', soyad:'Zeynalov', dogumIl:2000}

// car.sahib = { ad: 'Ruslan', soyad: 'Zeynalov', dogumil: 2000 }

// // ---------------------------------------------------------------------------------------------------------------------------------------


// // T5. showOwner(car) // zapi markali masinin sahibi Zeynalov Ruslandir. O 2000-ci ilde dogulub.
// const showOwner = (car) => {
//     console.log(`${car.model} markali masinin sahibi ${car.sahib.soyad} ${car.sahib.ad}dir. O ${car.sahib.dogumil}-ci ilde dogulub`)
// }
// showOwner(car)
//---------------------------------------------------------------------------------------------------------------------------------------


// // T6. showAgeDifferences(car) // sahibinin dogum ili ile masinin il ferqi. (sahib 2000, zapi 1969) -> 31 il.
// const showAgeDifferences = (car) => {
//     let result;
//     if (car.sahib.dogumil > car.il) {
//         result = car.sahib.dogumil - car.il
//     } else {
//         result = car.il - car.sahib.dogumil
//     }
//     console.log(`Sahibinin dogum ili ile masinin il ferqi. ${result} il`)
// }
// showAgeDifferences(car)
//--------------------------------------------------------------------------------------------------------------------------------------


// // T7*. Yeni bir car3 obyekti yarat Spread (...) operatoru ile. Sahib melumatlarini deyis. (sahib: ali, isiyev, 1995)



// const car3 = { ...car };
// car3.sahib = { ...car.sahib }  // tam kopya
// car3.sahib.ad = 'Ali';
// car3.sahib.soyad = 'Isiyev';
// car3.sahib.dogumil = 1995;
// console.log(car3)
// console.log(car)

//---------------------------------------------------------------------------------------------------------------------------------------


// // T8. isEqual(car, car3) -> bu funksiya 2 obyekt alir, onlar beraberdirse, console-a "Bunlar eyni obyektlerdir " , eks halda "Bunlar ferqli obyektlerdir"

// const isEqual = (car, car3) => {
//     if (car === car3) {
//         console.log("Bunlar eyni obyektlerdir")
//     } else {
//         console.log("Bunlar ferqli obyektlerdir")
//     }
// }
// isEqual(car, car3)

//---------------------------------------------------------------------------------------------------------------------------------------


// // T9. isSameName(car, car2) -> bu funksiya 2 obyekt alir, obyektlerin modelleri eynidirse "Bunlar eyni modeldirler", eks halda "Bunlar ferqli modeldirler" mesajini console-a cixarsin.

// function isSameName(car, car2) {
//     if (car.model === car2.model) {
//         console.log("Bunlar eyni modeldirler");
//     } else {
//         console.log("Bunlar ferqli modeldirler");
//     }
// }
// isSameName(car, car2);

//---------------------------------------------------------------------------------------------------------------------------------------


// // T10. isSameOwner(car, car3)-> bu funksiya 2 obyekt alir, obyektlerin sahiblerinin adlari eynidirse "Bunlar eyni adama mexsusdur", eks halda "bunlar ferqli adamlara mexsusdur" mesajini console-a cixarsin.


// const isSameOwner = (car, car3) => {
//     if (car.sahib.ad == car3.sahib.ad) {
//         console.log("Bunlar eyni adama mexsusdur")
//     } else {
//         console.log("bunlar ferqli adamlara mexsusdur");
//     }
// }
// isSameOwner(car, car3)







//---------------------------------------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------------------------------------


// // T1. human obyekti yarat (ad, soyad, dogumIl)
// // human2 yarat, ve kopyala (ad, soyad, dogumIl -> deyis)
// let human = {
//     ad: 'Ruslan',
//     soyad: 'Zeynalov',
//     dogumil: 2000,
// }

// let human2 = { ...human }
// human2.ad = 'Ali';
// human2.soyad = 'Isiyev';
// human2.dogumil = 1995;

// console.log(human)
// console.log(human2)



//---------------------------------------------------------------------------------------------------------------------------------------



// // T2. Bir Arrow  funksiya yarat. Ona human obyektini verim. O console-a bele bir mesaj cixartsin:
// showInfo(human) -> Men Ruslan Zeynalov 2000-ci ilde dogulmusam.

// let showInfo = (human) => {
//     console.log(`Men ${human.ad} ${human.soyad} ${human.dogumil}-ci ilde dogulmusam`)
// }
// showInfo(human)
//---------------------------------------------------------------------------------------------------------------------------------------



// // T3. human obyektine yeni bir property-e elave et. ish: {ad:'developer', shirket:'NARTech', baslangicIl: 2024}

// human.ish = { ad: 'developer', shirket: 'NARTech', baslangicIl: 2024 }



//---------------------------------------------------------------------------------------------------------------------------------------



// // T4. showJob(human) // Men NARTech shirketinde developer kimi isleyirem. Ise 2024-ci ilde baslamisam

// showJob = (human) => console.log(`Men ${human.ish.shirket} shirketinde ${human.ish.ad} kimi isleyirem. Ise ${human.ish.baslangicIl} baslamisam`)
// showJob(human)

//---------------------------------------------------------------------------------------------------------------------------------------


// // T5. showCompany(human) // Islediyim shirketin adi NARTech-dir.

// let showCompany = (human) => console.log(`Islediyim shirketin adi ${human.ish.shirket}-dir.`)

// showCompany(human)
//---------------------------------------------------------------------------------------------------------------------------------------


// // T6. showAgeDifference(human) // baslangicIl-den cixmalisan dogumil-ni ->  Men 24 yasinda ise baslamisam.

// let showAgeDifference = (human) => console.log(`Men ${human.ish.baslangicIl - human.dogumil} yasinda baslamisam`)
// showAgeDifference(human)

//---------------------------------------------------------------------------------------------------------------------------------------


// // T7*. Yeni bir human3 obyekti yarat Spread (...) operatoru ile. Shirket melumatlarini deyis. (JED Academy et)


// let human3 = { ...human };
// human3.ish = { ...human.ish };
// human3.ish.shirket = 'JED Academy'
// console.log(human.ish);
// console.log(human3.ish);




//---------------------------------------------------------------------------------------------------------------------------------------




// // T8. isEqual(human, human3) -> bu funksiya 2 obyekt alir, onlar beraberdirse, console-a "Bunlar eyni obyektlerdir " , eks halda "Bunlar ferqli obyektlerdir"

// let isEqual = (human, human3) => {
//     if (human === human3) {
//         console.log(" Bunlar eyni obyektlerdir")
//     } else {
//         console.log("Bunlar ferqli obyektlerdir")
//     }
// }
// isEqual(human, human3)

//---------------------------------------------------------------------------------------------------------------------------------------


// // T9. isSameName(human, human2) -> bu funksiya 2 obyekt alir, obyektlerin adlari eynidirse "Bunlar eyni ada sahibdirler", eks halda "Bunlar ferqli ada sahibdirler" mesajini console-a cixarsin.

// let isSameName = (human, human2) => {
//     if (human.ad === human2.ad) {
//         console.log("Bunlar eyni ada sahibdirler")
//     } else {
//         console.log("Bunlar ferqli ada sahibdirler")
//     }
// }

// isSameName(human, human2)

//---------------------------------------------------------------------------------------------------------------------------------------


// // T10. isSameCompany(human, human3)-> bu funksiya 2 obyekt alir, obyektlerin shirketlerinin adlari eynidirse "Bunlar eyni shirketdirler", eks halda "bunlar ferqli shirketdirler" mesajini console-a cixarsin.


// let isSameCompany = (human, human3) => {
//     if (human.ish.ad === human3.ish.ad) {
//         console.log("Bunlar eyni shirketdirler")
//     } else {
//         console.log("bunlar ferqli shirketdirler")
//     }
// }
// isSameCompany(human, human3)

//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------





// const laptop = {model:'HP',il:2018, olke: 'china'}

// T1. laptop obyekti yarat (model, il, olke)
// laptop2 yarat, ve kopyala (modeli ve il deyis)
// Her iki obyekti console-a cixart. 

const laptop = {
    model: 'HP',
    il: 2018,
    olke: 'China',
}

const laptop2 = { ...laptop };
laptop2.model = 'BMW';
laptop2.il = 2023;
console.log(laptop);
console.log(laptop2);


//---------------------------------------------------------------------------------------------------------------------------------------

// T2. Bir Arrow  funksiya yarat. Ona laptop obyektini verim. O console-a bele bir mesaj cixartsin:
// showInfo(laptop)
// -> HP markali laptop, 2018-ci ilde china-da istehsal olunub.

const showInfo = (laptop) => console.log(`${laptop.model} markali laptop, ${laptop.il}-ci ilde ${laptop.olke}-da istehsal olunub`);
showInfo(laptop);


// -----------------------------------------------
// T3. showAge(laptop) // Verilen laptopun 6 yasi var.
// 
const showAge = (laptop) => {
    let result;
    if (laptop.il > 2024) {
        result = laptop.il - 2024
    } else if (laptop.il < 2024) {
        result = 2024 - laptop.il
    } else {
        console.log('kencjbА')
    }
    console.log(`Verilen laptopun ${result} yasi var`);
}
showAge(laptop)
//---------------------------------------------------------------------------------------------------------------------------------------


// T4. laptop obyektine yeni bir property-e elave et. sahib: {ad:'Ruslan', soyad:'Zeynalov', dogumIl:2000}

laptop.sahib = { ad: 'Ruslan', soyad: 'Zeynalov', dogumil: 2000 };

//---------------------------------------------------------------------------------------------------------------------------------------


// T5. showOwner(laptop) // HP markali laptopun sahibi Zeynalov Ruslandir. O 2000-ci ilde dogulub.

const showOwner = (laptop) => console.log(`${laptop.model} markali laptopun sahibi ${laptop.sahib.soyad} ${laptop.sahib.ad}dir. O ${laptop.sahib.dogumil} ilde dogulub.`);
showOwner(laptop)

//---------------------------------------------------------------------------------------------------------------------------------------


// T6. showAgeDifferences(laptop) // sahibinin dogum ili ile laptopun il ferqi. (sahib 2000, zapi 2018) -> 18 il.

const showAgeDifferences = (laptop) => {
    let result;
    if (laptop.sahib.dogumil > laptop.il) {
        result = laptop.sahib.dogumil - laptop.il;
    }
    else {
        result = laptop.il - laptop.sahib.dogumil
    }
    console.log(`sahibinin dogum ili ile laptopun il ferqi. ${result} il`);
}
showAgeDifferences(laptop);


//---------------------------------------------------------------------------------------------------------------------------------------

// 
// T7*. Yeni bir laptop3 obyekti yarat Spread (...) operatoru ile. Sahib melumatlarini deyis. (sahib: ali, isiyev, 1995)

laptop3 = { ...laptop };
laptop3.sahib = { ...laptop.sahib };
laptop3.sahib.ad = 'Ali';
laptop3.sahib.soyad = 'Isiyev';
laptop.sahib.dogumil = 1995;



//---------------------------------------------------------------------------------------------------------------------------------------


// T8. isEqual(laptop, laptop3) -> bu funksiya 2 obyekt alir, onlar beraberdirse, console-a "Bunlar eyni obyektlerdir " , eks halda "Bunlar ferqli obyektlerdir"

const isEqual = (laptop, laptop3) => {
    if (laptop === laptop3) {
        console.log("Bunlar eyni obyektlerdir ");
    } else {
        console.log("Bunlar ferqli obyektlerdir");
    }
}
isEqual(laptop, laptop3);

//---------------------------------------------------------------------------------------------------------------------------------------


// T9. isSameName(laptop, laptop2) -> bu funksiya 2 obyekt alir, obyektlerin modelleri eynidirse "Bunlar eyni modeldirler", eks halda "bunlar ferqli modeldirler" mesajini console-a cixarsin.

const isSameName = (laptop, laptop2) => {

    if (laptop === laptop2) {

        console.log("Bunlar eyni modeldirler");
    } else {
        console.log("bunlar ferqli modeldirler");
    }
}

isSameName(laptop, laptop2)

//---------------------------------------------------------------------------------------------------------------------------------------


// T10. isSameOwner(laptop, laptop3)-> bu funksiya 2 obyekt alir, obyektlerin sahiblerinin adlari eynidirse "Bunlar eyni adama mexsusdur", eks halda "bunlar ferqli adamlara mexsusdur" mesajini console-a cixarsin.

const isSameOwner = (laptop, laptop3) => {

    if (laptop.sahib.ad === laptop3.sahib.ad) {
        console.log("Bunlar eyni adama mexsusdur");
    } else {
        console.log("bunlar ferqli adamlara mexsusdur");
    }
}
isSameOwner(laptop, laptop3);

//---------------------------------------------------------------------------------------------------------------------------------------




