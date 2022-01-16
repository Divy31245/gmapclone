mapboxgl.accessToken = 'pk.eyJ1IjoiZGl2eTMxMjQ3IiwiYSI6ImNreWg2dTM0ZDIwMXEyd284OXpkeWlpMmEifQ.2RViVO4EB6pYYqTEy9Uj4g';

navigator.geolocation.getCurrentPosition(successLoacation, errorLocation, {
    enableHighAccuracy: true
})

function successLoacation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}


function errorLocation() {
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );
}