
const url =``;
async function fetchThiss() {


    ///make a page that has cards in a grid, under 600px or the recommende, then 1 grid, 3 max width, have them stay inside a container that remains within
    
    const container = document.querySelector(".searchContainer");
    
    const card = document.querySelector(".card");
    
    const searchBar = document.querySelector(".searchBar");
    
    
    const searchBarr = document.querySelector(".searchBar").value;

    const container2 = document.querySelector(".container2");

    const loadingSearch = document.querySelector(".loadingSearch");
    
    console.log(searchBarr + "he");
    
    //we recieve the value from a variable, the search gives us the standard back becasue it recognises the search as nothing, it thinks we serached for currency symbol and curly braces, we must make it accept it as a variable,a variable in javasccript, we have our value, it is registered a s  a value, punctuation value
    
    
    // you can use this to clear the "loading" ::   resultsContainer.innerHTML = "";
    
    
    //if we write apple  in right after the equals we will recieve recipes with apples in them 
    
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=` + `${searchBarr}` + `%2Cflour%2Csugar&ranking=1&ignorePantry=true&number=12&rapidapi-key=1224a43fa6msh6ae6cf96587ed1bp1011a3jsn1f7bcf06b9ca`; //we separate the wquerystring with the &, and now we are already on querystringss, we remove the data of outer preference
    
    
    //make button that calls function so the refresh and search in itiates, we now have the value regiostered on callll fetch returnn value targettttt
    
    
    
    //the function is now evoked by default, giving us 5 random recipes, then, on search we will get what matches the user input,//thewriting in the searchbar, this is optimal, make the 
    
    //var src = `http://www.example.com/KML/?=${kml}`   ---this should function   ---the url with this addon:: ?=${variableName}
    
    
    var r2 = "";

 
    
    
    
    const sbv =searchBar.value;
    
    
    console.log(sbv);
    
    async function fetchThis() {

        loadingSearch.innerHTML += `Loading...`;

    
        const response = await fetch(url);
    
        const result = response.json();
    
        console.log(result.value + " helloTop")  //outside of something iimportant
    
    
    
     
    //we need to call ther array that is all the objects

    //result.then becomes the parameter, our function is made by result.then ---we have our path then of that we make these fetches to our data endpoint
    
    result.then(function(results)  {
    
    
    
    
        searchBar.addEventListener("input", (e) => {
    
            // inside, we will need to achieve a few things:
        // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
        let value = e.target.value
    
        // 2. check: if input exists and if input is larger than 0
        if (value && value.trim().length > 0){
    
    
            
            // 3. redefine 'value' to exclude white space and change input to all lowercase
             value = value.trim().toLowerCase()
    
            // console.log(searchBar.value +"bottom");
    
         
            // 4. return the results only if the value of the search is included in the person's name
            // we need to write code (a function for filtering through our data to include the search input value)
        } else {
            // 5. return nothing
            // input is invalid -- show an error message or show no results
    
        }
    
    }
    )
    
    
        for (var i=0; i<10; i++);  
       
        var i;
    
    
    
       //here is the array we've been longing for console.log(results) //we are outside of the fetch function, or the result.forEach that is
    
    // console.log(results)
    
    console.log(results);  //this is our route, we have a fetch that is orgnaised, we assign the value to our paramaters resulst, it is our constName wit ha route that is .then menaing we return a promise, we return a promise .then return a promise ()  .then()
    console.log(results)
    //inside of the const result.then ---- function we find that we use a different name for the paramater of the .then
    //we are now recieving the json-array from then conmst that we have dived into the json of, the string values are here
    //constName.then(function(results){
        //inside the functions argument we tell the constName function to find the array of our responsejson, we fetch the array with a promise dive, promise, this is our value from the promise The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise. the then() method returns a promise, we return the promise from our fetch, infomration is spread, we center it objects item, we have callback functions, we take promise.prototype.then()
    
    
        //the json xhr has both objects we need
        //we see that our json is there, fried-chciken and cheese-topped sloppy joe
    
        
    
    
   
        
        //here we are by the index reaching a different set, further into the fetch api array
        //our other functino with foreach has an iteration that needs adjustement, it returns a singular result
        //in this we have another iteration of the result, 
        //inside of the forEach function it grows into a different form
        
        results.forEach(results => console.log(results.title));
     
    
        results.forEach(function(results) {

            
        loadingSearch.style.display="none";
            
       console.log(results.title+ "The callback"); //here is 


            
            //we must be inside here to recieve tthe full array
    
          container.innerHTML += ` <a href="details.html?id=${results.id}" class= "card">
          <img src="${results.image}" alt="a recipe of food, food and ingredients" class= "recipe-images" srcset=""><h2>${results.title}</h2> 
            <p class="recipeDetail">${results.usedIngredients[0].original}</p> 
      
           </div>
           </div>
           </a>`;


    
    //can you write an if else function inside the html, if this then log it, else log only results.title
           //if you remove the ----     <p>${results.usedIngredients[0].original}</p>  --then it will have default values, have different fetches, then if this function then this will step backwards, when the button click you deny the inital function
    // <span>food</span>
       //we iterate up until 20, the last iteration is 20
       
     
    
       
        });
           //we take the pending promise variable name, here const result is the pending promise, then we make it return an array of objects, with square bracekts, square bracekts with curly braces inside of them
        });
    
        //have cards like business cards, horizontal with text on the right half
    
    //for each entire function .forEach ---all is the variable results as recylced within the innerhtml inside of javascriptt lionk
    
    // make a for each function, we control howw many and awhat comens in by the url and our vaklues put in, so w e log all tha comes back
        
    
    
    
        //mulitple .then because async code awaits
    
    
    
    
     
    
    
    
    
        //console.log(searchBarr + "he"); //here we see that the searchBarr const is indeed updated each time there is another value added in the searchbar, it iterates each time our addEventListener get another vlaue
    
    
    
    
    
    }
    
    fetchThis();
    
    
    //when we click the search button we invvoke this function and also remove the default cards that were therrer alreafdy
    
    
    console.log(r2 + "hello");
    
    };
    
    fetchThiss();
    
    function reload() {window.location.reload()};