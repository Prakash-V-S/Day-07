
//d) Print the total population of countries using reduce function

let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);

    console.log("---------------------------the total population of countries --------------------------------");

    let totalPopulation = result.map((element) => element.population).reduce((acc, curr) => {
        return acc + curr;
    })
    console.log("\nThe total population of All countries : ",totalPopulation);
};

//output-----------------------------------------------------
// ---------------------------the total population of countries --------------------------------

// The total population of All countries :  7777721563
