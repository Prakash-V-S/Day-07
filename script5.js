
//e) Print the country that uses US dollars as currency.

let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
    var result = JSON.parse(request.response);

    // Use map and filter to get countries that use US dollars as currency
    console.log("------------- Countries that use US dollars ----------");
    let usdCountries = result
        .filter((country) => country.currencies && country.currencies.USD)
        .map((country) =>  console.log("Country : ",country.name.common));

};
//Output-----------------------------------------------------------------
// ------------- Countries that use US dollars ----------
//  Country :  Panama
//  Country :  Ecuador
//  Country :  United States Virgin Islands
//  Country :  Northern Mariana Islands
//  Country :  United States Minor Outlying Islands
//  Country :  Turks and Caicos Islands
//  Country :  American Samoa
//  Country :  Palau
//  Country :  Puerto Rico
