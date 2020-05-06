
// restaurantSearchValue = ""

document.querySelector("#search-btn").addEventListener("click", function(){
    // Search value
    let restaurantSearchValue = document.querySelector("#restaurant-input").value
    // clear entries
    document.querySelector("#printing-area").innerHTML = ""
    // fetch
    fetch('http://localhost:8088/restaurants')
    .then(r => r.json())
    .then(restaurants => {
        restaurants.forEach(element => {
            // If statement matching user search to restaurant name            
            if (element.restaurant.name.toLowerCase().includes(restaurantSearchValue.toLowerCase()) === true) {
                document.querySelector("#printing-area").innerHTML += restaurantPrinter(element.restaurant.name, element.restaurant.menu_url, element.restaurant.user_rating.aggregate_rating, element.restaurant.user_rating.rating_text, element.restaurant.url)
            }
        })})
})