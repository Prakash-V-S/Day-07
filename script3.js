
//C) Print the following details name, capital, flag, using forEach function

let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var result = JSON.parse(request.response);


    console.log("  -------Print the following details name, capital, flag, using forEach function----------  ");

    let data = result.forEach(element => { 
        console.log(
            `
    Name : ${element.name.common}
    Capital : ${element.capital}
    Flag : ${element.flag}
            `)       
    });
}

//output-----------------------------------------

// -------Print the following details name, capital, flag, using forEach function----------  
 
//     Name : Burkina Faso
//     Capital : Ouagadougou
//     Flag : 🇧🇫
            
 
//     Name : Hong Kong
//     Capital : City of Victoria
//     Flag : 🇭🇰
            
 
//     Name : United Arab Emirates
//     Capital : Abu Dhabi
//     Flag : 🇦🇪
            
 
//     Name : Antigua and Barbuda
//     Capital : Saint John's
//     Flag : 🇦🇬
            
 
//     Name : Comoros
//     Capital : Moroni
//     Flag : 🇰🇲
//     etc..........
