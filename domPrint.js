function restaurantPrinter (nameOfRestaurant, menuURL, ratingScore, userRating, restaurantURL){
    return `
    <div id="restaurant-card" class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${nameOfRestaurant}</h5>
            <a href="${menuURL}" class="card-subtitle mb-2 text-muted">Menu</a>
            <p class="card-text">User Rating: ${ratingScore} ${userRating}</p>
            <a href="${restaurantURL}" class="card-link">Website</a>
        </div>
    </div>`
}