
const requestURL = "./data/data.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
  })
    .then((jsonObject) => {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        let businesslist = jsonObject["businesses"];
        businesslist.forEach(displayCards);
        businesslist.forEach(displayList);
  });

function displayCards(card)
{
    let cardview = document.querySelector('#cardview');
    let cardelt = document.createElement("div");
    cardelt.innerHTML = `
        <img src="${card.imageURL}" alt="logo">
        <p> ${card.street} ${card.citystatezip}</p>
        <p>${card.phone}</p>
        <p><a href="${card.websiteURL}">${card.websiteURL}</a></p>
        `;
    cardview.appendChild(cardelt);
}
function displayList(item)
{
    let listview = document.querySelector('#listview');
    let listtable = document.querySelector('#listtable');
    let row = document.createElement('tr');
    row.innerHTML = `
    <tr>
        <td>${item.businessname}</td>
        <td>${item.street} ${item.citystatezip}</td>
        <td>${item.phone}</td>
        <td>${item.websiteURL}</td>
    </tr>
    `
    listview.appendChild(listtable);
    listtable.appendChild(row);
}

let cardselector = document.querySelector("#cardselect");
let listselector = document.querySelector("#listselect");
let cardview = document.querySelector("#cardview");
let listview = document.querySelector("#listview");

cardselector.addEventListener('click', () =>{
    cardview.style.display='grid';
    listview.style.display='none';
    cardselector.style.opacity=1.0;
    listselector.style.opacity=0.5;
})

listselector.addEventListener('click', () =>{
    cardview.style.display='none';
    listview.style.display='block';
    cardselector.style.opacity=0.5;
    listselector.style.opacity=1.0;
})