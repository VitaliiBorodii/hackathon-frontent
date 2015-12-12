import  './styles/app.css';

import React from 'react';
import { render } from  'react-dom';

import Container from './js/container'


function initialize() {
    var rootElem = document.getElementById('root');
    render(<Container />, rootElem);

}

google.maps.event.addDomListener(window, 'load', initialize);




