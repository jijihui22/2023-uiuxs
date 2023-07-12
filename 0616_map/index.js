let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 37.5666612, lng: 126.9783785 },
    zoom: 16,
  });
}

initMap();