// create map
// Create map:                                                       
const myMap = L.map('map', {
    center: [48.868672, 2.342130],
    zoom: 12,
});


// add openstreetmap tiles
// Add OpenStreetMap tiles:
L.tileLayer('https://tile.openstreetmap.org{z}/{x}/{y}/.png', {
    maxZoom: 19,
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    
}).addTo(myMap)


// create and main add geolocation marker
// Create and add a geolocation marker:
const marker = L.marker([48.87007, 2.346453])
marker.addTo(myMap).bindPopup('<b>The Hoxton, Paris</b>').openPopup()


// draw the 2nd arrondissement
// Draw the 2nd Arrondissement                                          
var polygan = L.polygan([
[48.863368120198004, 2.3509079846928516],
[48.86933262048345, 2.3542531602919805],
[48.87199261164275, 2.3400569901592183],
[48.86993336274516, 2.3280142476578813] ,
[48.86834104280146, 2.330308418109664]
], {
fill: false,
color : '#2819f7'

})


// create red pin marker


// metro station markers



