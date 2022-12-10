const LAT = "33.4127";
const LON = "111.8197";
const APIkey = "068ee80986bbbc345261eb9e23b3ef5d";


const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIkey}&units=imperial`;

function showWeather(obj){

    let temperature = document.querySelector("#temperature");
    // let iconpath = document.querySelector("#icon-src");
    let weathericon = document.querySelector("#weathericon");
    let windspeedobj = document.querySelector("#windspeed");
    let humidityobj = document.querySelector("#humidity");
    let figcaption = document.querySelector("figcaption");
    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}.png`;
    
    let weatherdesc = document.querySelector("weatherdesc");

    
    let temp = obj.main.temp.toFixed(0);
    let windspeed = Math.floor(obj.wind.speed);
    let humidity = obj.main.humidity;
    

    // if (temp <= 50 && windspeed > 3){

    //     chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
    // }

    temperature.textContent = `${temp}\u00B0F`;
    // iconpath.textContent = iconURL;
    weathericon.setAttribute("alt", obj.weather[0].description);
    weathericon.setAttribute("src", iconURL);
    figcaption.textContent = obj.weather[0].description;
    windspeedobj.textContent = `Wind Speed: ${windspeed} mph`;
    humidityobj.textContent = `Humidity: ${humidity}%`;


    // let windchillmsg = "N/A";

    // if (temp <= 50 && windspeed > 3){

    //     let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
    //     windchillmsg = `${chill}&deg; F`;

    // }

    // tempobj.innerHTML = `${temp}&deg; F`;
    // windspeedobj.textContent = `Windspeed: ${windspeed} mph`;
    // windchillobj.innerHTML = `Windchill: ${windchillmsg}`;
    
}

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        showWeather(jsObject);
    });