import React, { Component } from 'react'

import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import Map from './map'

import actions from './actions';
const menuItems = []

function menu (data) {
    return [
        {
            text: data.Title
        }
        ]
}

export default class Container extends Component {
    state = {
        menuItems: [],
        leftNavOpen: false
    }
    clickHandler = (data) => {
        //this.refs.leftNav.toggle();
        //this.refs.leftNav.setProps(menu(data));
        this.setState({
            menuItems: menu(data),
            leftNavOpen: true
        });
        this.refs.leftNav.open();
        this.render();
}
    ;
    render() {
        return (
            <div>
                <AppBar
                    ref="appBar"
                    title="Map"
                    iconClassNameRight="muidocs-icon-navigation-expand-more" >
                    <LeftNav
                        menuItems={this.state.menuItems}
                        ref="leftNav"
                        docked={false}
                    />
                </AppBar>
                <Map ref="map" markerClick={this.clickHandler.bind(this)} />
            </div>
        );
    }
}