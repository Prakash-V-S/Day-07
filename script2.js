
    //b) Get all the countries with a population of less than 2 lakhs using Filter -----------------------------------


let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);


    console.log("--------- The Countries and its Populations lesser than 2 lakh ----------");

    result.filter(rtn => rtn.population <= 200000).forEach(element => console.log("Country : ",element.name.common," \nPopulation : ", element.population,"\n"))


    //  sample output------------------------------------------------------------------------------------------------------------
   
    // --------- The Countries and its Populations lesser than 2 lakh ----------
    
    // Country :  Antigua and Barbuda  
    // Population :  97928 
    
    // Country :  Pitcairn Islands  
    // Population :  56 
    
    // Country :  Isle of Man  
    // Population :  85032 
    
    // Country :  Norfolk Island  
    // Population :  2302 
    
    // Country :  Tuvalu  
    // Population :  11792 
    
    // Country :  Anguilla  
    // Population :  13452 
    //  etc..........



};
