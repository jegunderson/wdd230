function setWindChill(temp, windspeed)
    // let temp = 49;
    // let windspeed = 10;

    let tempobj = document.querySelector("#temperature");
    let windspeedobj = document.querySelector("#windspeed");
    let windchillobj = document.querySelector("#windchill");

    let windchillmsg = "N/A";

    if (temp <= 50 && windspeed > 3){
        let chill = Math.round((35.74 + (0.6215 * temp)) - (35.75))
        windchillmsg = `${chill}&deg; F`;

    }

    tempobj.textContent = temp;
    windspeedobj.textContent = windspeed;
    windchillobj.innerHTML = windchillmsg;