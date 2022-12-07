
const requestURL = "./data/data.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
  })
    .then((jsonObject) => {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        let templelist = jsonObject["temples"];
        templelist.forEach(displayCards);
  });

function displayCards(card)
{
    let cardview = document.querySelector('#cardview');
    let cardelt = document.createElement("div");
    cardelt.innerHTML = `
        <h2> ${card.name}</h2>
        <img src="${card.imageURL}" alt="${card.name} temple">
        <p> ${card.street} ${card.citystatezip}</p>
        <p>${card.phone}</p>
        <p> ${card.services}</p>
        <p> Upcoming Closures: ${card.closures}</p>
        `;
    cardview.appendChild(cardelt);
}


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