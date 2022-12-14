
// const hamburgerbtn = document.querySelector('.ham');
// const navigation = document.querySelector('.navigation')

// hamburgerbtn.addEventListener('click'), () => {navigation.classList}

function togglemenu() {
    // console.log("It worked!");
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById('hamburgerbtn')
x.onclick = togglemenu;

// date at top
var today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[today.getDay()];
let month = months[today.getMonth()]


document.getElementById("datep").textContent = `${day}, ${today.getDate()} ${month} ${today.getFullYear()}`;

// last modified
const lastmodified = new Date(document.lastModified);
document.getElementById("lastupdatedate").textContent = `${lastmodified.getDate()}/${lastmodified.getMonth()+1}/${lastmodified.getFullYear()} ${lastmodified.getHours()}:${lastmodified.getMinutes()}:${lastmodified.getSeconds()}`;

// Monday Tuesday banner
if (today.getDay() == 1 || today.getDay() == 2){
    document.querySelector("header p").textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}



