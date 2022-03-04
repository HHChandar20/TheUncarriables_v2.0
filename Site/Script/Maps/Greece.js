var map = L.map('map').setView([39, 24.73613], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

let leafletIcon = L.icon ({
    iconUrl: '../Images/m.png',
    iconSize: [35,35],
    iconAnchor: [17.5,35],
});

L.marker([40.64487,22.94075],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Thessaloniki.</b><hr><i> One of the biggest cities in Greece.</i>')
.openPopup();

L.marker([38.25069,21.73445],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Patra.</b><hr><i> One of the biggest cities in Greece.</i>')
.openPopup();

L.marker([39.63809,22.41986],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Piraeus.</b><hr><i> One of the biggest cities in Greece.</i>')
.openPopup();

L.marker([35.34213,25.14550],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Herakleion.</b><hr><i> One of the biggest cities in Greece.</i>')
.openPopup();

L.marker([37.98700, 23.72932],{icon:leafletIcon}).addTo(map)
.bindPopup('<b>Athens.</b><hr><i> The capital city of Greece.</i>')
.openPopup();