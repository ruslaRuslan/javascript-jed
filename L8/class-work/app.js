// 1. masin obyekti yarat: model, il, qiymeti
// 2. qiymeti 1000 azn asagi sal! {14-cu setirdeki kimi}




let car = {
    model: 'BMW',
    year: 2022,
    price: 70000,


}

let endirim = prompt('Ne qeder endirim isdiyisen?');
car.price = car.price - endirim;
console.log(car.price)
