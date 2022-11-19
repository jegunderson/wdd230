// function showWeather(temp, windspeed){
//     temp = 44;
//     windspeed = 10;


//     let tempobj = document.querySelector("#temperature");
//     let windspeedobj = document.querySelector("#windspeed");
//     let windchillobj = document.querySelector("#windchill");
//     let weathericon = document.querySelector("#weathericon");
//     let weatherdesc = document.querySelector("weatherdesc");


//     let windchillmsg = "N/A";

//     if (temp <= 50 && windspeed > 3){

//         let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
//         windchillmsg = `${chill}&deg; F`;

//     }

//     tempobj.innerHTML = `${temp}&deg; F`;
//     windspeedobj.textContent = `Windspeed: ${windspeed} mph`;
//     windchillobj.innerHTML = `Windchill: ${windchillmsg}`;
    
// }

const LAT = "43.9166";
const LON = "-111.3761";
const APIkey = "068ee80986bbbc345261eb9e23b3ef5d";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIkey}&units=imperial`;

function showWeather(obj){

    let temperature = document.querySelector("#temperature");
    // let iconpath = document.querySelector("#icon-src");
    let weathericon = document.querySelector("#weathericon");
    let windspeedobj = document.querySelector("#windspeed");
    let windchillobj = document.querySelector("#windchill");
    let figcaption = document.querySelector("figcaption");
    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}.png`;
    
    let weatherdesc = document.querySelector("weatherdesc");

    temperature.textContent = `${obj.main.temp.toFixed(0)}\u00B0F`;
    // iconpath.textContent = iconURL;
    weathericon.setAttribute("alt", obj.weather[0].description);
    weathericon.setAttribute("src", iconURL);
    figcaption.textContent = obj.weather[0].main;
    windspeedobj.textContent = `Wind Speed: ${obj.wind.speed}`;
    windchillobj.textContent = `Wind Chill: ${obj.wind.deg}`;


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
// showWeather(49, 10);
