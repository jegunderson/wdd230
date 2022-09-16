const today = new Date();
document.querySelector("footer div span").textContent = today.getFullYear();
// document.getElementById("lastupdatedate").textContent = document.lastModified
const lastmodified = new Date(document.lastModified);
document.getElementById("lastupdatedate").textContent = `${lastmodified.getDate()}/${lastmodified.getMonth()+1}/${lastmodified.getFullYear()} :-)`;