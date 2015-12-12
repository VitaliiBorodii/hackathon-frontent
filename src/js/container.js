import React, { Component } from 'react'

import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import FlatButton from 'material-ui/lib/buttons/flat-button-label'
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item'
import Map from './map'

import actions from './actions';

function menu (data) {
    return (<List>
        <ListItem primaryText="Date" leftIcon={<i className="fa fa-calendar-o" />}/>
        <ListItem primaryText="Location" leftIcon={<i className="fa fa-map-marker" />}/>
    </List>)

        [
        {
            text: data.file
        }
        ]
}

export default class Container extends Component {
    state = {
        menuItems: [],
        leftBarWidth: 0
    }
    clickHandler = (data) => {
        this.setState({
            menuItems: menu(data),
            leftBarWidth: '600px'
        });
        this.refs.leftNav.open()
}
    ;
    closeSideBar = () => {
        debugger
    }
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
                        style={{
                        //width: this.state.leftBarWidth,
                        //backgroundColor: '#4CAF50',
                        color: '#fff'
                        }}
                        header={<h2 className="side-bar-header" >Inner Page</h2>}
                        onChange={this.closeSideBar}
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