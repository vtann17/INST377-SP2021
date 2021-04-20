function mapInit() {
  // follow the Leaflet Getting Started tutorial here
  const mymap = L.map('mapid').setView([38.9906, -76.9342], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidnRhbm4xNyIsImEiOiJja25wZWRiNDAwMG94MnVwajNjbGszNXJqIn0.iqOZohRqzM8ykNLCOphUdQ'
  }).addTo(mymap);
  return map;
}

async function dataHandler(mapObjectFromFunction) {
  // use your assignment 1 data handling code here
  // and target mapObjectFromFunction to attach markers
  const form = document.querySelector('search form');
  const search = document.querySelector('#zip');
  const 

  const request = await fetch('/api');
  const restaurants = await request.json();
  console.log(restaurants)

  search.addEventListener('input', (event) => {
    event.preventDefault()
    //continue here
  })
  // figure out how to mesh this with above
  function findMatches(wordToMatch, restaurants) {
    return restaurants.filter((place) => {
      const regex = new RegExp(wordToMatch, "gi");
      return place.name.match(regex) || place.category.match(regex);
    });
  }
  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, restaurants);
    const html = matchArray
      .map((place) => {
        return `
            <li class = "suggestion">
                <span class = "name">${place.name}</span>
                <span class = "category">${place.category}</span>
                <span class = "address">${place.address_line_1}</span>
                <span class = "city">${place.city}</span>
                <span class = "zip">${place.zip}</span>
            </li>
        `;
      })
      .join("");
    suggestions.innerHTML = html;
  }
  const searchInput = document.querySelector(".search");
  const suggestions = document.querySelector(".suggestions");
  
  searchInput.addEventListener('keyup', (evt) => {displayMatches(evt)
  });
  }


async function windowActions() {
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;