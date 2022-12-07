function togglemenu() {
    // console.log("It worked!");
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById('hamburgerbtn')
x.onclick = togglemenu;

// last modified
const lastmodified = new Date(document.lastModified);
document.getElementById("last_modified").textContent = `Last modified: ${lastmodified.getDate()}/${lastmodified.getMonth()+1}/${lastmodified.getFullYear()} ${lastmodified.getHours()}:${lastmodified.getMinutes()}:${lastmodified.getSeconds()}`;