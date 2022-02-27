


const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/`  + id + `/information/?rapidapi-key=1224a43fa6msh6ae6cf96587ed1bp1011a3jsn1f7bcf06b9ca`; //we separate the wquerystring with the &, and now we are already on querystringss, we remove the data of outer preference

//const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/`  + id + `/information/?rapidapi-key=1224a43fa6msh6ae6cf96587ed1bp1011a3jsn1f7bcf06b9ca`; //we separate the wquerystring with the &, and now we are already on querystringss, we remove the data of outer preference
//const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/`  + id + `/information/?rapidapi-key=1224a43fa6msh6ae6cf96587ed1bp1011a3jsn1f7bcf06b9ca`; //we separate the wquerystring with the &, and now we are already on querystringss, we remove the data of outer preference
//we must find the endpoint that leads us straight into our array that we need
//we must learn how to find a specific recipe, the url for games is this::  https://api.rawg.io/api/games/" + id 
//heree it is:: the format of the api endpoint:: https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information/?rapidapi-key=1224a43fa6msh6ae6cf96587ed1bp1011a3jsn1f7bcf06b9ca


console.log(url);

async function fetchRecipe() {

    try {

        const response = await fetch(url);
        const details = await response.json();

     const title = details.title;

     console.log
     (title);

        console.log(details);

        createHtml(details);
    }

    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error)
    }
}

fetchRecipe();

function createHtml(details) {
    console.log(details);
    console.log(details.image)
    

    detailContainer.innerHTML = `<div class = recipe><h1>${details.title}</h1>
    <img class= "recipeImage" src= ${details.image}>
    </div>
    <p>${details.summary}</p>`;
}