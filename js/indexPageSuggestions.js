const container = document.querySelector(".cardContainer");
const card = document.querySelector(".card2");
const loading = document.querySelector(".loading");
const landingPageRecipe = document.querySelector(".landingPageRecipe");
const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=american` + `%2Cflour%2Csugar&ranking=1&ignorePantry=true&number=9&rapidapi-key=1224a43fa6msh6ae6cf96587ed1bp1011a3jsn1f7bcf06b9ca`;

//https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=` + `${searchBarr}` + `%2Cflour%2Csugar&ranking=1&ignorePantry=true&number=12&rapidapi-key=1224a43fa6msh6ae6cf96587ed1bp1011a3jsn1f7bcf06b9ca`; //we separate the wquerystring with the &, and now we are already on querystringss, we remove the data of outer preference

loading.innerHTML += `Loading...`;

async function fetchFrontPage () {


    const response = await fetch(url);
    
    const result = response.json();

   console.log(result[7])

    result.then(function(result){

        console.log(result[7])

        console.log(result[7].id)

        //878755

     
        landingPageRecipe.innerHTML += `<a href="details.html?id=${result[7].id}">   <img src="${result[7].image}" alt="a recipe of food, food and ingredients" class= "recipe-imagesFront" srcset="">
        </a> `;

      

        result.forEach(function(result){

      loading.style.display = "none";

            container.innerHTML += ` <a href="details.html?id=${result.id}"> 
            <div class="card2">
            <img src="${result.image}" alt="a recipe of food, food and ingredients" class= "recipe-image" srcset="">
         <h2 class= "recipeTitle">${result.title}</h2>
            </div></a>`
        })

    
    })

 
}


fetchFrontPage();