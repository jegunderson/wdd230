
const requestURL = "./data/data.json";
const LIKES_KEY = "temple-likes";

fetch(requestURL)
    .then(function (response) {
        return response.json();
  })
    .then((jsonObject) => {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        let templelist = jsonObject["temples"];
        templelist.forEach(displayTemple);
  })
  .then(()  => {
    let likes_string = localStorage.getItem(LIKES_KEY);
    if (likes_string == null){
        likes_string="[]";
        localStorage.setItem(LIKES_KEY, likes_string);
    }
    
    let likeslist = JSON.parse(likes_string);
    
    likeslist.forEach(displayLike);
  });

function displayTemple(temple)
{
    let cardview = document.querySelector('#cardview');
    let cardelt = document.createElement("div");
    cardelt.innerHTML = `
        <h2> ${temple.name}</h2>
        <img src="${temple.imageURL}" alt="${temple.name} temple">
        <p> ${temple.street} ${temple.citystatezip}</p>
        <p>${temple.phone}</p>
        <p> ${temple.services}</p>
        <p> Upcoming Closures: ${temple.closures}</p>
        <label class="checkbox"><input class="mycheck" id="check-${temple.id}" type="checkbox" onclick="likeTemple(this);"></label>
        <p> Like This Temple! </p>
        `;
    cardview.appendChild(cardelt);
}


function likeTemple(item){
    let likes_string = localStorage.getItem(LIKES_KEY);
    let likeslist = JSON.parse(likes_string);
    if (item.checked){
        if (!likeslist.includes(item.id)){
            likeslist.push(item.id);
        }
    }
    else{
        if (likeslist.includes(item.id)){
            likeslist.splice(likeslist.indexOf(item.id), 1);
        }
    }
    localStorage.setItem(LIKES_KEY, JSON.stringify(likeslist));
}

function displayLike(item){
    let obj = document.getElementById(item);
    obj.checked = true;
}

// likeslist.forEach(displayLike);


// let cardview = document.querySelector("#cardview");
// cardview.innerHTML = displayCards;

// cardselector.addEventListener('click', () =>{
//     cardview.style.display='grid';
//     listview.style.display='none';
//     cardselector.style.opacity=1.0;
//     listselector.style.opacity=0.5;
// })

// listselector.addEventListener('click', () =>{
//     cardview.style.display='none';
//     listview.style.display='block';
//     cardselector.style.opacity=0.5;
//     listselector.style.opacity=1.0;
// })