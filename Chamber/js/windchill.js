function showWeather(temp, windspeed){
    temp = 44;
    windspeed = 10;


    let tempobj = document.querySelector("#temperature");
    let windspeedobj = document.querySelector("#windspeed");
    let windchillobj = document.querySelector("#windchill");
    let weathericon = document.querySelector("#weathericon");
    let weatherdesc = document.querySelector("weatherdesc");


    let windchillmsg = "N/A";

    if (temp <= 50 && windspeed > 3){

        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
        windchillmsg = `${chill}&deg; F`;

    }

    tempobj.innerHTML = `${temp}&deg; F`;
    windspeedobj.textContent = `Windspeed: ${windspeed} mph`;
    windchillobj.innerHTML = `Windchill: ${windchillmsg}`;
    
}
showWeather(49, 10);
