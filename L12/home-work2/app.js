// ## Task 1

// ### Üç qrup yoldaşının adlarından ibarət massiv yaradın; Başqa bir qrup yoldaşının adını massivin sonuna əlavə edin; İlk adı silin; Massivi konsola çıxarın.

// let massiv = ['ali', 'ruslan', 'namiq', 'elmir', 'rosen', 'elnur', 'abbas', 'cavad', 'cavid', 'sehran']
// let result = massiv.push('IMAMETDIN')
// console.log(massiv);

// ---------------------------------------------------------------------------------------------------------------------------------------

// ## Task 2

// ### Üç addan ibarət massiv yaradın.Massivin ikinci elementinin dəyərini “Classified” ilə əvəz edin.Massivi konsola çıxarın.

// let massiv = ['ali', 'ruslan', 'qahraman']
// massiv[1] = 'Classified'
// console.log(massiv);

// ---------------------------------------------------------------------------------------------------------------------------------------


// ## Task 3

// ### 5 rəqəmdən ibarət massiv yaradın.Orijinal massivin surətini çıxarın və yeni massivin bütün elementlərini ikiqat artırın.Orijinal massivin dəyişmədiyini yoxlayın.

// let massiv = [5, 9, 6, 3, 1];
// let copiedMassiv = [...massiv];
// let newMassiv = copiedMassiv.map((element) => element * 2)
// console.log("Orijinal massiv", massiv);
// console.log("Yeni massiv", newMassiv);



// ---------------------------------------------------------------------------------------------------------------------------------------


// ## Task 4

// ### Massiv verilib. "Episode 4: New Hope" kimi mesajları ardıcıl olaraq konsola çıxarın.Massiv elementlərin düzün.

// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];

//     - //Episode 4: New Hope
//     - //Episode 5: The Empire strikes back
//     - //Episode 6: Return of the Jdi

// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];

// arr.forEach((element, index) => {
//     console.log(`Episode ${index + 4}: ${element}`);
// })


// ---------------------------------------------------------------------------------------------------------------------------------------


// ## Task 5

// ### İstifadəçidən vergüllə ayrılmış beş ədədi daxil etməyi xahiş edin və onları massivdə saxlayın.İstifadəçidən beş ədəd elementi daxil etməyi tələb edən, onları massivə yazan və ən kiçik ədədi konsola çıxaran proqram yazın.

// let user = prompt('vergüllə ayrılmış beş ədəd daxil edin')
// let numbers = user.split(',').map(Number)
// numbers.sort((a, b) => a - b)
// console.log('kiçik ədəd:', numbers[0]);


// ---------------------------------------------------------------------------------------------------------------------------------------


// ## Task 6

// ### Verilən mətn tip dəyərdəki vergülləri nöqtəli vergüllə əvəz edin. '32, 31, 34, 36, 31' mətni verilmişdir, İçindəki vergülləri nöqtəli vergüllə əvəz edin.(Massivden istifade ederek)


// function birVergulBirVergulNoqte(...user) {
//     result = user.map((element) => element.replaceAll(',', ';'))
//     console.log(result);
//     return result
// }
// birVergulBirVergulNoqte('32, 31, 34, 36, 31')


