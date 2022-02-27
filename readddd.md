
      img#aboutImg {

                position: relative;    
                float: none;
                margin: 20px;
                margin: 0 auto;
                display: flex;
                width: 100px;
               
                    
            }
            
            this changes the position to be on top as it gives room underneath




we have a games.forEach(function(game){
    container.innerHTML += `<a href="details.html?id=${game.id}" class="card">
    <div class="image" style="background-image: url(${game.backrgound_image});"></div></a>`;
});

} ---- we write the forEach function in the same way, we then have curly braces with container.innerHTML += ``    now inside of the innerhtml we begin by wrapping each of those classes we create with a details.html page route, then that url is also added a query string that says id= ---this id is then assigned the value =${game.id}








add something that controls the widths of the page,
page is fine, just fix the overflows, add an opactiy fade to the view more

have good h1's

as long as page has good h1's you're good











user the same length units,. have the margins be less than more
few components, have the most important containers control the space, 
find the commonalities, have the same eløementssssss, control from top