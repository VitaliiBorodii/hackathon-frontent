import React, { Component } from 'react'

import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import FlatButton from 'material-ui/lib/buttons/flat-button-label'
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
        this.setState({
            menuItems: menu(data),
            leftNavOpen: true
        });
        this.refs.leftNav.open()
}
    ;
    componentDidMount = () => {
        this.refs.leftNav.close()
    }
    render() {
        return (
            <div>
                <AppBar
                    style={{
                    backgroundColor: '#ee6e73',
                    height: '64px',
                    lineHeight: '64px',
                    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)',
                    color: '#fff'
                    }}
                    ref="appBar"
                    title="Map"
                    iconElementLeft={<i style={{marginTop: 0, fontSize: '3em'}} className="fa fa-mobile"></i>}
                    iconElementRight={<a style={{marginTop: 0}} className='download-link' href='#'>Download the App</a>}
                >
                    <LeftNav
                        menuItems={this.state.menuItems}
                        ref="leftNav"
                        open={this.state.leftNavOpen}
                        //docked={true}
                    />
                </AppBar>
                <Map ref="map" markerClick={this.clickHandler.bind(this)} />
            </div>
        );
    }
}