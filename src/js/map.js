import React, { Component } from 'react'
import actions, { loadMarkers } from './actions';

export default class Map extends Component {
    static defaultProps = {
        lat: 50.431622,
        lng: 30.516645
    }
    componentWillMount = () => {
        var self = this;
        if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        self.buildMap(position.coords.latitude, position.coords.longitude)
    }, function (error) {
        self.buildMap(self.props.lat, self.props.lng)
    });
} else {
    console.error("Geolocation is not supported by this browser.")
    }
    }
    buildMap = (lat, lng) => {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        actions.loadMarkers((data) => {
            data.forEach((point) => {
                var marker = new google.maps.Marker({
                    position: {lat: point.Latitude, lng: point.Longtitude},
                    map: map,
                    title: point.Title
                });
                marker.addListener('click', this.props.markerClick.bind(marker, point));
            })
        })
}
    render() {
        return (
            <div id="map"></div>
        );
    }
}