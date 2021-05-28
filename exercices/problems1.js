/*
 * Problem 1 - A
 * Create an object with a "hello" method that writes "Hello <name>" in the console
 * 
 */

const obj = {
    name: 'Brian',
    hello: () => console.log(`Hello ${obj.name}`)
}

obj.hello()
obj.name = 'Carlos'
obj.hello()

/*
 * Problem 1 - B
 * How  would you make the name inmutable?
 * (can write or just describe)
 */

Object.freeze(obj)
obj.hello()


/*
 * Problem 2
 * Write a function that logs the 5 cities that occur the most in the array below in 
 * order from the most number of occurrences to least
 */

const citiesList = [
    "nashville",
    "nashville",
    "los angeles",
    "nashville",
    "memphis",
    "barcelona",
    "los angeles",
    "sevilla",
    "madrid",
    "canary islands",
    "barcelona",
    "madrid",
    "nashville",
    "barcelona",
    "london",
    "berlin",
    "madrid",
    "nashville",
    "london",
    "madrid"
]

function logMostOcurrCities(numCities) {
    const cities = {}
    citiesList.forEach(city => {
        cities[city] = !cities[city] ? 1 : cities[city] + 1
    })
    return Object.keys(cities)
        .map(city => ({ name: city, times: cities[city] }))
        .sort((a, b) => b.times - a.times)
        .slice(0, numCities)
        .map(city => city.name)
}

logMostOcurrCities(5)