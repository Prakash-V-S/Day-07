
let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);

    //--- a) Get all the countries from Asia continent /region using Filter function---------------------------------------

    console.log("------------- All The Countries in Asia ----------");
    // let AsianCountries = result.filter((rtn) => rtn.continents == "Asia").forEach(element => console.log(element.name.common))

    //  sample output------------------------------------------------------------------------------------------------------------
    // ------------- All The Countries in Asia--------------------------------------------------------------------------
    //  Hong Kong
    //  United Arab Emirates
    //  Laos
    //  Lebanon 
    //  etc..........

    //--- b) Get all the countries with a population of less than 2 lakhs using Filter -----------------------------------

    console.log("--------- The Countries and its Populations lesser than 2 lakh ----------");

    result.filter(rtn => rtn.population <= 200000).forEach(element => console.log(element.name.common, " ", element.population))


    //  sample output------------------------------------------------------------------------------------------------------------
    //-------The Countries and its Populations lesser than 2 lakh ---------------------------------
    //  --------- The Countries lesser that 2 lakh ----------
    //  Antigua and Barbuda   97928
    //  Pitcairn Islands   56
    //  Isle of Man   85032
    //  Norfolk Island   2302
    //  etc..........



};

