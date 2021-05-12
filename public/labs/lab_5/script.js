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
  return mymap;
}

async function dataHandler(mapObjectFromFunction) {
  // use your assignment 1 data handling code here
  // and target mapObjectFromFunction to attach markers
  const form = document.querySelector('.search form');
  const search = document.querySelector('#zip');
  const targetList = document.querySelector('.target list')

  const request = await fetch('/api');
  const restaurants = await request.json();
  console.table(restaurants)

  form.addEventListener('submit', async (event) => {
    targetList.innerText = '';
    event.preventDefault();
    console.log('form submitted', search.value);
    const display = data.filter((record) => record.zip === search.value);
    const topFive = display.slice(0,5)
  
    console.table(topFive);

    topFive.forEach((row) => {
            
      const appendItem = document.createElement("li");
      appendItem.innerHTML = row.name + ' - ' + row.city + ', ' + row.state + ' ' + row.zip;
      targetList.append(appendItem);
  
  });
  });

    }


async function windowActions() {
  console.log('window loaded')
  const map = mapInit();
  await dataHandler(map);
}

window.onload = windowActions;