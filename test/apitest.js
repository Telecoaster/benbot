
let cityid = "6094817";
let apikey = "c799fe4913d1305146de04c0c0a72c83";
let apiURI = `http://api.openweathermap.org/data/2.5/weather?id=${ cityid }&appid=${ apikey }`; 
var Request = require("request");
var weatherJSON;

async function getWeather(callback){
    let cityid = "6094817";
    let apikey = "c799fe4913d1305146de04c0c0a72c83";
    let apiURI = `http://api.openweathermap.org/data/2.5/weather?id=${ cityid }&appid=${ apikey }`; 

    Request.get(apiURI, (error, response, body) => {
        if(error) {
            return "It's cold";
        }
        weatherJSON = JSON.parse(body);
        callback(weatherJSON);
        //console.log(`The temperature in ${ weatherJSON.name } is currently ${ weatherJSON.main.temp } degrees kelvin`);
       //return "test";
    });

    //return weatherJSON;

}

    getWeather(function(weatherText){
        console.log(weatherText);
    });
    




