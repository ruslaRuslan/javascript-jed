// DOM -> Document Object Model (html dokumentinin obyekt modeli)
// console.log(document);
// console.dir(document.body.style.backgroundColor = prompt('isdediyin rengi yaz'))

const rengDeyis = () => {
    console.dir(document.body.style.backgroundColor = prompt('isdediyin rengi yaz'))   // arxa terefde isdediyimiz rengi prompta yazmaqla teyin edirik

}

function kopyala(){
    navigator.clipboard.writeText('RUSLAN ❤ ALI') //bu teyin etdiyimizi kopyaladi
}