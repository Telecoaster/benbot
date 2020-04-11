
let cityid = "6094817";
let apikey = "c799fe4913d1305146de04c0c0a72c83";
let apiURI = `http://api.openweathermap.org/data/2.5/weather?id=${ cityid }&appid=${ apikey }`; 
var Request = require("request");

Request.get(apiURI, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    let weatherJSON = JSON.parse(body);
    console.log(`The temperature in ${ weatherJSON.name } is currently ${ weatherJSON.main.temp } degrees kelvin`);
});

