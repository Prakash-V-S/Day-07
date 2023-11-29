
//--- a) Get all the countries from Asia continent /region using Filter function---------------------------------------

let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);
    console.log(result);


    console.log("------------- All The Countries in Asia ----------");
   
    let AsianCountries = result.filter((rtn) => rtn.continents == "Asia").forEach(element => console.log("Country : ",element.name.common))

    //  sample output------------------------------------------------------------------------------------------------------------
    // ------------- All The Countries in Asia ----------
    // Country :  Hong Kong
    // Country :  United Arab Emirates
    // Country :  Laos
    // Country :  Lebanon
    // Country :  Bhutan
    // Country :  China
    // Country :  Sri Lanka
    // Country :  Kyrgyzstan
    //  etc..........

};
