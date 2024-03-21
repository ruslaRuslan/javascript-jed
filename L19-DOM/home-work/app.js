// get random task adli button yaradin. Ona clickleyende https://catfact.ninja/fact apisinden pishikler haqqinda random fact getirib, ikinci hisseye yazdirmalisiniz.  Dizayna cox da onem vermeyin

// const url = `https://catfact.ninja/fact`
// document.getElementById('getFactButton').addEventListener('click', function () {
//     fetch(url).then((response) => response.json())
//         .then((data) => {
//             document.getElementById('factDisplay').innerHTML = data.fact
//         })
//         .catch((error) => {
//             console.log('error', error);
//         })
// })
// -------------------------------------------------------------------------------------------------------------




// https://www.themealdb.com/api/json/v1/1/random.php
// random yemek resepti veren api. Bundan istifade ederek, yemek haqqinda melumatlar verin ))

// const url = `https://www.themealdb.com/api/json/v1/1/random.php`
// const getRecipeButton = document.getElementById('getRecipeButton')
// const recipeDisplay = document.getElementById('recipeDisplay')
// getRecipeButton.addEventListener('click', function () {
//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//             const meal = data.meals[0]
//             recipeDisplay.innerHTML = `
//             <h2> ${meal.strMeal} </h2>
//             <p> <strong>Kategori:</strong> ${meal.strCategory} </p>
//             <p> <strong>MATERIALS:</strong> </p>
//             <ul> 
//             ${getIngredients(meal).join('')}
//             </ul>
//              <p><strong> Specification: </strong> ${meal.strInstructions} </p>
//             `
//         })
//         .catch((error) => {
//             console.log('error', error);
//         })

// })

// const getIngredients = (meal) => {
//     const ingredients = []
//     for (let i = 1; i <= 20; i++) {
//         const ingredient = meal[`strIngredient${i}`]
//         if (ingredient) {
//             const measure = meal[`strMeasure${i}`]
//             ingredients.push(`<li>${ingredient} - ${measure}</li>`)
//         } else {
//             break
//         }
//     }
//     return ingredients
// }


// -------------------------------------------------------------------------------------------------------------
// StarWars apisinden insanlar (people) datalari çəkin və göstərin.

const url = `https://swapi.dev/api/people/`

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const people = data.results;

        people.forEach(person => {
            document.write(`${person.name} </br>`);
            document.write(`${person.birth_year} </br>`);
            document.write(`${person.gender} </br>`);
            document.write(`${person.eye_color} </br>`);
            document.write('----------------------------------------------------------------------------------------------------------------------------- </br>');
        });
    })
    .catch((error)=>{
        console.log('error', error);
    })
