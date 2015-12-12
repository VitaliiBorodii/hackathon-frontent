import  './styles/app.css';

const prefix = '../node_modules/';
import React from  'react'
import AppBar from '../node_modules/material-ui/lib/app-bar';

function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);

    build();
}

google.maps.event.addDomListener(window, 'load', initialize);

function build () {
    var rootElem = document.getElementById('root');
React.render(<AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more" />, rootElem);
}

