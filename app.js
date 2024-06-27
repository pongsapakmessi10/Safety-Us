function initMap() {
  var map = new longdo.Map({
      placeholder: document.getElementById('map')
  });
  map.location({ lon: 100.5018, lat: 13.7563 }, true); // Example coordinates for Bangkok
}

document.addEventListener('DOMContentLoaded', initMap);


function goToSetting() {
  window.location.href = 'setting.html';
}