mapboxgl.accessToken = 'pk.eyJ1IjoicGFya2VyYWRhbXMiLCJhIjoiY2t2bzFtcjJtMDlxczJ2a2dzbm16cDkybSJ9.jVv2Btkawt6rrSJtAKx0EQ';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v10',
center: [45.69213912794669,43.31524654154413],
zoom: 16.5,
pitch: 45
});

function rotateCamera(timestamp) {
// clamp the rotation between 0 -360 degrees
// Divide timestamp by 100 to slow rotation to ~10 degrees / sec
map.rotateTo((timestamp / 150) % 360, { duration: 0 });
// Request the next frame of the animation.
requestAnimationFrame(rotateCamera);
}

map.on('load', () => {

// Start the animation.
rotateCamera(0);

// Add 3d buildings and remove label layers to enhance the map
const layers = map.getStyle().layers;
for (const layer of layers) {
if (layer.type === 'symbol' && layer.layout['text-field']) {
    // remove text labels
    // map.removeLayer(layer.id);
}
}

const marker1 = new mapboxgl.Marker({"color": "e26919"})
.setLngLat([45.69213912794669,43.31554654154412])
.addTo(map);

map.addLayer({
'id': '3d-buildings',
'source': 'composite',
'source-layer': 'building',
'filter': ['==', 'extrude', 'true'],
'type': 'fill-extrusion',
'minzoom': 15,
'paint': {
    'fill-extrusion-color': '#aaa',

    // use an 'interpolate' expression to add a smooth transition effect to the
    // buildings as the user zooms in
    'fill-extrusion-height': [
        'interpolate',
        ['linear'],
        ['zoom'],
        15,
        0,
        15.05,
        ['get', 'height']
    ],
    'fill-extrusion-base': [
        'interpolate',
        ['linear'],
        ['zoom'],
        15,
        0,
        15.05,
        ['get', 'min_height']
    ],
    'fill-extrusion-opacity': 0.6
}
});
});
