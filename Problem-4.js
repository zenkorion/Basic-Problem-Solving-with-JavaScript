// Problem 4 : Top Rated Restaurant Finder

function topRatedRestaurant(restaurants) {
    if(typeof restaurants !== "object" || restaurants.length === 0) {
        return "Invalid";
    }

    let topRestaurant = restaurants[0];
    for (let i = 0; i < restaurants.length; i += 1) {
        if (restaurants[i].rating >= topRestaurant.rating) {
            topRestaurant = restaurants[i];
        }
    }

    return topRestaurant.name.toUpperCase();
}

console.log(topRatedRestaurant());
