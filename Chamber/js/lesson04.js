
// const hamburgerbtn = document.querySelector('.ham');
// const navigation = document.querySelector('.navigation')

// hamburgerbtn.addEventListener('click'), () => {navigation.classList}

function togglemenu() {
    // console.log("It worked!");
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById('hamburgerbtn')
x.onclick = togglemenu;

const date = Date.now();

document.getElementById("datep").innerHTML(date);