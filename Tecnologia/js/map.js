initMap = () => {
    let coord = [-15.8815, -47.8109]
    let mapProps = {
        center: new google.maps.LatLng(...coord),
        zoom: 10,
        scrollwheel: true
    }
    let map = new google.maps.Map(document.getElementById('map'), mapProps);
    let mapMarker = new google.maps.Marker({position: new google.maps.LatLng(...coord), map: map})
}