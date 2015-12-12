import React, { Component } from 'react'

import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import FlatButton from 'material-ui/lib/buttons/flat-button-label'
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item'
import Map from './map'
import MenuItem from 'material-ui/lib/menus/menu-item';
import Video from './video'
import actions from './actions';

function menu (data) {
    return ([
        {
            text: 'Date: ' + new Date(data.time)
        },
        {
            text: 'Place: [' + data.lat + ', ' + data.lng + ' ]'
        }
    ]);
}

export default class Container extends Component {
    state = {
        menuItems: [],
        leftBarWidth: 0,
        item: {}
    }
    clickHandler = (data) => {
        this.setState({
            item: data,
            menuItems: menu(data),
            leftBarWidth: '600px'
        });
        this.refs.leftNav.open()
}
    ;
    closeSideBar = () => {
        var elem = document.querySelectorAll('[data-reactid=".0.0.3.0"]')[0];
        var self = this;

        function closeSide() {
            self.refs.leftNav.close();
            elem.removeEventListener('click', closeSide)
        }

        if (elem) {
            elem.addEventListener('click', closeSide)
        }
    }

    componentDidMount = () => {
        this.refs.leftNav.close()
    }
    render() {
        var i = this.state.item;
        var date = new Date(1000 * (i.time || null)).toISOString().slice(0, 10);
        var coords = '[' + i.lat + ', ' + i.lng + ']';
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
                        onNavOpen={this.closeSideBar}
                        style={{
                        //width: this.state.leftBarWidth,
                        //backgroundColor: '#4CAF50',
                        color: '#fff'
                        }}
                        header={<h2 className="side-bar-header" >Menu</h2>}
                        onChange={this.closeSideBar}
                        // menuItems={this.state.menuItems}
                        ref="leftNav"
                        docked={false}
                    >
                        <MenuItem index={1}><Video src={this.state.item.file}/></MenuItem>
                        <MenuItem index={1}><i className="fa fa-calendar-o"/> Date: {date}</MenuItem>
                        <MenuItem index={1}><i className="fa fa-map-marker"/> Place: {coords}</MenuItem>
                    </LeftNav>
                </AppBar>
                <Map ref="map" markerClick={this.clickHandler.bind(this)} />
            </div>
        );
    }
}