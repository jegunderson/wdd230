
const LAT = "64.8378";
const LON = "-147.7164";
const APIkey = "068ee80986bbbc345261eb9e23b3ef5d";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIkey}&units=imperial`;

function showWeather(obj) {
  let currenttemp = document.querySelector("#current-temp");
  let iconpath = document.querySelector("#icon-src");
  let weathericon = document.querySelector("#weathericon");
  let figcaption = document.querySelector("figcaption");
  const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}.png`;

  currenttemp.textContent = obj.main.temp;
  iconpath.textContent = iconURL;
  weathericon.setAttribute("src", iconURL);
  weathericon.setAttribute("alt", obj.weather[0].description);
  figcaption.textContent = obj.weather[0].main;
}

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    showWeather(jsObject);
  });