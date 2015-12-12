import  './styles/app.css';

const prefix = '../node_modules/';
import React from 'react';
import { render } from  'react-dom';

import Container from './js/container'


function initialize(lat, lng) {
    var rootElem = document.getElementById('root');
    render(<Container />, rootElem);

}


function clickHandler(marker) {
    console.log(marker)
}

google.maps.event.addDomListener(window, 'load', initialize);




